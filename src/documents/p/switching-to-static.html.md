---
title: "Switching to static"
layout: "default"
date: 2014-05-18

largeImage: ""
twitterDescription: ""
twitterImage: ""
facebookImage: ""
facebookDescription: ""
facebookPublishedTime: ""
facebookModifiedTime: ""
facebookSection: ""

---

I've got rid of Wordpress. During 8 years of blogging I was fighting with it. Everybody else around was using WP I thought that the problem was in me and all that pain is an essential part of tech writing. Wordpress was getting bigger and bigger and now it looks like an overly-complex engine for a small thing like a blog with several dozens of posts. It is still great for something more complex, but for serving several dozens of posts it is too much. For me personally the most useful feature of WP was commenting system but high volumes of spam drive standard Wordpress comments almost useless.


![Docpad logo](/img/docpad.gif "Dodpad logo")


The setup that I'm using right now is based on a great tool called Docpad (http://docpad.org). This generator of static pages takes a template and a bunch of posts and creates a static site that can be served by nginx, github pages, Heroku or any other service capable of hosting static content. Templates allow to insert just enough logic to do the tasks that I had so far. CSS and HTML is all hand-written by myself. Finally, I feel like I have control over my content.

What's best about this approach is that I can keep my posts in a in a writer-friendly markdown format and edit them any time. I hated to propagate changes from my drafts to online text editor that stores a post in a database. I hated to backup database each time I needed to save my posts. I hated to apply endless security patches. Now I have no database, my editor is Sublime Text and my site is as secure as nginx is.

 
To make setup even neater I’ve created a github repository for posts and added a webhook that calls a node.js webserver each time someone pushes new content. Node.js server in turn does `git pull` and re-generates the content of a blog. That’s quite close to a publishing system that I’ve dreamt of. The only thing that I’m missing is a way to edit and push new posts from my iPad, but I’ll figure out how to do that too.

Docpad is not the only tool in a family. In fact, there are many such tools. There's even a website that compares the most popular frameworks in each language and platform: http://staticgen.com/ so if you like the idea I recommend to take a brief look before choosing a tool that is right for you. In any case, if decide to change a tool later it should be relatively straightforward since all your posts and templates are independent from the generators. 
