{
   "aliases": [
    "/2016-04-back-to-static"
   ],
   "categories": ["Development"],
   "date": "2016-04-14T12:26:53-05:00",
   "description": "When an update/redesign turns into a full-scale migration that takes us a lot closer to our roots than expected.",
   "draft": false,
   "image": "/img/posts/back-to-static/header.jpg",
   "publishdate": "2016-04-12T14:47:36-05:00",
   "tags": ["meta", "design", "hugo", "blog", "drupal", "content"],
   "title": "Back to Static"
}

<div class="tldnr">
  <h4>TL;DNR</h4>
  <ul>
    <li>Static generators (e.g. <a href="https://gohugo.io">Hugo</a>) are pretty cool.</li>
    <li>Ease of use/production directly relates to content creation.</li>
    <li>It's okay to borrow aesthetics/technologies/designs from others.</li>
  </ul>
</div>
<hr/>

As you might be able to tell, my last blog post is from 2014. It was about time to get back on the blog horse but also give the site a little facelift. I'd <a href="http://beerbatterbreakfast.com/2014/07/fancy-new-blog.html">migrated blog platforms</a> in the past, but never really took the time to think about how my own personal site was hosted. So let's take a quick trip down memory lane.

# Static Site (2011) <a name="2011" href="#2011"><i class="ion-link"></i></a>

When I first got into web development (professionally), I thought it'd be cool to build my own website from scratch to prove my mettle. That was 2011; certainly not far enough ago by any means for most of the technologies in use today to not exist. But, I was young and naive, and had some big ideas (e.g. a live CSS switcher, replicating the exact same look/behavior with and without Javascript, etc).

I learned very quickly from that experience that keeping a static site up to date was really difficult. Any time you made a change one place, you had to make sure you made it everywhere. You had to make sure to manage collisions. You had to handle your own deploys and routing. It was a hassle, and I virtually never updated the site, so after spending some time working with <a href="https://zebradog.com">ZebraDog</a> and seeing the power of Drupal, I decided it was time for a change.

# Drupal 7.0 (2012) <a name="2012" href="#2012"><i class="ion-link"></i></a>

So I set out to <a href="/2012-11-new-site/">update and re-design</a> the website again, this time using something a little more powerful and modern, and to make it easier for me to create new content while still having full control and flexibility over how it's displayed and what functionality the website had.

After all, at ZD we'd built a lot of things on Drupal, ranging from fairly simple <a href="http://www.kellerrealestategroup.com/">real estate websites</a> to fairly complicated <a href="http://www.mstc.edu/">institutional websites</a> to the backbone of <a href="https://www.youtube.com/watch?v=VuicjhSpbV8">interactive multimedia installations</a>. I could use it to build a measly blog and portfolio website, right?

The problem wasn't whether I could; in fact the problem was probably __that__ I could. I built an incredible media delivery site that was isolated from the world and almost too powerful for its own good. Developing and maintaining the site was nontrivial, and adding new content, while certainly easier than a static site, was beyond me.

# Back to Static (2016) <a name="2016" href="#2016"><i class="ion-link"></i></a>

Blog technology philosophy has shifted lately. WordPress is still the clear winner in the space, but there's an alternative to generating the site every time it's requested. These take the form of static generators, and make a lot more sense to me personally. Jekyll, Ghost, Hugo, Hexo; the list goes on. What's under the hood doesn't really matter (which, as an aside, makes switching way easier) &mdash; all that matters is the static HTML/CSS/JS they output.

It seems a little weird to be going back to a static option, but there are some major differences:

1. I have so much less to worry about in terms of upkeep and deploy thanks to things like partials and services like <a href="https://www.aerobatic.com/">Aerobatic</a>.
2. Content creation is way easier because I literally create a file and start typing. Markdown gets translated into HTML and all of the formatting and styling is handled by the templates I define.
3. I stand on the shoulders of giants &mdash; there have been tons of people putting in tons of work to make things like this easier. There's no reason to reinvent the wheel.

So (and I've said this before), theoretically keeping the site updated will be a lot easier. I somewhat feel like a cop-out for using a fairly standard template/look-and-feel, but at the end of the day, my job as a designer isn't to make things look pretty or to be unique. My job is to provide the best experience possible for my users. In the context of a blog, that means engaging, useful content; not pretty pictures.
