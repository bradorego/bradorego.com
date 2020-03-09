{
   "categories": [
      "User Experience"
   ],
   "date": "2020-01-14T10:19:19-04:00",
   "description": "Everything you need to know about doing user research, from a ~10,000ft view. A 7-step guide explaining the underpinnings of what makes a good research practice that will deliver insights and drive results.",
   "draft": false,
   "image": "/img/posts/user-research-101/header.jpg",
   "photoCredit": "https://uxdesign.cc/the-researchers-journey-leveling-up-as-a-user-researcher-a85cd35b53f5",
   "tags": [
      "user research",
      "business outcomes",
      "impact",
      "research methods",
      "research operations"
   ],
   "title": "User Research 101",
   "lessonsLearned": [
      "After a decade in the industry with the academic underpinnings of research psychology, I've discovered the basic framework of successful research activities in the tech sector (and, I would guess, in other sectors as well).",
      "The more you can standardize and systematize your processes, the more efficient and consistent activities will be. This is especially true of research: by going through the checklist and making sure you have all 7 elements covered, you can deliver higher quality results.",
      "This framework is a good way for more-junior team members to start to think through the full spectrum of strategic user research. There's no one-size-fits-all answer, but this should give you the basis to have conversations with your team."
   ]
}

My life changed fundamentally in the Fall of 2008. I was entering my 3rd year at the [University of Rochester](https://rochester.edu) where I was double-majoring in Computer Science and Psychology. Up until that point, these were two things I studied in parallel, and had yet to discover the niche they intersect in. That is, until [Carman Neustaedter](https://carmster.com/), then working as a Research Scientist at Kodak in Rochester, taught a class as an adjunct called "Introduction to Human-Computer Interaction". Since then, I've been applying my training and knowledge in Research Psychology to the domain of technology. After designing and running hundreds of studies, working with dozens of companies and mentees, and chatting with my talented and passionate colleagues in [ResearchOps](https://researchops.community), I've discovered an underlying framework to impactful user research.

# 7 Steps to Effective User Research <a name="7steps" href="#7steps"><i class="ion-link"></i></a>
#### Cover all of your bases for impactful outcomes and great glory.

We'll dive into each of these elements in detail later, but I wanted to first present the 7 (technically 8, though I say 7 because the <a href="#context" target="_self">0th Step</a> is only necessary when stepping into a new vertical, role, or company) facets of the framework together as a unit and give a little context of how I got here.

The framework, in all of its imperfect glory, follows:

{{< img
   src="/img/posts/user-research-101/diagram2.png"
   caption="Hey, I'm a researcher, not a designer 😉"
>}}

<ol start="0">
   <li><a href="#context" target="_self">Understand the Context</a></li>
   <li><a href="#goals" target="_self">Align on Goals</a></li>
   <li><a href="#strategy" target="_self">Determine Strategy</a></li>
   <li><a href="#plan" target="_self">Plan and Execute</a></li>
   <li><a href="#analyze" target="_self">Analyze Results</a></li>
   <li><a href="#document" target="_self">Document Findings</a></li>
   <li><a href="#share" target="_self">Share It</a></li>
   <li><a href="#iterate" target="_self">Reflect and Iterate</a></li>
</ol>

As to how I got here, it's been part of my personal evolution as a practitioner. I'm certainly not the most qualified individual when it comes to raw research methodology, statistical strength, etc., but coming out of an Honors program in Psychology, I had a certain degree of confidence in my experimental design and analysis. The parts I've really had to learn the hard way are everything that aren't #3 and #4, which are much more related to the business end of research. The process of selecting goals, determining methods, and documenting and sharing results is strikingly different in the realm of academia, and there are unique challenges to research in that context as well as in the industry.

Planning and executing research itself is usually the easiest part of being a Researcher in the industry. It's the part we're good at. All of the other elements are where I've fallen short in the past, and where I see teams falling short still, which is why I wanted to highlight the non-hardcore-research things that go into doing impactful research. If you want a deep dive into how to select research methodologies, there's a ton of materials out there. I'd start with [Nielsen Norman Group's primer on the topic](https://www.nngroup.com/articles/which-ux-research-methods/).

# Step 0: Understand the Context <a name="context" href="#context"><i class="ion-link"></i></a>
#### What space are you playing/working in, and what are the unique challenges and opportunities?

The reason this is a Step 0 is twofold. Firstly, it's absolutely essential to running an effective research practice. You need to know who the stakeholders are, what your product/service/company's unique positioning is, what the pressures are, who your allies are, etc. This will greatly impact your strategic decisions (<a href=" #strategy" target="_self">Step 2</a>), as a large portion of what determines your methodology are your constraints. There are a variety of ways to do this, but the most effective way is to just talk to your colleagues.

One of the most influential things I've started doing when I join a new team, a new organization, or start a new project, is what I refer to as a "Listening & Learning Tour" (terminology which I've borrowed lovingly from my alma mater's 11th President, [Sarah Mangelsdorf](https://www.rochester.edu/newscenter/off-and-running-sarah-mangelsdorf-sets-her-own-presidential-tone/)). In a nutshell, I set up meetings with as many people as I possibly can across every discipline/area of expertise I can and at every level of the organization. I walk into the meeting with essentially 3 agenda items:

>
1. Introduction to me and to User Research.
2. Tell me about the work you do, and how can Research help support your goals.
3. How might you be able to help the Research team accomplish our goals?

The benefits to this approach are vast and deep. It's an informal chat, so people are generally disarmed. You also get to use the "Hi I'm new here help me understand" cover. It's also an excellent opportunity to begin developing rapport and identifying who your powerful allies may be. It has an added benefit of educating and evangelizing Research to the team as well, which helps your team understand what it is you do and how to engage with you. The real purpose, however, is to gather whatever intel you can about the environment you're stepping into. This is part of why it's so important to talk to many disciplines and many levels: you want to triangulate as much as possible, and getting a diverse set of opinions and perspectives is crucial to this.

The second reason it's #0 on the list is that, as you may've guessed by now, this isn't something you need to do every single time. It's more of a foundational step than a practical step in the research process. If you already know who the key players are, what your market position is, and who you can leverage to accomplish your goals, there's no sense in rehashing that, and you can move forward with <a href="#goals" target="_self">Step 1</a>. Skipping this step, however, can be catastrophic, and is a mistake I've made far too many times myself.

# Step 1: Align on Goals <a name="goals" href="#goals"><i class="ion-link"></i></a>
#### Make sure everyone is on the same page as to what you're trying to accomplish and how research can help.

Another step that is far too often overlooked (especially by more junior team members) is to ensure there's alignment with the team and key stakeholders before moving forward with any research activities. Typically, this is how things work:

>
1. Somebody (usually a PM) decides they want some research to help them make a decision.
2. They ask the researcher to go to some research.
3. Researcher gets real excited and immediately gets to work.
4. Researcher designs a study, recruits participants, executes the study, analyzes results, and prepares for a presentation.
5. Researcher shares their findings with the team, and is met with blank stares.
6. Original requester says something along the lines of "Why did you do that? This isn't what I asked for".
7. 🤬

The key breakdown in the above scenario is all the way at the beginning. The next time somebody asks you for research, the first thing you should do is ask Why. Using the "[Five Whys](https://en.wikipedia.org/wiki/Five_whys)" is a good way to get at the root cause of what's being asked for, and will clarify the needs both for you and for your team. This type of alignment up front will help avoid wasting a lot of time down the road.

Two other questions I tend to ask that are really powerful and insightful are around the business needs and around the decision-making process. Essentially, you want to make sure everyone is on the same page of what you'll do based on the results of your research. You can more or less build a [decision tree](https://en.wikipedia.org/wiki/Decision_tree) that will guide decisions based on the results of your research. This has an added benefit of making the value and impact of research much clearer and more concrete, which is particularly beneficial when it comes time to talk about resourcing and/or promotions.

{{< img
   src="/img/posts/user-research-101/decision-tree.jpeg"
   attrLink="https://dev.to/nexttech/classification-and-regression-analysis-with-decision-trees-jgp"
   caption="What a fun (and completely unrelated) decision tree!"
>}}

In terms of business goals (or the "bottom line"), I have an entire blog post (pending!) about how to ensure your activities are aligning with KPIs for your organization. You should read all of that if you want details, but the 15-second version is that you should make sure the decisions that will be made based on your research impact one of 4 key business levers: Acquisition, Retention, Cost to Serve, or Outreach. It's not necessarily up to you to decide which of those are important (that's more a Product decision), but doing research that doesn't ladder back up to that is an easy way to let your impact slip and devalue research activities.

# Step 2: Determine Research Strategy <a name="strategy" href="#strategy"><i class="ion-link"></i></a>
#### Let your context, goals, and constraints guide which methods to use.

Once you have a clear picture of what the intended outcomes are, you can move forward with picking out a strategy. Strategy is one of the hardest parts of being a researcher, and usually the skill that develops last in one's development as a practitioner, so don't worry if this seems nebulous.

In a nutshell, your research strategy is how you'll actually do the research. This includes methodology, research questions, your script, and your target population. A variety of factors go into determining your strategy, but there are really only two key factors:

1. Desired Outcomes
2. Constraints

Desired Outcomes is a combination of the conversations you had in <a href="#goals" target="_self">Step 1</a> to clarify what's being asked and what the team will do with the results as well as your knowledge and expertise as a Researcher. You need to be cognizant of what types of feedback you need to gather to answer the questions you have. Is this attitudinal or behavioral research? Should you look for quantitative or qualitative feedback? Is the goal evaluative or generative insights? All research activities will vary on these dimensions, among others.

{{< img
   src="/img/posts/user-research-101/constraints.jpg"
   caption="You have no idea how proud I am to sneak a 15-year-old meme into this post."
>}}

The other key factor is what your constraints are, and they can come in virtually infinite forms. Constriants can be resources (financial or human capital), political, temporal, capacity, capability, historical, access...the list goes on. What you need to be mindful of is how to maneuver within whatever constraints you are facing, as it's virtually unheard of you'll be able to use the exact method with the exact population and the exact timeframe you want. Research in industry is all about doing the best you can with what you have.

Another factor that is often undervalued when it comes to strategy and can be a complete dealbreaker is who you're talking to. Population and participant selection are essential to study design. The questions you ask and the method you use almost don't matter if you're talking to the wrong people. Ensure the people you're using as participants are appropriate for the end goals. Also, being mindful of [sampling bias](https://en.wikipedia.org/wiki/Sampling_bias) is crucial in your planning and analysis.

# Step 3: Plan & Execute <a name="plan" href="#plan"><i class="ion-link"></i></a>
#### Gather all of the resources and materials you need and do the actual research.

What's really interesting and funny about writing this guide is that here, at Step 3, is where most people think "Research" starts. That is, actually planning and executing the research itself. There's a whole lot of nuance that I'm going to gloss over here (considering this essay is already well over 2,000 words), but it should be obvious that part of the process of Research is to actually prepare for and conduct the research activity itself.

The things to highlight there are the pure logistics of getting people and resources together in order to run a participant through a session. This is typically the low-hanging fruit of Research Operation, which is why you see a lot of [Research Coordinator](https://www.google.com/search?q=user+research+coordinator+jobs) positions popping up. Coordination involves recruiting and scheduling participants, ensuring they have everything they need to attend (including reminders, directions, appropriate equipment and facilities (if remote), access to the testing stimuli, etc.), procuring the resources required on your end (your time, a space to meet, recording methods, testing stimuli, etc.), and otherwise doing what you need to do to ensure the session itself runs as smoothly and seamlessly as possible.

Of every piece of this puzzle, I'll spend the least time writing about execution. This is what most people focus on when talking about Research, which I would argue is the easiest part to pull off. If you need further reading on the topic, feel free to [take a look here](http://letmegooglethatforyou.com/?q=how+to+do+user+research). Execution is typically the first thing someone starting a career in Research learns, both because it's a foundational skillset but also because it's easiest to teach and perform. Analysis and Strategy come with experience, and usually in that order.

Check out the cover image for this post for a wonderful diagram of the process developed by [Dave Hora](https://www.linkedin.com/in/davehora/) and the ResearchOps Community.

# Step 4: Analyze Results <a name="analyze" href="#analyze"><i class="ion-link"></i></a>
#### Extract the key insights, major trends, and impacts to your decision tree.

Generally speaking, this is where the rubber meets the road. Performing research is important, as you need raw materials that are harvested into insights, however if your recordings and observations are the ore, analysis is the smelting process, and arguably, the most important part. After all, you need to be able to weave a narrative and tie things together in order to deliver the value of research (which, at the end of the day, is influencing decision-making). Every time I run and present the findings of a study, I offer everyone access to the raw material, and of the hundreds I've run, I know of maybe a dozen instances where any individual looked at my notes, much less video or audio recordings. Team members and stakeholders are more interested in the take-home message versus the gory details, so analysis (along with <a href="#share" target="_self">Step 6</a>) are key to a complete research process.

There are a variety of [frameworks and methodologies](https://www.userinterviews.com/ux-research-field-guide-chapter/research-analysis) for analyzing the results of your research, so deciding which to use and how to do so is also important. Deciding whether to use, say, [discrete or continuous coding](https://www.graphpad.com/support/faq/what-is-the-difference-between-ordinal-interval-and-ratio-variables-why-should-i-care/), or what exactly [qualifies as an individual insight](https://medium.com/@tsharon/the-atomic-unit-of-a-research-insight-7bf13ec8fabe) is both an ongoing challenge and something I can't really dictate for you: you'll have to make your own decisions based on your materials, expertise, and personnel. All that matters is you have a systematic process for extracting insights and identifying themes. [Affinity Diagramming](https://www.interaction-design.org/literature/article/affinity-diagrams-learn-how-to-cluster-and-bundle-ideas-and-facts) can help expose the major themes in your observations.

{{< img
   src="/img/posts/user-research-101/thematic-analysis.jpg"
   attrLink="https://www.nngroup.com/articles/thematic-analysis/"
   caption="NNGroup has a really good article on analyzing results. Check out the source to this diagram for more info!"
>}}

At a high level, this is all analysis is: drawing out the key insights of what you saw and heard. You should aim for a small set (5?) of key insights that encapsulate the most important things you saw and heard. You should certainly document and share other insights, but you should ask yourself what, if nobody gets anything else out of you doing this, is the thing (or three) you want people to know the most. Your Key Insights should also be driven by the Goals and the Research Questions identified earlier in the process. If your stakeholders are most interested in retention, you should be sharing insights related to retention.

These Key Insights will serve as the basis for your shareout in <a href="#share" target="_self">Step 6</a>. But, ideally, before you share anything, you take the time to document all of the findings. You might think sharing things as quickly as possible is more important, but as we'll see next, documentation matters.

# Step 5: Document Findings <a name="document" href="#document"><i class="ion-link"></i></a>
#### If it's not written down, did it even happen?

Oftentimes, due to project deadlines or general excitement, researchers will jump straight to sharing the results. After all, the main purpose of research is to discover and share insights, right? What is often the most overlooked part of the process can arguably be one of the most important, as well. Clearly, you need to deliver insights, however there are a handful of benefits of ensuring you properly document everything before moving on to preparing to present your findings.

First of all, by taking the time to document all of your findings, you're much more likely to catch additional insights or connections that you wouldn't've otherwise noticed, enriching your analysis and what you present to the broader team. This is especially true as more people get involved in the research process. If you're distributing the work of conducting research or doing analysis, documentation is a really good way to ensure at least one person (whoever is doing the gardening, in this case) gets eyes on every single insight.

{{< img
   src="https://i.giphy.com/media/3og0IKMmOZE88Ankty/source.gif"
   attrLink="https://giphy.com/gifs/foxhomeent-johnny-depp-fast-3og0IKMmOZE88Ankty"
   caption="Get it? Gardening? 🌱"
>}}

Secondly, by documenting before you share (which is usually viewed as the end of a research cycle), you help set expectations of how long it takes to completely a cycle. This will help you down the road: the more your team and stakeholders learn and appreciate how much work goes into research and how long it takes. The Research Process isn't over when you conduct the research or even complete your analysis. There's always aftermath that usually gets swept under the rug or completely forgotten about. This can lead to waste, notably unnecessarily repeating research activities.

Part of the original impetus for [WeWork's Polaris Documentation System](https://medium.com/@tsharon/democratizing-ux-670b95fbc07f) is what Tomer Sharon calls "bad research memory". If you aren't documenting what you've learned and how you've learned it, you're relying on the collective memory of your team. Memory is infamously fallible at best, and at worst, turnover on your team means institutional knowledge will literally walk out the door. By documenting your findings thoroughly, you help build a knowledge base of who you're serving and you help decrease the amount of redundant research conducted, ultimately saving time and resources.

This is arguably the most important reason you need to document your findings apart from whatever you prepare as presentation materials. Another added bonus of doing this is it gives a place for all of your non-key insights to live. You'll probably discover some really interesting things that could benefit other teams or other projects but aren't relevant for your current goals. Instead of those fading into obscurity, documentation helps keep things relevant.

# Step 6: Share It! <a name="share" href="#share"><i class="ion-link"></i></a>
#### Tell everyone you possibly can in as many media and modalities you possibly can. Evangelism is crucial.

If analysis is the most important part, sharing your findings has to come close after that. If a tree falls in a forest and nobody hears it, did it fall? If you did research and learned some things but don't tell anyone, does it matter if you did anything at all? While Tomer is [against research reports](https://medium.com/@tsharon/the-three-most-popular-questions-about-atomic-research-56a5414d3d17), there's still a time, a place, and a format where reports can be valuable. What's more important than whether or not you prepre a report or presentation is to think about all of the different ways you can share your insights.

This is another thing that will vary based on your organization. Think about where people go to find knowledge, where they share knowledge, and where are the places they "hang out". I've done everything from whitepaper-style formal written reports to interactive insights databases to one-page flyers hung in bathrooms and lounges; it really depends on the culture of your organization. That being said, I think there are a few fairly standard low-hanging fruit of ways to share the results of your research:

1. A slide deck used to present findings live.
2. A living repository of customer insights that can be explored, queried, etc.
3. Intermediate updates and reports shared live via your chat tool of choice (e.g. Slack).
4. Monthly/quarterly summaries of work done and insights uncovered (typically email).

This strikes a nice balance of capturing some of the main ways people communicate, reaching out in some less-traditional means, and not bogging you or your team down in a lot of overhead work. Molly Fargotstein has a great presentation about [marketing for your Research team](https://www.dropbox.com/sh/9rnkdvypdihyfw9/AAAr1C5UZ7jgoP_5lEbmeSUsa) from her time working with Mailchimp.

One of my favorite ways to share research with a team (and one of my secret weapons) is something I borrowed lovingly from Google Ventures known as a [viewing party](https://library.gv.com/ux-watch-parties-543d22b1478d). This is one of the most effective ways to get your team engaged in research, to raise research literacy, and to build empathy for your end users. It's an incredibly efficient use of time for your team members as well, and provides a highly curated, social experience.

> "Throw a viewing party. If team members can’t attend sessions live, schedule a viewing party to watch a recording of at least one session of your choice. Lure them with lunch, special treats, or highly coveted `I’m a customer champion` badges. While watching the session together, point out key moments, observations, and specific interviewing techniques you want them to notice."

You can read the original article for details on how to execute, but there are a few key advantages to this technique. For one, it's a limited time investment from your teammates, and instead of seeing just one user, they get a cross-section of a number of opinions. Secondly, as mentioned, it's a social experience, so not only are you doing this together and spending time with your team, it's also very obvious who's skipping out on it. Lastly, as mentioned, it's a curated experience, meaning both that it's a good bang-for-your-buck time investment but also the discussion in between each video clip provides an opportunity for your team to learn how to observe research and gather insights (which is an invaluable asset).

Sharing (however you decide to do so) is often seen as the "end" of a research cycle. If you're interested in how efficient your team is being (and, trust me, as an [Ops](https://researchops.community) person, I have many thoughts on this), this is when you can measure the delivery of a research project, and you can now safely shift your focus to other more-pressing work. However, there is technically one last step in my process.

# Step 7: Reflect and Iterate <a name="iterate" href="#iterate"><i class="ion-link"></i></a>
#### Take time to have a retrospective on the study you just conducted and see what you can do better next time.

As should be with any process, the last step is to look back at the work you just completed and to reflect upon it. This doesn't necessarily have to happen after every individual study (especially if you're particularly tight on time or have a high volume of research happening across your team), however the value of this type of [retrospective](https://www.atlassian.com/team-playbook/plays/retrospective) work is incredibly high. It's important to get as many different opinions and as many team members involved as you can, including your peers in other disciplines.

How exactly you structure this and what questions you ask is up to you, and will depend upon the specifics of your context (team, organization, etc). I tend to focus on 3 main things: Mechanics, Impact, and Context Updates. Mechanics relate to execution of the research activities itself, and whether there was anything that went particularly well or poorly. Impact focuses on the influence on the overall project/company and whether you're driving the change you want to. And Context Updates are simply circling all the way back to <a href="#context" target="_self">Step 0</a>: have we learned anything significant about our archetypes, about the industry sector we work in, about our product, etc. that we need to update and propagate throughout the organization?

The reason I emphasize having this as part of the process (if not a regularly scheduled occurrence) is that it's far too easy to hand-wave it away or keep putting it off in the interest of doing new work. However, doing so both stunts the growth of your team/research practice and leaves valuable insights on the table which could have an outsized impact on your organization.

# Conclusion <a name="conclusion" href="#conclusion"><i class="ion-link"></i></a>
#### Now that you have a framework, make it your own.

My end goal in writing this framework/guide isn't to be prescriptive, or to say this is the only way it can be done. Ultimately, you'll need to customize the process for your individual preferences, your team's needs, and your organization's goals. I think I really had two main objectives: 1) to give me the opportunity to work through my thoughts on this, and 2) to stop repeating myself, as I often get questions about what Research is and how to do it.

This guide should nicely go hand-in-hand with my [Research Playbook](https://bradorego.com/research-playbooks-what-are-they-and-why-you-should-have-one/) post (and the associated playbook sample linked in that article) for anyone getting started either in their career as a Researcher or in building a team. Most of my work the past few years has focused on building and scaling Research practices and upskilling individuals, so I'm hoping others can learn from my mistakes and missteps.
