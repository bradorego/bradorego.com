{
   "categories": [
      "Development"
   ],
   "date": "2018-01-29T01:59:21-05:00",
   "description": "Should designers code? Not exactly, but it helps to have an idea of what goes into the software your team is building and how things work.",
   "draft": false,
   "image": "/img/posts/what-designers-need-to-know/header.jpeg",
   "photoCredit": "https://www.pexels.com/photo/office-working-app-computer-97077/",
   "publishdate": "2016-01-29T14:47:36-05:00",
   "tags": [
      "development",
      "design",
      "front-end",
      "back-end",
      "javascript",
      "teamwork",
      "process"
   ],
   "title": "What Designers Need to Know About Development"
}

<div class="tldnr">
  <h4>TL;DNR</h4>
  <ul>
    <li>There's a lot of discussion around whether designers should code. Here's my take on it. Short answer: No, but you should be aware of the technology.</li>
    <li>As a designer, having at least a vague idea of how the technology behind the products you're working on is beneficial, both in terms of the design work you do and in communicating with other team members.</li>
    <li>There may be certain quirks based on implementation, but overall the pattern is Database --> Server-side --> (API) --> (Middleware) --> Front-End --> Visual/UI Design</li>
  </ul>
</div>

---

It seems that everyone has an opinion on whether designers should code (**include a bunch of links**). You could call this my take on the debate, but that isn't my personal perspective. To me, this is a reflection of my experience interacting with other designers and having my own background/understanding of software engineering and Computer Science. I don't think designers need to understand the intricacies of writing code or of any particular language, but **having an idea of how software as a whole is built can be extremely beneficial**.

# Why Should I Care? <a name="why" href="#why"><i class="ion-link"></i></a>
#### There are myriad benefits to understanding how software happens.

I know what you're thinking:

> Why do I have to go off and learn all this technical mumbo jumbo? My job is to talk to users, understand the problem, and come up with an elegant solution. It's the developer's job to make it happen.

But, bear with me. There are a handful of benefits to knowing how this all works, including:

1. A better grasp of what's possible, practical.
2. Improved communication between you and your development team.
3. An increased ability to call someone out if they're complaining about implementation difficulty.
4. Being able to weigh the pros and cons of different design decisions.
5. Increased credibility with your colleagues.
6. Increased empathy for your development team.

The more you know about "[how the sausage is made](https://english.stackexchange.com/questions/120739/a-peek-into-the-sausage-factory)", the better you are as a **designer**, as a **teammate**, and as an **employee**. There's certainly a case to be made for specialization, but willful ignorance should be considered borderline negligent. Why would you **not** learn more about your line of work?

# The 10,000-foot View <a name="overview" href="#overview"><i class="ion-link"></i></a>
#### If nothing else, read this section.

<figure>
<img src="/img/posts/what-designers-need-to-know/diagram.png"/>
<figcaption>Brad's 10,000 View</figcaption>
</figure>

Okay, so maybe you don't want to go completely down the rabbit hole. I get it; there's already a lot to cover in the design world, and the industry is always evolving and moving forward, so keeping up can be tough. If nothing else, though, you should have a high-level understanding of how software works: how data flows, what languages/tools/practices are in use, (roughly) what's possible, etc.

At its most basic level, this is how software breaks down:

* Database (where data actually lives)
* Back-End (process data, manage storage, and pull in other resources)
* Middleware (translate data from database-friendly to application-friendly)
* Front-End (providing access to data, handle user interaction)
* UX, UI, Visual Design (where you come in)

In case you missed it, you, as a designer, are the very last step in this process. There are [a lot of things that happen](https://www.upwork.com/hiring/development/a-beginners-guide-to-back-end-development/) in order to even get your design to the end-user's device (which we won't cover too much), not to mention how data flows from where it's actually stored (literally a hard drive somewhere on the internet; [hopefully multiple](https://en.wikipedia.org/wiki/Failover)), what needs to happen to that data to make it usable, and the code itself that makes your interactions happen.

Want more, but don't want to read the rest of this? Mozilla has [their own resources](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web) on this topic.

> A brief note: this pretty much only covers web technologies, meaning we're going to ignore native development (iOS, Android, OSX, Windows, etc). Most of this is the same up until you get to Front-End, where you're just using different technologies.

# Back-End <a name="backend" href="#backend"><i class="ion-link"></i></a>
#### Databases, architecture, and languages, oh my!

You hear a lot of conversation around the difference between back-end and front-end when it comes to software development, but what does that actually mean? While there will be a little bit of variation from person-to-person/company-to-company (or even team-to-team), generally speaking, **back-end code** refers to **anything that lives on the server and handles data/remote processing** (compared to front-end, which is usually on the device and handles input and display; more on that later). As you'd imagine, there's a lot of nuance in there, though.

If we go all the way down the stack, even if your back-end is in the cloud, at some point there is a computer (likely multiple; hooray redundancy) connected to the internet somewhere that is storing your files and running your code. The advent of cloud technology has abstracted most of that away (gone are the days of [running your own server](https://philip.greenspun.com/panda/server)), but in extremely rare cases (AWS outages, etc), this is an issue. **If you (or your users) can't access those machines, the rest of the application usually doesn't fare very well**. There are a lot of things that can be done to mitigate those issues (e.g. batching jobs/inputs until you're connected again), but at the end of the day, there are machines with data and code stored on them.

Moving past that, you'll hear conversation around which database language/structure to use. At its basis, this is a "relational vs. document store" discussion, with SQL-family being on the relational side and many variants (MongoDB, Firebase, Neo4j, etc.) on the "NoSQL" side. There are pros and cons of each, so having some sense of how your data stored matters. For a more thorough treatment, talk to your development team, or check out [this Medium post](https://medium.com/omarelgabrys-blog/database-database-options-part-10-380c6e4467d0).

# Middleware <a name="middleware" href="#middleware"><i class="ion-link"></i></a>
#### The bridge between user and data.

The next thing you'll hear a lot about is the different languages and frameworks used to actually write server-side code. **For your purposes as a designer, the nuances between these languages won't have a major impact**, but you may hear engineers debating Ruby ([Rails](http://rubyonrails.org/)) versus Python ([Django](https://www.djangoproject.com/)), PHP ([Laravel](https://laravel.com/)), Java ([Spring](http://spring.io/)), Node.js ([Express](https://expressjs.com/)), or other languages. Familiarize yourself with these terms, but not with the nuances of each.

More importantly, though, is the different in architecture. Mainly, the difference between **monolith and microservice** can have a huge impact on how easy/difficult certain things are for your development team. In a nutshell, server monoliths closely tie all of the functionality together into one large application, whereas microservices are a network of independent programs and functions. They each have their [pros and cons](https://medium.freecodecamp.org/monolith-vs-microservices-which-architecture-is-right-for-your-team-bb840319d531).

<figure>
<img src="https://docs.microsoft.com/en-us/azure/service-fabric/media/service-fabric-overview-microservices/monolithic-vs-micro.png" />
<figcaption><a href="https://docs.microsoft.com/en-us/azure/service-fabric/service-fabric-overview-microservices
">Credit</a></figcaption>
</figure>

The benefits of a monolith are improved code reusability and tighter coupling of shared resources (which can improve performance), whereas the drawbacks are an entangling of components/functionality, increased overall complexity, and scaling difficulties (which can decrease development time). Microservices, conversely, allow for independence/isolation of functions and ease of modifying code, but introduce unique challenges including operational (and functional) overhead, and DevOps/deploy issues. One unique feature of a microservice architecture, though, is the **ability to build components in different languages**, which comes with its own set of benefits (diversity, hiring, using the right tool) as well as challenges (data flow/representation, code quality).

At this point, you might be wondering...

<figure>
<img src="https://media.giphy.com/media/1M9fmo1WAFVK0/giphy.gif" />
<figcaption><a href="https://giphy.com/gifs/why-ryan-reynolds-1M9fmo1WAFVK0/">Credit</a></figcaption>
</figure>

The job of middleware is to **translate data from machine-friendly to user-friendly**, and **user requests/actions to server actions**. This generally takes the form of an [Application Programming Interface](https://en.wikipedia.org/wiki/Application_programming_interface)(API). There are many benefits to putting something between the user (and front-end code) and the data itself (including security). This also allows us to represent data internally in a way that makes most sense from a data storage/retrieval standpoint while providing information in a way that supports the best user experience.

APIs also allow us to expose functionality beyond the individual user's device in the form of [remote procedure calls](https://en.wikipedia.org/wiki/Remote_procedure_call)(RPCs). Basically, it allows us to tell a server to do something on the user's behalf (e.g. "send an email to all of my friends"), expanding the capability of a product or service. Server-side code also allows us to pull in outside resources in the form of 3rd party APIs, meaning we can lean on other functionality (e.g. "post this to Facebook and Twitter").

# Front-End <a name="frontend" href="#frontend"><i class="ion-link"></i></a>
#### Making your beautiful designs come to life.

We've covered a lot so far. We've gone through all of the magic that happens behind the scenes, but we haven't quite reached the end of the journey yet. If you're a designer, **this is likely the level at which you may have some familiarity, and the majority of your conversations will happen** (especially if you have good engineers and they're abstracting a lot of the rest away from you). You've probably heard people talk about HTML, CSS, and JavaScript. You've heard the debate of Angular vs. React vs. Vue. Bootstrap, Material, FontAwesome; these, you feel, are in your wheelhouse. But what does any of that actually mean?

In brief, HTML dictates the **structure of the content** on a website (words, images, high-level sections), CSS controls **how it's displayed** (colors, spacing, typography), and JavaScript handles **complex user interactions**. The lines between these three have been blurring more and more as the web has matured; JavaScript used to be essential to handle any sort of animation or user interaction, but with the advent of "HTML5", CSS has matured to handle a lot of animation and HTML has gained additional features to natively support layout and function (e.g. form validation).

The differences between JavaScript frameworks really isn't significant enough for you to care about unless you get intimately involved in writing code, and frankly it mostly boils down to a [holy war](https://www.google.com/search?q=js+framework+holy+war). React, Angular, Vue, Backbone, Ember, Meteor, Knockout...the list goes on (and seems to be [ever-changing](https://www.bitovi.com/blog/longevity-or-lack-thereof-in-javascript-frameworks)). It may be useful for you to understand the [basics of MVC/MVVM](https://hackernoon.com/mvc-vs-mvvm-how-a-website-communicates-with-its-data-models-18553877bf7d), but I wouldn't worry too much about it.

One thing that will definitely come up (if it hasn't already) is the discussion about whether you should be building a Single Page App (SPA), a Progressive Web App (PWA), a plain ol' website/web app, or if this would be better as a native app. Again, there are pros and cons of each, and understanding your use case as well as the context in which your users will interact with your product will guide your decision. Neoteric has a [good overview of SPA vs. MPA](https://medium.com/@NeotericEU/single-page-application-vs-multiple-page-application-2591588efe58). In my personal opinion, the trend is moving everything toward PWA, and with some of the advances in web/mobile technology and functionality exposure (including push notifications, geolocation, accelerometer, bluetooth, etc), the vast majority of what used to be exclusive to installed apps is now available. Google has some [incredible resources](https://developers.google.com/web/progressive-web-apps/) on PWAs.

It's ironic that the part we spend the most time interacting with directly is the part I'm spending the least amount of time on, but I think it's because (a) it's the most familiar, and (b) honestly it doesn't matter a ton. If I had one recommendation, though, it would be to **learn a little HTML, CSS, and JS**. It'll make working with your developers easier, it'll earn you some street cred, and it'll allow you to start building your own interactive prototypes. It also makes responsive design way easier, as you can see live what happens and how your design adapts.

# User Experience <a name="experience" href="#experience"><i class="ion-link"></i></a>
#### A brief touch upon why we do all of that.

This post isn't supposed to be about design, but I'd be remiss if I didn't at least mention that, at the end of the day, [users don't care about your tech stack](https://hackernoon.com/consumers-dont-care-about-your-technology-4d5cb687d1de). Development teams can be very uppity about how things are done, and there's certainly something to be said about avoiding technical debt, but at the end of the day, **all that matters is whether or not your product/service is achieving a goal for your end users**. Whether you're hosted on AWS or Azure, storing with Mongo or Postgres, running on Rails or Django, built with React or Angular, or if you're using Material or Bootstrap **does. not. matter.**

---

Hopefully this little guide was helpful. Feel free to share with others and engage in conversation via [Twitter](https://twitter.com/intent/tweet?via=bradorego&url=https%3A%2F%2Fbradorego.com%2Fwhat-designers-need-to-know-about-development) or [reach out directly](mailto:hello@bradorego.com).
