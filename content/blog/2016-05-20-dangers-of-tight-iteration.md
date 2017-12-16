{
   "aliases": [
      "/2016/05/the-dangers-of-tight-iteration"
   ],
   "categories": [
      "User Experience"
   ],
   "date": "2016-05-20T19:31:28-05:00",
   "description": "Why discovery and product development are important, and how relying on a tight feedback loop can be detrimental to your product.",
   "draft": false,
   "image": "/img/posts/dangers-of-tight-iteration/header.png",
   "photoCredit": "https://leantesting-wp.s3.amazonaws.com/resources/wp-content/uploads/2015/05/iterative-3.png",
   "publishdate": "2016-05-20T14:47:36-05:00",
   "tags": [
      "prototype",
      "user-centered design",
      "fidelity",
      "rapid iteration",
      "product management"
   ],
   "title": "The Dangers of Tight Iteration"
}

<div class="tldnr">
  <h3>TL;DNR</h3>
  <ul>
    <li>Getting a lot of feedback quickly isn't necessarily always the best strategy - having a guiding light is helpful as well.</li>
    <li>Users react to the level of fidelity of what you show them. You might be missing something if your fidelity doesn't match the issue in the design.</li>
    <li>Good Product Design (or at least, a good discovery phase/project plan) can alleviate these issues.</li>
  </ul>
</div>

---

Before starting a new engagement with a client, I always ask a series of questions about their company, their processes, and the project I'll be working on. One of those questions asks how they're currently handling user research and product design and I'm often told they "have a tight feedback loop" and that's all they have to say.

There's a lot wrong with this answer, but let's unpack it a little.

# Rapid Prototyping <a name="rapidPrototyping" href="#rapidPrototyping"><i class="ion-link"></i></a>

First and foremost, effective use of Rapid Prototyping can be immensely beneficial to a product. If there's one thing I could convince every company in the world to do, it would be to use some type of rapid prototyping in their product design. If I got a fraction of all of the <a href="http://time.com/13549/the-10-worst-product-fails-of-all-time/">money spent</a> building products that ultimately failed, I'd never have to work again.

Ultimately, Rapid Prototyping is more a process or practice than a technique or specific tools. Rapid Prototyping involves getting as much feedback as often as possible throughout the design process, and this is accomplished by varying the level of fidelity of what you're testing (more on this later). By exposing the current version of your product in all of its incomplete glory, you save sinking time into things that don't work, and ultimately build a better product for your target user.

You can read more about the variety of options when it comes to Rapid Prototyping elsewhere, but here's a brief overview of some of the options:

* Paper Prototypes - hand-drawn sketches of what an interface might look like
* Wizard of Oz - the practice of playing the role of the computer by abstracting future functionality away
* Testing Your Competitor - before building your solution, see what problems users have with existing solutions
* Interactive Prototypes - semi-functional software systems users can interact with


# Let's Talk About Fidelity <a name="fidelity" href="#fidelity"><i class="ion-link"></i></a>

The exact definition of fidelity isn't exactly clear, but it roughly refers to the level of detail your current iteration includes. It's often used in the context of prototyping, but it can refer to existing products as well. Your typical startup MVP is a high-fidelity prototype but a low-fidelity product. Fidelity exists on a <a href="https://www.smashingmagazine.com/2010/06/design-better-faster-with-rapid-prototyping/#the-prototyping-spectrum">continuum</a>, with the lower end including concepts, sketches, and rough wireframes, and the higher end being branded/visually design and interactive prototypes. I've seen far too many products that jump right into the deep end of fidelity, missing out on all of the potential learning from testing lower fidelity prototypes.

<figure>
<img src="/img/posts/dangers-of-tight-iteration/graph.jpg" />
<figcaption><a href="http://www.uxmatters.com/mt/archives/2010/05/sketches-and-wireframes-and-prototypes-oh-my-creating-your-own-magical-wizard-experience.php">Credit</a></figcaption>
</figure>

It might be somewhat contradictory to recommend using a lower level of detail, but you have to <a href="https://blinkux.com/blog/choosing-the-right-level-of-fidelity-for-your-wireframes/">match your level of fidelity</a> to the type of feedback you're looking for. Your users will respond to the fidelity they're given, and their feedback will be colored by this. If you give them paper, they'll talk about things like workflow, high-level design, and desired features. If you give them highly designed (read: Sketch/Photoshop) images, they'll talk about things like color scheme, fonts, and whitespace. If you give them an interactive prototype, they'll talk about things like transitions, interactivity, and performance.

This graph (and more great coverage of the pluses and minuses of different levels of fidelity) from <a href="http://www.uxmatters.com/mt/archives/2010/05/sketches-and-wireframes-and-prototypes-oh-my-creating-your-own-magical-wizard-experience.php">UX Matters</a>.


# Why It Matters <a name="why" href="#why"><i class="ion-link"></i></a>

It can be intoxicating to set a baseline and watch your numbers improve on whatever metrics you've set, as you iterate. Arguably, data-informed design is a good thing, especially compared to the alternative. The <a href="http://adaptivepath.org/ideas/data-informed-not-data-driven-the-subtext/">problem</a> is when data starts driving your decisions, and you lose sight of the big picture - improving the experience for the end user. Increased conversions, decreased errors, or more efficient interactions may not necessarily be the most enjoyable experience (e.g. a <a href="http://www.people.hbs.edu/rbuell/papers/buell_norton_2011.pdf">wait time</a> might actually be a _good_ thing).

The problem with this approach is it might be honing in on what's known as a local maxima. Naive <a href="https://en.wikipedia.org/wiki/Hill_climbing">hill-climbing</a> algorithms can fall victim to this problem as well. Essentially, you continue to see improvements and make changes until you reach a point where those improvements either diminish entirely or degrade. At this point, traditional wisdom would be to stop working and either a) work on something else, or b) declare yourself victorious and toast your achievement, all the while missing what could be a better solution.

<figure>
  <img src="/img/posts/dangers-of-tight-iteration/local-maxima.jpg" />
  <figcaption><a href="http://www.90percentofeverything.com/2011/01/06/local-maxima-and-the-perils-of-data-driven-design/">Credit</a></figcaption>
</figure>

On a philosophical note, I like to think of every design problem (if not every problem in life) as something like the above graphic, except the plane is infinite -- there're always other options, some of which might be better than our current situation if we're just willing to take the leap of faith and try a new approach.

# Fighting the Local Maxima <a name="local" href="#local"><i class="ion-link"></i></a>

So now we're aware of the problem and what causes it. That doesn't necessarily tell us what to do about it, though. Here's a great strategy outlined in an article from 2010:

<blockquote>
  One strategy we might employ is to optimize until we reach a point of diminishing returns: design until changes just aren’t having a big effect. Then, stop optimizing and return to other kinds of analysis to figure out the next steps. Conduct interviews. Do user testing. Give surveys, ask questions. Find out the biggest existing pain points instead of focusing on tiny design elements at this stage. Focus at the activity-level. What are people trying to accomplish? What are their higher-level goals? What aren’t people doing that we want them to? What big hurdles keep them from taking the next action? This level of insight will allow you to make those bigger changes.
  <footer>Joshua Porter, <a href="http://52weeksofux.com/post/694598769/the-local-maximum">52 Weeks of UX</a></footer>
</blockquote>

I couldn't've said it better myself.

---

### A brief plug

Did you find yourself reading this post and thinking "our products have definitely suffered from the wrong type of feedback"? Part of the reason this has come up a lot for me is I'm looking into a product-manager-as-a-service model. You should <a href="mailto:bradley.orego@gmail.com">contact me</a> if you'd like to hear more.
