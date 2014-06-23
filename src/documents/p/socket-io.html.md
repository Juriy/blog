---
title: "What's new in Socket.IO 1.0"
layout: "default"
date: 2014-06-23

largeImage: ""
twitterDescription: "What's new in Socket.IO 1.0"
twitterImage: ""
facebookImage: ""
facebookDescription: "What's new in Socket.IO 1.0"
facebookPublishedTime: "2014-06-23"
facebookSection: "misc"

---

I first stumbled upon Socket.IO when I was writing my book. The chapter was devoted to making a multiplayer version of a standalone HTML5 game. I built up a solid plan: describing transports, implementing ajax-longpoll, some notes about WebSockets (it was 2012, so WebSockets were not yet production-ready especially for mobile devices), and finally writing some logic on top of it. Then I saw Socket.IO and... why would I spend fifty pages writing about transports if I could spend five writing about Socket.IO instead?
 
This tool was simply great. The API was clean and intuitive and coding client-server calls felt natural. Of course it had its own problems. I remember spending an evening to debug it with my Samsung Galaxy v1 that was randomly breaking connections, but it worked at the end. 

Then I forgot about it for some time. Couple of months ago I was conducting a "Node.js Bootcamp" training and Socket.IO was a part of my program. During the presentation one of my students told: "Socket.IO is dead, Guillermo is not updating it, just look at github page". And indeed, there was not to much activity in the github project. 

Luckily, this was in no way the end of life for Socket.IO but rather the preparation for a major rebirth. Socket.IO 1.0 has landed just few weeks ago to show everyone that "the event emitter of the web" is alive and well. 

This post is about the changes in Socket.IO 1.0 compared to the older versions. It covers both the changes in the architecture, npm module ecosystem as well as changes in API. 


What's Socket.IO
================

Socket.IO is a JavaScript library that implements a real time communication between a browser and a server. It abstracts-out the details of underlying transport and provides some higher level abstractions like broadcasts, namespaces and rooms. Socket.IO is both a client and server library. The server by default is Node.js, however other third party ports are available. For example, you can run a Socket.IO server in Java and connect to it from the native ObjectiveC client. 

The basic code for both client and a server is very straightforward and based on the idea of emitted events. You `emit` events on one side of the wire and get them on the other. As simple as that. 

Client:
```javascript
var socket = io();
  socket.emit('greeting', 'Hello, my name is Billy');
  socket.on('message', function(msg) {
  console.log(msg);
});

```
Server:
```javascript
io.on('connection', function(socket){
  socket.on('greeting', function(text) {
      console.log(text);
      socket.emit('message', 'glad to see you');
  });
});
```

This code (omitting some trivial setup) is enough to start communication between a client and a server. The client initiates a connection and sends a greeting to the server. Server gets the greeting and replies with "glad to see you". 

Note. If you did not write any Socket.IO apps before, a great place to start is the official tutorial that shows how to create a simple chat application - http://socket.io/get-started/chat/

New Modules
=========
Before 1.0 Socket.IO was distributed as solid npm package that implemented every bit of functionality inside.

In Socket.IO 1.0 the code broke up into several small reusable modules less dependent on each other. The most notable shift is the extraction of low-level transport details into a separate project called Engine.IO. Now Socket.IO's job is to provide only higher-level facilities: multiplexing, reconnection, rooms, broadcasting, ect. All the heavy-lifting related to transports is done by Engine.IO. 

This change is purely internal. If you are writing your code against Socket.IO you will not see the difference, as Engine.IO is not exposed "as is" to the client code. It is and important and very well-thought architectural change as it makes the overall project more maintainable. Besides, now there's a clear borders of components' responsibilities: Socket.IO is doing logic, Engine.IO is doing communication. 

Socket.IO modules Ecosystem
==================
Socket.IO and Engine.IO both are broken into `core` (socket.io and enigne.io), `clients` (socket.io-client and engine.io-client) and `parsers` (socket.io-parser and engine.io-parser). 

The official part of the ecosystem looks like in the diagram below. The bold lines show actual NPM dependencies while thin black lines show logical relations. I omitted the repeating parts in the names of the projects, so -client in socket.io is `socket.io-client` and in engine.io it is `engine.io-client`.

<img src="/img/socket-io/socket-io-components.png" />

This section describes modules behind each of ecosystems. We start from smaller and more independent modules and then move to higher-level abstractions.

- `engine.io` - a transport engine. Abstracts-out the details of exchanging messages between a client and a server. It defines `Socket` - a class that hides the details of transports used by a client at a given time. This module low-level. For example there's no notion of types of events or rooms: only strings and binary arrays that travel between a client and a server. High level details are left for Socket.IO. You can use Engine.IO as a standalone server however in most cases it is better to use Socket.IO. This module uses engine.io-parser to encode and decode messages. 

- `engine.io-client` - a client implementation for engine.io that can run both in browser and Node.js. Uses engine.io-parser to encode/decode messages. 

- `engine.io-parser` - an implementation of engine.io protocol. Includes both encode and parse functions. Engine.IO uses a simple protocol to exchange binary or utf-8 messages. If there's no binary support on the platform, message is passed as Base64 string. The only meta-data sent along with the message is `message type`: `ping`, `pong`, `data`, etc. Parser can also work with batches: encode or decode multiple messages as one packet.

- `socket.io` - that's what this post is all about. The high-level event transmitter that implements re-connects, rooms, broadcasts, multiplexing and other advanced features. It relies on `engine.io` for low-level transport, `socket.io-parser` for protocol handling, `socket.io-client` for client-side code and `socket.io-adapter` for tracking rooms and namespaces.

- `socket.io-adapter` - having somewhat misleading name, an Adaptor is a registry of users, rooms and namespaces. It has only 4 methods: 
     - `add()`: for adding a socket to a room
     - `del()`: to delete a socket from a room
     - `delAll()` - to delete a socket from all rooms
     - `broadcast()` - to send a message to all sockets in a room
this class is a base for extensions. `socket.io-redis` builds a redis-based Adaptor that allows to distribute Socket.IO application between multiple nodes. 

- `socket.io-client` - a client for Socket.IO. You can use it from both browser and Node.js. Uses socket.io-parser to encode and decode messages

- `socket.io-parser` - a parser and encoder of Socket.IO protocol, a reference implementation of `socket.io-protocol`. It is not an _extension_ of engine.io protocol. It runs on top of engine.io just like REST is a protocol on top of HTTP and not an extension of HTTP. Socket.IO protocol describes the transformation from/to Engine.IO transportable entity plus Socket.IO specific fields like packet type or namespace for multiplexing.

- `socket.io-protocol` - a description of Socket.IO protocol (not the implementation, this repository has only a readme.MD in it). This protocol is higher-level than the protocol of Engine.IO. For example, it supports sending different types of data: strings, JSON objects or binary data. Besides it supports matching requests and responses and marking messages for rooms.

- `socket.io-redis` - a Redis-based implementation of an Adapter. With the help of this module you can set up a cluster of Socket.IO instances that will use Redis for communication between nodes. 

- `socket.io-emitter` - a Socket.IO-independent Node.js client that can send messages to redis-powered cluster

New Transport strategy
===============
Before 1.0 Socket.IO was acting optimistic and first tried to establish the WebSocket connection. If that failed, Socket.IO downgraded to XHR. This approach could cause long delays if the environment was blocking WebSockets. Sometimes a client had to time out to know that WebSocket is not available. 

Engine.IO implements a pessimistic but more user-friendly strategy. It starts from XHR longpoll and upgrades to WebSockets afterwards. Since XHR is available everywhere and less likely to cause problems, you get an immediate connection to the server and start to send and receive messages while engine.io is upgrading your connection. Over the last years this strategy has proven to bring better user experience most of the times. 

New API
===========
Socket.IO introduced several big changes to the architecture and API: middleware, finer-grained logging and client API changes.

Let's start with middleware as it is the most notable change. Just like in Express.js you can now register a function that is executed once the socket is created:

```javascript
io.use(function(socket, next){
  count++;
  next();
});
```

This function can also perform more sophisticated logic like handling authorization, auto-joining some rooms or adding extra listeners for statistics. If you have some code in your Socket.IO application that does not implement core logic but rather handles an auxiliary aspect (authorization, logging, statistics, filters), it is a good candidate for becoming a middleware. 

The other change is logging strategy. Socket.IO used to be quite verbose and it was lacking low-level control of individual components console output. Starting from version 1.0 Socket.IO is `debug` (https://www.npmjs.org/package/debug). Now it is a pleasure to configure logging. Just set a `DEBUG` environment variable and you get an output only from the components that you need. For example, this is the way to print only what a `Socket` object is having to say: 

```set DEBUG=socket.io:socket ```

There are more changes related to API, but since they are well listed in the official documentation, I will just leave a reference to the migration page: http://socket.io/docs/migrating-from-0-9/. 


Summary
=======
Summarizing the changes, Socket.IO 1.0 became cleaner, smarter and easier to extend than its 0.9x predecessors.

Links
====
Below are some links to githunb repositories that I referred in this post.

- https://github.com/Automattic/engine.io
- https://github.com/Automattic/engine.io-parser
- https://github.com/Automattic/engine.io-client
- https://github.com/Automattic/socket.io
- https://github.com/Automattic/socket.io-parser
- https://github.com/Automattic/socket.io-protocol
- https://github.com/Automattic/socket.io-redis
- https://github.com/Automattic/socket.io-emitter
- https://www.npmjs.org/package/debug

Comments
========
Please add your comments on github, or twitter <a href="https://twitter.com/juriy">@juriy</a>. 