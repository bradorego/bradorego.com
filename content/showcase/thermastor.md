{
   "categories": [
      "Showcase"
   ],
   "date": "2016-08-09T11:12:46-05:00",
   "dateRange": "2015-2016",
   "description": "Therma-Stor manufactures dehumifidiers, ventilation systems, and restoration equipment. They recently launched a line of internet-connected dehumidifiers.",
   "draft": false,
   "headline": "UX research, mobile app design, dashboard/reporting design.",
   "image": "/img/showcase/thermastor/desktop/1.jpg",
   "imageGallery": [
     {
       "title": "Santa Fe Sentry Wireframes",
       "src": "divider"
     },
     {
       "title": "Santa Fe Sentry Wireframes",
       "src": "/img/showcase/thermastor/wires/0.jpg"
     },
     {
       "title": "Santa Fe Sentry Wireframes",
       "src": "/img/showcase/thermastor/wires/1.jpg"
     },
     {
       "title": "Santa Fe Sentry Wireframes",
       "src": "/img/showcase/thermastor/wires/2.jpg"
     },
     {
       "title": "Santa Fe Sentry Wireframes",
       "src": "/img/showcase/thermastor/wires/3.jpg"
     },
     {
       "title": "Santa Fe Sentry Wireframes",
       "src": "/img/showcase/thermastor/wires/4.jpg"
     },
     {
       "title": "Santa Fe Sentry Wireframes",
       "src": "/img/showcase/thermastor/wires/5.jpg"
     },
     {
       "title": "Classic II Mockups",
       "src": "divider"
     },
     {
       "title": "Classic II Mockups",
       "src": "/img/showcase/thermastor/classic2/1.jpg"
     },
     {
       "title": "Classic II Mockups",
       "src": "/img/showcase/thermastor/classic2/2.jpg"
     },
     {
       "title": "Classic II Mockups",
       "src": "/img/showcase/thermastor/classic2/3.jpg"
     },
     {
       "title": "Classic II Mockups",
       "src": "/img/showcase/thermastor/classic2/4.jpg"
     },
     {
       "title": "Classic II Mockups",
       "src": "/img/showcase/thermastor/classic2/5.jpg"
     },
     {
       "title": "Classic II Mockups",
       "src": "/img/showcase/thermastor/classic2/6.jpg"
     },
     {
       "title": "Classic II Mockups",
       "src": "/img/showcase/thermastor/classic2/7.jpg"
     },
     {
       "title": "Dashboard Wireframes",
       "src": "divider"
     },
     {
       "title": "Dashboard Wireframes",
       "src": "/img/showcase/thermastor/desktop/1.jpg"
     },
     {
       "title": "Dashboard Wireframes",
       "src": "/img/showcase/thermastor/desktop/2.jpg"
     },
     {
       "title": "Dashboard Wireframes",
       "src": "/img/showcase/thermastor/desktop/3.jpg"
     }
   ],
   "publishdate": "2016-08-09T11:12:46-05:00",
   "showcaseImg": [
     {
       "title": "Wireframes",
       "src": "/img/showcase/thermastor/showcase/wires.gif"
     },
     {
       "title": "Classic II",
       "src": "/img/showcase/thermastor/showcase/classic2.gif"
     },
     {
       "title": "Desktop",
       "src": "/img/showcase/thermastor/showcase/desktop.gif"
     }
   ],
   "tags": ["ionic", "user research", "mobile app"],
   "title": "Therma-Stor"
}

# About

Therma-Stor is a high-end dehumidifier, water heater, and disaster recovery/restoration manufacturer established in 1977. Most of their products are focused on commercial applications, but recently they’ve been expanding into the high-end residential space with some of their units. With that move they were also interested in bringing their products online to offer internet-enabled options.

With so many examples of IoT products gone wrong, and all the ways one can go wrong, the opportunity to get in on the ground level of taking a product online was extremely valuable. Therma-Stor’s years of experience with their products and their consumers served as the basis of our exploration and design, and our expertise in software guided product development. Our first use case targeted agents monitoring multiple devices across different properties, with future development to target direct-to-consumer models as well as providing better reporting and visualization tools to account managing hundreds of units.

Therma-Stor’s Santa Fe Sentry application is currently available on both iOS and Android, the Classic II application is under development, and the desktop web/native desktop applications are in research stages.

# Process

My role on the initial Santa Fe Sentry project was to ensure the stakeholders on Therma-Stor's side had a good understanding of what their users wanted and what was feasible from a technology standpoint, and then to coordinate all engineering progress and decisions. This meant communicating daily with Therma-Stor's Electrical Engineers to ensure we knew how to connect to the device as well as with their Software Engineer, as the RESTful API was being built in parallel to the app. Being Therma-Stor's first IoT project, there was a lot of coaching done with respect to API design, agile methodologies, and best practices in cybersecurity.

I was also responsible for all research and design decisions, simultaneously playing the role of Scrum Master and Design Lead. MobileIgniter (the original developer) used a loosely agile methodology with weekly releases to the customer, meaning we would re-prioritize the backlog every week after a check in with stakeholders and test users.

Our initial research took the form of stakeholder interviews, where we got to talk to members of the Sales, Marketing, and Support teams as well as the engineers on the project and Therma-Stor's president. I took a deep dive on the issues they'd seen their agents having as well as some of their interests and desires, and from that generated Information Architecture and User Flow diagrams to ensure I had all of the proposed functionality covered and laid out in a way that made sense.

From there, I moved into iterative wireframing, presenting versions to the internal MobileIgniter team, to Therma-Stor's team, and to field agents for feedback. We also implemented analytics from the start as we built out prototypes and the eventual application, using real field data to drive which features were prioritized and which were less important.

# Findings

Two of the biggest learnings we got from this was the necessity of a "Snooze" button and our eventual move to add a web dashboard. Our initial assumptions were that agents would be managing less than 10 units, hence going mobile-only. We discovered some agents had upwards of 100, and that supervisors also wanted the ability to see every unit their team is responsible for, which is what drove us to design and build a desktop web dashboard.

The Snooze functionality was something nobody anticipated (because there were never alerts directly from the unit before). Every unit reports its status to the server every 15 minutes, and if anything is wrong, agents will get Push, Email, and/or Text notifications (their choice). Oftentimes an issue is due to the unit malfunctioning, so agents need to wait for a new part to arrive, meaning these notifications were superfluous (and, frankly, really annoying), hence the ability to silence a unit temporarily.
