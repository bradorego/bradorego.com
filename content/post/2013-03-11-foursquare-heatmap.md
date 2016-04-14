{
   "categories": ["Development"],
   "date": "2013-03-11T17:21:36-05:00",
   "description": "A bit on the techie side of things, I talk about how and why I made the Foursquare Heatmap, as well as a little interesting aside it's taught me about how technology can enable us and change/create experiences for us.",
   "draft": false,
   "image": "/img/posts/foursquare-heatmap/header.png",
   "publishdate": "2013-03-11T14:47:36-05:00",
   "tags": [
      "foursquare",
      "heatmap",
      "remote sensing",
      "javascript"
   ],
   "title": "Foursquare Heatmap & Remote Sensing"
}

<div class="tldnr">
  <h4>TL;DNR</h4>
  <ul>
    <li>Foursquare's API and Google Maps are pretty easy to work with.</li>
    <li>Creating a new product can be as easy as combining two existing technologies.</li>
    <li>New products create opportunities for new experiences.</li>
  </ul>
</div>
<hr/>

A little over a month ago (technically during the <a href="https://www.hackerleague.org/hackathons/foursquare-hackathon-2013">Foursquare Hackathon</a>, but I was working from home due to <a href="http://midwestultimate.com/red-eye">Red Eye</a>) I spent a few hours one weekend hacking together an idea I'd come up with when working on Foursquare integration for <a href="http://gettrinker.com">Trinker</a>. What I discovered while playing with the <a href="https://developer.foursquare.com/overview/venues">Venues API</a> is that with one query, you can get all of the information about a bunch of different venues (I think it tops out at 30). Part of that information is, of course, the location (latitude, longitude, address), and another interesting data point: the `hereNow` value.

What that means is that with a single query to the Foursquare API, I essentially have a list of locations and how many people are checked in at that location right now. Interesting, I thought. So then I thought, why don't I take this information and create an overlay in Google Maps? A heat map, if you will? Well, the idea sat around for a month or two, and when I caught wind of the Foursquare Hackathon thanks to <a href="http://snowshoestamp.com">Snowshoe</a>, I decided it was time to dust that one off.

# The technical details

The app is written entirely in Javascript (there's no server-side code behind this - no database), and uses Foursquare's API and Google's Maps API. I first try to capture the user's geolocation data (<a href="https://developer.mozilla.org/en-US/docs/Using_geolocation">navigator.geolocation</a>) so I can display a map that's immediately relevant to them. If that fails (or they deny), I default to NYC (as it almost always has data to show). Users can also enter an address or location which I then run through Google's <a href="https://developers.google.com/maps/documentation/geocoding/">Geocoder API</a> and pull out the lat/lng which go on to the 4sq/gMaps functions. Once I have a lat/lng, I make an AJAX call to Foursquare with credentials (`client_id`, `client_secret`, `version #`) and the data to make the query (`radius`, `lat`/`lng`, `category`, etc). The return from that gives me the <a href="https://developer.foursquare.com/docs/explore#req=venues/search%3Fll%3D40.7,-74">venues list</a> (`data.response.venues`), which I save off into a local variable for later (`venueList`). Once I have all the data, I initialize a <a href="https://developers.google.com/maps/documentation/javascript/reference#Map">`google.maps.Map` object</a> (with some <a href="https://developers.google.com/maps/documentation/javascript/reference#MapOptions">options</a>), and then iterate through each of the venues, drawing a <a href="https://developers.google.com/maps/documentation/javascript/reference#Circle">circle</a> with radius and color based on the `hereNow` value of that venue. Once the circle is drawn to the map (which is kind of weird - you actually create a new circle with a reference to the map object), I add a <a href="https://developers.google.com/maps/documentation/javascript/events">click listener</a> to display the venue information, and then I add them to the table below which I then run through <a href="http://tablesorter.com/docs/">tablesorter</a>. When you click on one of the table rows, I grab the lat/lng from that row and search through the list of venues (`venueList`) to find the one that matches and open up an <a href="https://developers.google.com/maps/documentation/javascript/reference#InfoWindow">info window</a> to display its content. Voila.

Whew, okay. That was a mouthful. For the non-tech folk, basically all I'm doing is getting the latitude and longitude of your current location (or what you type in), querying Foursquare, pulling out the info, and putting circles onto Google Maps based on how many people are at the locations, which you can then click on to get more info. You can also sort the table below, and click on any row to see that location on the map.

# But why, Brad?

Because it's cool. That's actually the first motivation. I had the idea and I wanted to see if I could pull it off. It turns out I could, and it only took me a few hours to get the base prototype working. I thought it'd be interesting to literally see where people are. That is, in essence, what this is. I've created an interactive information visualization of where people are, according to Foursquare. And it's really cool. I've also made a few <a href="http://www.youtube.com/playlist?list=PLq3M6ODce1N6IZoXoisCw5WHjEQs7SAWl&amp;feature=view_all">time lapse videos</a> to show how cool it can be.

I've also noticed something else, though, since making this. Every now and then, I get curious to see what the map looks like. I'm curious to see what people are doing in places I'm not. I now have a tool that lets me see this, and the fact that there are real people out there making these things happen is a pretty interesting experience. When I have friends on vacation, or travelling to different cities, I jokingly tell them I'll be watching them.

There's also a practical use to this technology, which is part of the motivation behind building it - I can see where people are/aren't in my immediate vicinity. If I'm planning to go out to the bars, or out to a restaurant, and I see there are a lot of people in a certain area, maybe I'll want to avoid there (or to go there).

At the very least, it's fun to play with!
