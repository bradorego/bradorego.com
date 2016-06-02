{
   "aliases": [
    "/2014-02-progressive-enhancement-with-phonegap"
   ],
   "categories": ["Development"],
   "date": "2014-02-20T16:46:54-05:00",
   "description": "Using a few tricks, it's possible to utilize almost the exact same body of code for your mobile web app as it is your iOS/Android app. Phonegap has matured a lot recently, and it's finally ready to be put to use in interesting and powerful ways.",
   "draft": false,
   "image": "/img/posts/prog-enh-phonegap/header.png",
   "photoCredit": "http://phonegap.com/about/logos/",
   "publishdate": "2014-02-20T14:47:36-05:00",
   "tags": ["phonegap", "progressive enhancement", "hybrid app", "rails", "java"],
   "title": "Progressive Enhancement with Phonegap"
}

<div class="tldnr">
  <h4>TL;DNR</h4>
  <ul>
    <li>Enabling native-level functionality on a hosted web app is really cool.</li>
    <li>Code reuse is also pretty cool.</li>
    <li>Beware of the gotchas. There are always gotchas.</li>
  </ul>
</div>
<hr/>

<em>Note: This blog post is the long-form answer to <a href="http://stackoverflow.com/questions/20574938/progressive-enhancement-with-phonegap">this StackOverflow post</a> I made about it (which is, at the time of writing, the #1 Google result for "progressive enhancement phonegap"). Also worth noting this guide only addresses Android right now. Doing so for iOS should follow the same methodology though.</em>

Github repo for this project can be found <a href="https://github.com/borego/progressive_enhancement_phonegap">here</a>. You can download the app (for Android) <a href="http://old.bradorego.com/sites/default/files/progenhpg/prog-enh-pg.apk">here</a>.

If you're thinking about building a web app versus a native app, I'm here to tell you that the answer is almost definitely go for a web app. Web performance (especially on mobile devices) has come a long way in the past year or so, and using tools like <a href="http://phonegap.com">Phonegap</a>, you can get the best of both worlds (something in the app store, code reuse, platform agnosticism, leveraging web technologies). Based on some recent work/research I've done, it's actually much more powerful than they're selling it for.

This post will go into detail of how to make it work, but at a very high level, all you have to do is alter the User Agent coming out of your Phonegapped app, then sniff for that special UA string on the server side of wherever your web code is living, and if it's there, enable Phonegap-specific code. If not, let it function as a normal web app - no harm, no foul. It's an incredibly powerful tool that lets you use ~98% of the same code for your Android/iPhone app and your web app.

# Step 0) Set up your Phonegap project, server, etc.

This guide won't go into detail about how exactly to set up a phonegap application, or how to get started with Rails. I'll leave that as an exercise to the reader, but also you can clone my <a href="https://github.com/borego/progressive_enhancement_phonegap">github repo</a> which has all of that (and many other things) done for you. You'll also need to, for the purpose of this demo, add the Contacts plugin to your Phonegap app.

# Step 1) Point your Phonegap app at your web app

This step seems a bit trivial, but it's not part of the default Phonegap configuration. In your `www/config.xml` file, add the following line:

```xml
<content src="http://your-site-name-here.com">
```

In the example repo, the path is replaced with `http://prog-enh-pg.herokuapp.com/`, as that's where the heroku app lives for the demo. I usually put it after the `<author>` tag as well, but I don't think that's required.

# Step 2) Modify the User Agent coming out of your PG app

This is basically the only part that's platform-specific. Obviously the way you do this on Android is going to differ from the way you do it on iOS. This guide only details the Android one, but it would be just as easy to do in iOS (or Windows Phone).

Navigate down to `platforms/android/src/path/to/your/app/ProjectName.java` and edit the onCreate function to look like this:

```java
public void onCreate(Bundle savedInstanceState)
{
    super.onCreate(savedInstanceState);
    super.init();
    // Set by <content src="index.html"> in config.xml
    super.loadUrl(Config.getStartUrl());

    ////// This is what you edit //////
    String ua = this.appView.getSettings().getUserAgentString();
    this.appView.getSettings().setUserAgentString(ua + " phonegap_prog_enh");
    //super.loadUrl("file:///android_asset/www/index.html");
    ////// This is what you edit //////
}
```

The bold text is what you're adding. All this does is append a custom string (in this case, `"phonegap_prog_enh"`) to the User Agent so that you can determine on the server side whether or not a use is on your app or not. Yes, of course, someone could probably proxy this and sniff it out, or reverse engineer it, but it doesn't matter - all it would do is break the app in their browser. Trollers gonna troll.

# Step 3) Listen for your custom User Agent on the server side and set a flag

Now that we have a way to know if a user is accessing our server via a normal browser or via our Phonegap app, we can decide whether or not to enable Phonegap-specific features. You need to do this because if you don't, you get some <a href="/img/posts/prog-enh-phonegap/uglypg.png">ugly error messages</a> as the web app tries to access Phonegap APIs that aren't there. This detection is really easy, though. In the sample app, it looks like this:

```ruby
class ContactsController < ApplicationController
  def index
    @phonegap = request.env['HTTP_USER_AGENT'].include?("phonegap_prog_enh")
  end
end
```

Which then falls through to the view, where we can do stuff like this:

```html
<% if @phonegap %>
  <h3>Only Phonegap users will see this</h3>
  ... 
<% end %>
```

You're only going to want the Phonegap Javascript to fire in these instances, which leads us to the next part.

# Step 4) Enable Phonegap-specific functionality

As mentioned above, you're not going to want the Phonegap code to run willy-nilly all over your application. Specifically, the `cordova.js` file (which normally lives in your Phonegap's `platforms/android/assets/www` folder) is what kicks off all of the Phonegap functionality, so once you load that, you're going down that path. Luckily, this is easily avoided:

```html
<% if @phonegap %>
  <script src="/cordova.js"></script>
  <script type="text/javascript">
    // your PG-specific code here
  </script>
<% end %>
```

Obviously you don't need to inline your PG Javascript, but you do need to protect against `cordova.js` loading out of place.

# Step 5) Profit

That's pretty much it. Obviously there's a lot more to it when it comes to the actual Phonegap APIs, but there's a lot of support and writing about all of that. The point of this guide is just to lay out this methodology, and to further prove my belief that the vast majority of app development can be done with "hybrid" apps.

# Gotchas

We all know it wouldn't be a real tech article without some gotchas, so here are some things that tripped me up the first few times.

* You need to listen for both the DOM to be ready and the Phonegap APIs to be ready. This takes the form of `'DOMContentLoaded'` and `'deviceready'` event listeners. It's as easy as setting a flag in each that you can reference later when trying to run your PG code. You can also just check if the `navigator.[insert-plugin-name]` exists yet (probably safer).
* You need to put `cordova.js`, `cordova_plugins.js`, and the `/plugins` directory in the right place on your server. You should be able to do it from a relative path based on where you access `cordova.js`, but for the purpose of this demo, everything is in the `/public` folder for Rails.
* Any time you add or remove a plugin via Phonegap's CLI, you need to go back and update at least the `cordova_plugins.js` file that's on your server. Not doing so will either produce some funky errors (as it tries to look for a plugin that doesn't exist), or it won't give you access to the APIs you want.

Feel free to shoot an email, tweet, or reach out to me any other way with questions, feedback, etc. Thanks!
