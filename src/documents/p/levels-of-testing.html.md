---
title: "Levels of Testing"
layout: "default"
date: 2013-03-28
---

I would never expect that I’m so much into test automation. Last few days I watched a crowd of browsers clicking  buttons, uploading files and navigating across webpages without even a move of a muscle from my side. That probably have something to do with my passion towards all kind of game bots… or this is an escape from the cruel reality and ugly code of a new project.

I started to read more about testing and automation and I was really confused by the classification of the “levels of testing”. Take “Functional Testing”, “Regression Testing”, “System Testing” and “Acceptance Testing” as examples. They are often described as the different phases and many people tend to post long wordy explanations of how they are different. Well, maybe they are right, but I just see “Blah Blah Blah” and unnecessary overcomplication of a simple idea. Let’s review the sample levels to understand what they really mean.

![Levels of Testing][test-layers]

*“Functional”* describes the testing object – *“what”* are we testing, the aspect of application that we put under a test. We want to ensure that program works as written in spec – it *“functions”* properly. Or we check how application reacts on “stress”: a network blackout, or a grenade in a datacenter.

The next question to answer is *“Why”* are we running a particular test. Do we want to find what is more appropriate: give money for a good work or give a list of bugs to fix? Well, this is an *“Acceptance”* testing. Do we want to know if have broken something that used to work? Then this is a *“Regression”* test.

The words living in “why” domain are often mixed up with the words living in “what” domain. The main confusion comes from trying to compare them. It’s like seeking differences between “blue” and “salty”! Moreover this system is described as “levels” – a word that assumes that there is a certain order of components and there are clear borders between them. In my opinion this classification feels much more like a grid with “Why”s on X axis and “What”s on Y axis.

![Testing table][testing-table]

“Functional Acceptance Testing” is OK and so is “Stress Regression Testing”. These terms describe both the aspect that being tested AND the purpose of the test. “Are there enough features implemented so that we can accept the product”, “Will we have problems in handling stress situations if we move from MySQL to Cassandra” are the real questions behind the buzzwords.
Two-word terms to describe testing approach or phase are extremely missleading. Especially when “Why”s and “What”s are mixed. Using word “level” to describe a grid-like structure only adds the confusion to the subject. Well, I guess pyramids sell better than grids and they are easier for senior management to understand. Kidding of course.
Keep it simple and don’t let those terms confuse you!

[test-layers]: /img/test-layers-small.jpg
[testing-table]: /img/testing-1.png
