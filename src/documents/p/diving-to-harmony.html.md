---
title: "Diving to Harmony: ECMAScript 6"
layout: "default"
date: 2014-05-23 

largeImage: "http://juriy.com/img/diving-to-harmony/logo-small.jpg"
twitterDescription: "Diving to Harmony: an introductionary post to a series of articles about ECMAScript 6"
twitterImage: "http://juriy.com/img/diving-to-harmony/logo-small.jpg"
facebookImage: "http://juriy.com/img/diving-to-harmony/logo-small.jpg"
facebookDescription: "Diving to Harmony: an introductionary post to a series of articles about ECMAScript 6"
facebookPublishedTime: "2014-05-23 "
facebookModifiedTime: "2014-05-23 "
facebookSection: "harmony"
---

<div style="width: 100%; text-align: center">
	<img src="/img/diving-to-harmony/logo-small.jpg" />
</div>

ECMAScript 6 edition is *the* next big thing that is hiting the world of web development. ECMA-262, a standard behind JavaScript is about to be finalized which means that JavaScript as well as several other languages will soon be significantly improved. This post is a short introduction to a whole series of posts that cover ECMAScript 6 edition. This series is called *"Diving to Harmony"*.

The last standard - ECMAScript 5 was published back in 2009. Last five years were quite intense for JavaScript and it became significantly more popular. Partly because of Node.js and serverside-js movement, partly because of HTML5 features that turned browsers into a powerful virtual machines capable of running applications never seen before. 

We're writing way more JavaScript code than we used to write back in late 2000's. The more code you write the better you understand what is missing in the language. ECMAScript 6 is a natural evolution of a standard that is driven by community experience. It brings new features that will drastically change the way you think about JavaScript.


What's new
----------
The change is big indeed. A previous version of the standard, ES5, mostly brought us new APIs, "strict mode", getters/setters, property configurations as well as several convenience features. The syntax hasn't changed and the language remained as we used to know it.

ES.next (a code name for 6 edition) is dramatically different from its predecessor. It is bringing new syntax, new keywords, new data structures and what's more important new language concepts. Below is a brief list of changes that we'll cover in the upcoming posts:


 * Block scoped let and constants
 * Default, spread and rest arguments
 * Arrow Functions 
 * Iterators and generators
 * Typed arrays and typed objects
 * Destructuring and Array comprehension
 * Standard collections
 * Classes
 * Symbols
 * Modules
 * Proxy
 * Promises
 * Reflection
 * Template strings
 * Tail recursion

The standard itself grew from roughly 250 pages in 2009 to 600+ pages today. Many exciting things to learn!

Diving to Harmony
-----------------

This post series brings together three aspects that will make you a better ES6 developer:

 * Simple and effective explanation of new language features with code examples (explaining *what* is a certain feature)
 * Best practices, use cases and pitfalls (explaining *how* ans and *when* to use it)
 * Implementation state in an existing JavaScript engines and libraries (explaining *where* to try the feature yourself)

Once you master *what*, *when*, *where* and *how* - you are ready to write a high quality ES6 code.

"Diving to Harmony" posts are linked with the text of a ECMA-262 version 6 draft. The links, text and examples are updated as the text of a standard updates (however do not expect too many changes as it is almost finalized). 

Each post has a list of useful external resources that you might want to follow for extra details. Wherever possible I will point you to existing implementations of ES.next parts and encourage you to write some live code yourself. Developers are already building their frameworks around those yet-to-come features. Take a look at [koa][koa] if you're curious.

Another resource about ES6?
---------------------------

There are other worthy resources around the net dedicated to ES6. The most notable are:

 + [MDN articles][mdn]
 + [Work in progress book by Nicholas Zakas][understandinges6]
 + [Slides by Dr. Axel Rauschmayer][es6 slides]
 + As well as several smaller useful posts [[1]][post-1] [[2]][post-2] [[3]][post-3]

So why writing another post series? While other resources are definitely great (and I don't have a goal to compete in technical writing or skill with Nicolas or Dr. Rauschmayer) they mostly focus on listing the new features of a language acting as a friendly documentation enriched with code examples. "Diving to Harmony" shifts the focus towards emerging best practices. It is like a difference between knowing _what_ Proxy can do and knowing _how_ and _when_ to use those features.

I hope that you will find this material useful. Since my blog does not yet have a descent commenting system (work in progress) feel free to send me an email to juriy.bura@gmail.com if you have thoughts to share. It is impossible to write a high quality material without your feedback. Besides, I'm always glad to hear from you!  

Links: 

 + [ecmascript 5](http://www.ecma-international.org/publications/files/ECMA-ST/Ecma-262.pdf)
 + [new in ecma 5](http://www.infoq.com/news/2011/04/ECMAScript-5)
 + [ecmascript 6](http://wiki.ecmascript.org/doku.php?id=harmony:specification_drafts)


[koa]: http://koajs.com/ "koa.js"
[mdn]: https://developer.mozilla.org/en/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla
[es6 slides]: http://www.2ality.com/2011/09/es6-8.html
[understandinges6]: https://github.com/nzakas/understandinges6
[post-1]: http://blog.tastejs.com/rewriting-a-webapp-with-ecmascript-6
[post-2]: http://addyosmani.com/blog/ecmascript-6-resources-for-the-curious-javascripter/
[post-3]: http://www.2ality.com/2013/06/iterators-generators.html