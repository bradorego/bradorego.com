{
   "categories": [
      "Case Study"
   ],
   "date": "2016-05-02T18:29:53-05:00",
   "description": "How I reverse engineered a beer app and reached feature parity in ~8 hours with Ionic.",
   "draft": false,
   "image": "/img/case-study/better-mcbw/header.png",
   "publishdate": "2016-05-02T18:29:53-05:00",
   "tags": [
      "ionic",
      "madbeerweek",
      "reverse engineer",
      "ux",
      "feature parity",
      "firebase"
   ],
   "title": "Better MCBW"
}

<div class="tldnr">
  <h4>TL;DNR</h4>
  <ul>
    <li><a href="http://ionicframework.com">Ionic</a> lets you build apps ridiculously fast. Write once, build many.</li>
    <li>If you don't like how something's done, instead of just complaining about it, do something to make it better.</li>
    <li>Reverse engineering is easier than ever. Your success is not a factor of your codebase, but about the value you offer an end-user.</li>
    <li>The end result: <a href="http://mcbw.herokuapp.com">Better MCBW</a></li>
  </ul>
</div>
<hr/>

# Backstory

<a href="http://madbeerweek.com">Madison Craft Beer Week</a> has been one of my favorite events since moving to Madison. Started as a grassroots project by a few local beer lovers, the event has ballooned to one of the best in the nation, featuring over 550 events this year. In years past, I've been involved in helping out on the tech side of things, and we had big plans for this upcoming year. But in September 2015, The Isthmus <a href="http://isthmus.com/food-drink/beer/isthmus-acquires-madison-craft-beer-week/">acquired Craft Beer Week</a>, and took over all operations.

After hearing that the 2016 was <a href="https://www.facebook.com/MadBeerWeek/posts/1225581240785685">built natively</a>, and as an Android user I would have to wait to get my hands on it, questions arose as to why such a technically/mechanically simple app wasn't built using <a href="http://ionicframework.com">Ionic</a>, a mobile app development framework built by a company based in Madison. After I got my hands on the Android app itself, I was less than enthusiastic about its performance and feature set.

# Reverse Engineering It

So, realizing that my complaints weren't getting anyone anywhere (not to mention I lacked the necessary context to know why they made the decisions they made), I had an idea: I have the APK, so I can decompile it, dig through it, and figure out exactly what API calls they're making, and then emulate them with my own codebase. Simple enough, right? Well, for someone that knows virtually nothing about native Android development, this task proved simple yet pointless. I only gained one insight from it, which was the URL of their API. Then another idea hit me: why not just set up a proxy and read the HTTP requests?

### Enter `mitmproxy`

After doing a little bit of googling, I came across this <a href="https://medium.com/@rotxed/how-to-debug-http-s-traffic-on-android-7fbe5d2a34#.mhbido9ys">incredibly helpful article</a> explaining step-by-step exactly what I wanted to do. Next thing I know, I had a proxy running on my laptop, my phone's internet traffic streaming through that proxy, and I had access to every HTTP request the phone (and thus, the app) made. It was almost too easy.

<img src="/img/case-study/better-mcbw/mitmproxy.png">

### The Horror

So, now that I had all of the HTTP requests (all, uh, 4 of them that the app seemed to be making), all I had to do was make those same requests with the same body, parse the response, and I was off to the races, right? This is all true, but in my inspection of the traffic, I came across a few horrifying realizations:

1. Every request made was a `POST`. Getting the list of events? `POST`. Creating an account? `POST`. Logging in, and creating a session? `POST`. Getting a list of special offers? `POST`.
2. Every response had a status of `200 - OK`. If there was an error, you have to parse the body of the message. And those bodies are in no way consistent.
3. The list of events (~580 json objects) came out to a staggering 700KB of data. Not the end of the world in today's day and age, but a tough pill to swallow. There's gotta be something we can do about that, right? (Spoiler alert: there is).

Interacting with this API was painful. I was literally parsing a tilde(~) delimited string to determine the result of actions, and then picking parts of that out to save (e.g. the access token). This kind of feels like somebody's first attempt at making an API.

### Off to the Races

All of that aside, I thought I was in the clear. Build an Ionic app, replicate the responses, do some other stuff with the data. Simple enough, right? Aaaaand then I got `CORS`'d, which I should've seen coming. After trying to find a way to get Angular to work around pre-flighting requests, I decided to bite the bullet and build a node proxy. ~100 lines of `Node.js`/`Express` code later, I was in business. Now we can send our requests to our own server which would make the same requests to the Craft Beer Week API and pass the results back.

```javascript
app.post('*', function (req, res, next) {
  console.log("requesting " + API_URL + req.originalUrl);
  request.post(API_URL + req.originalUrl, {form: req.body},
    function (error, response, body) {
      if (body.indexOf('Your session') !== -1) {
        res.status(401);
        return res.send(body);
      }
      console.log(response.statusCode + " - " + response.statusMessage);
      res.status(response.statusCode);
      res.send(body);
    });
});
```

### Feature Parity

With all of that behind us, all we needed was to do was create the Ionic app to do what the native app did. Considering the native app is just a list of events, that was pretty straightforward. As part of this process, I'd spun up a little <a href="http://firebase.com">Firebase database</a> to save my own version of user accounts (which I was still creating via the MCBW API). Further inspection of the app's "save" feature revealed a lack of persistence of those events (it was only saving it on the device), so in trying to replicate features I was actually already improving the experience.

The rest, as they say, is history (or, at least, trivial).

### Deploying to Heroku

Having a feature-parity Ionic app on your local machine is great and all, but it doesn't do much good. Enter <a href="http://blog.ionic.io/heroku-ionic/">Ionic Heroku</a>, which is a nifty little boilerplate that takes care of all of the setup and deploy configuration Heroku needs. You can hit one button, punch in a name, and you have a Heroku app. Copy your www/ file into the boilerplate's (and update any npm/bower/ionic config you need to) and you're golden. This was possibly the easiest step in the process.

# Making It Better

At this point, I'd spent about 8 hours including all development time and research into how their API worked. I could've called it a day - I'd built an app that reached feature parity and could be deployed to Android and iOS. My work here was done. But, even by reaching parity, I hadn't made anything better. At the end of the day, I was building this app for myself, so stopping here wouldn't've helped. So, I set out with a short list of ways to improve the experience:

* 700KB of JSON seemed like a bit much
* Date dividers would make scanning the list a lot easier
* Saving a list of events is one thing, being able to share that list is another
* Different ways of sorting (e.g. by location name, by event name)
* A map view would be clutch
* What if I got an email every morning with my saved events for the day?

### `gzip` is your friend

Where do we start? What're the low-hanging fruit? Let's see what we can do about this JSON dump. As it turns out, the MCBW API wasn't using any compression. Enabling `gzip` on my Node server brought that 700 down to ~100, which is a huge improvement. Inspecting the data further, it seemed that all the data was there twice - as both an index and a keyed index. That lead to a horrific piece of code that looked something like this:

```javascript
  delete jsonBody[i][0];
  delete jsonBody[i][1];
  delete jsonBody[i][2];
  delete jsonBody[i][3];
  delete jsonBody[i][4];
  delete jsonBody[i][5];
  delete jsonBody[i][6];
  delete jsonBody[i][7];
  delete jsonBody[i][8];
  delete jsonBody[i][9];
  delete jsonBody[i][10];
  delete jsonBody[i][11];
  delete jsonBody[i][12];
```

Which brought us down to 80KB. Still not great, but much better than 700KB. Okay, great, what's next? Sharing seems like it's pretty straightforward.

### Enabling sharing

This isn't going to be a lecture about how powerful social sharing plugins are in viral/organic growth. I'm less concerned about that and more concerned about the end-user experience. Consdering I already had my own Firebase database, enabling this was actually trivial. Create a route outside the context of the app (otherwise users would get redirected to login) that took in the user's ID (from the URL) and pulled out the list of their saved events. Simple, straightforward, elegant. Add in a few social share buttons for convenience and the app practically markets itself.

<img src="/img/case-study/better-mcbw/sharing.png">

### Dividers

Regardless of the content, a 500-item list is overwhemling. Adding date dividers at least makes it a little easier to scan through. The implementation of this is actually pretty straightforward. Here's that snippet (for dates) in all its glory:

```javascript
  for (i = 0; i < events.length; i++) {
    if (events[i].type !== "divider") { /// don't process dividers if we come across them
      tempDate = new Date(events[i].start_date);
      if (currentDate.getDate() !== tempDate.getDate()) { /// tempDate is a new date!
        currentDate = tempDate;
        events.splice(i, 0, {type: "divider", value: dayDividerFormat(currentDate)});
        i--; /// backtrack so we don't miss something
      }
    }
  }
```

Couple this with `$ionInfiniteScroll` and we have lazy-loading events 20 at a time plus dividers. Much better than spitting out a list of 500 events and having users fend for themselves.

### Searching, Sorting, Maps

<img src="/img/case-study/better-mcbw/map.png">

That's great and all, but what if I'm looking for a specific event? What if I'm in a particular part of town and I want to know what my other options are nearby? Sorting and Filtering were actually somewhat of a happy accident between what Angular offers and how I'd structured the rest of the app. When the user logs in, I fetch the list of events once and cache it. From there, pretty much everything they see is some permutation of that.

It's a fair amount of heavy-lifting on the client, but it also means I have all the source material and we're minimizing the number of round-trips. I already have a mechanism for adding dividers, so if I want to enable other sorting (the Node server sorts by start date by default), all I needed to do was a simple Javascript `Array.sort()` and then pass that into the divider function.

Searching proved a little more complicated. Aforementioned lazy loading meant I couldn't just use an Angular `$filter` (without additional complications - I'm sure I could've), but that local cache made it fairly trivial. Here, `Array.filter()` came to the rescue. A simple string compare (via the ever-popular `String.indexOf()`) spat out the results we crave.

Mapping proved a little more difficult. After wrestling with all of the available Angular Google Maps solutions, I settled on <a href="https://ngmap.github.io/">ngMap</a>. It made the most sense to me from a structural standpoint, and made a lot of the subsequent code incredibly easy to write (think: virtually no controller code to place markers and pop up and info window on click). A little date finagling to make sure we're showing the right pins, and a tiny insight into managing 500 events on a map (which is actually something I learned from last year's MCBW website) and we've finally reached a point where I think I can say I'm done. Well, almost....

### Checkin' da Emails

This is a terrible example of staying lean (as opposed to most of the other development on this project, which was driven by me trying to use my own app out in the wild), but I had the idea of sending an email every morning with the list of events you'd saved for that day. Partly because, theoretically, that eliminates the need to ever check your to-do list again. Log on once, save the events you want, and then it'll email you your schedule for the day. Sounds ideal.

After wrestling with MailGun for awhile, <a href="https://sendgrid.com/">SendGrid</a> won out in terms of simplicity. I had test emails out within minutes, and all I had to do then was write a little server code to compile the list, do some basic HTML formatting, and that's one more feature to add to the list. I thought I was just doing this for myself, but I was instantly validated by this exchange:

<img src="/img/case-study/better-mcbw/lauren.png" />

# The Fuuuuuuuuuture

More than once already this week, people have brought up the idea of some sort of optimization algorithm. Each event has a start time, and end time, and a location. This sounds like some sort of modified Travelling Salesman Problem, and while that would be a lot of fun to try to implement, I think that's a "next-year" type of feature. After all, I've already sunk a whopping ~20 hours into this project. I can only imagine what The Isthmus paid their developers and how much time they spent on this.

The code could also use a serious refactor, especially on the client side. This is what happens when innovation/speed of development matters more than code quality/longevity/cost of support. Whoops.

There also could be increased security, as right now I'm pretty sure if you have someone's user ID you can modify their list of saved events, but again, 20 hours of free work plus it's an app that's only useful for one week (and for a beer event, no less).

# Lessons Learned

### Firebase Synchronized Arrays

One thing I learned in trying to build this Saved Event feature is <a href="https://www.firebase.com/docs/web/libraries/angular/guide/synchronized-arrays.html">Firebase arrays</a> don't work the way you think they do. I had a list of events  (JSON objects) that I would push to an array (via `$firebaseArray.$add`), and when someone unchecked the magic box, I tried to use `$firebaseArray.$remove`, except that only works if you're talking about the same reference you used to push to the array. So, if you have a list of items, you push _a copy_ of one to the array, then try to remove it, it didn't work.

### Keyed Arrays Make Sense Sometimes

As a corollary to the above realization, keyed arrays actually make a lot of sense sometimes. The solution to this problem (while not the most elegant/efficient solution) is to create a keyed array of saved events. Every time a user saves/unsaves an event, we update the user's `saved` array by updating the object at that key, e.g.

```javascript
  profile.saved[event.id] = event;
  /// or
  delete profile.saved[event.id];
```

# Videos

### Official MCBW:
<iframe width="100%" height="315" src="https://www.youtube.com/embed/s4OAGhlFpcQ" frameborder="0" allowfullscreen></iframe>

### Better MCBW:
<iframe width="100%" height="315" src="https://www.youtube.com/embed/yAJx1i41d04" frameborder="0" allowfullscreen></iframe>
