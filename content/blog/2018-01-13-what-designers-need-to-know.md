{
   "categories": [
      "Development"
   ],
   "date": "2018-01-13T01:59:21-05:00",
   "description": "Should designers code? Not exactly, but it helps to have an idea of what goes into the software your team is building and how things work.",
   "draft": true,
   "image": "/img/posts/:title/header.png",
   "photoCredit": "",
   "publishdate": "2016-01-13T14:47:36-05:00",
   "tags": [
      "development",
      "design",
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

It seems that everyone has an opinion on whether designers should code (**include a bunch of links**). You could call this my take on the debate, but that isn't my personal perspective. To me, this is a reflection of my experience interacting with other designers and having my own background/understanding of software engineering and Computer Science. I don't think designers need to understand the intricacies of writing code (**link**?) or of any particular language, but having an idea of how software as a whole is built can be extremely beneficial.

# Why Should I Care? <a name="why" href="#why"><i class="ion-link"></i></a>
#### There are myriad benefits to understanding how software happens.

I know what you're thinking:
<blockquote>
Why do I have to go off and learn all this technical mumbo jumbo? My job is to talk to users, understand the problem, and come up with an elegant solution. It's the developer's job to make it happen.
</blockquote>
But, bear with me. There are a handful of benefits to knowing how this all works, including:

1. A better grasp of what's possible, practical.
2. Improved communication between you and your development team.
3. An increased ability to call someone out if they're complaining about implementation difficulty.
4. Being able to weigh the pros and cons of different design decisions.
5. Increased credibility with your colleagues.
6. Increased empathy for your development team.

The more you know about "how the sausage is made" (**link**?), the better you are as a designer, as a teammate, and as an employee. There's certainly a case to be made for specialization, but willful ignorance should be considered borderline negligent. Why would you _not_ learn more about your line of work?

# The 10,000-foot View <a name="overview" href="#overview"><i class="ion-link"></i></a>
#### If nothing else, read this section.

Okay, so maybe you don't want to go completely down the rabbit hole. I get it; there's already a lot to cover in the design world, and the industry is always evolving and moving forward, so keeping up can be tough. If nothing else, though, you should have a high-level understanding of how software works: how data flows, what languages/tools/practices are in use, (roughly) what's possible, etc.

At its most basic level, this is how software breaks down:

* Database (where data actually lives)
* Back-End (process data, manage storage, and pull in other resources)
* Middleware (translate data from database-friendly to application-friendly)
* Front-End (providing access to data, handle user interaction)
* UX, UI, Visual Design (where you come in)

In case you missed it, you, as a designer, are the very last step in this process. There are a lot of things to happen in order to even get your design to the end-user's device (which we won't cover too much **find outside resource**), not to mention how data flows from where it's actually stored (literally a disk drive somewhere on the internet; hopefully multiple **link**), what needs to happen to that data to make it usable, and the code itself that makes your interactions happen.

Want more, but don't want to read the rest of this? Mozilla has [their own resources](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web) on this topic.

# Back-End <a name="backend" href="#backend"><i class="ion-link"></i></a>
#### Databases, architecture, and languages, oh my!

Database (mongo, sql, etc)
Server-side (python, perl, RoR, node/monolith vs microservices vs job queue)


# Middleware <a name="middleware" href="#middleware"><i class="ion-link"></i></a>
#### The bridge between user and data.

API layer (what the front end talks to)
Middleware


# Front-End <a name="frontend" href="#frontend"><i class="ion-link"></i></a>
#### Making your beautiful designs come to life.


Front-End (js; angular, vue, react. ignoring android/ios)
Visual/UI (html, css, js)
(UX)

# Transparency <a name="transparency" href="#transparency"><i class="ion-link"></i></a>
#### The more open, honest, and candid the team can be, the better.

<figure>
<img src="https://media.giphy.com/media/3osxYamKD88c6pXdfO/giphy.gif" />
<figcaption><a href="https://giphy.com/gifs/season-3-money-unicorn-3osxYamKD88c6pXdfO/">Credit</a></figcaption>
</figure>
