YUI().use('app', 'handlebars', 'json', 'jsonp', 'jsonp-url', 'transition', function (Y) {
    "use strict";
    var Trinker,
        User,
        Profile,
        Event,
        EventList,
        Drink,
        DrinkList,
        Buddy,
        BuddyList,
        Venue,
        VenueList,
        MapView,
        TickerView,
        ProfileView,
        StatusView,
        EventView,
        EventFeedView,
        BuddyListView,
        DrinkListView,
        VenueListView,
        HomePageView;
    /*****************************
     * Handlebars helpers
     ***************************/
    Y.Handlebars.registerHelper('link', function (text, url) {
        return '<a href="' + url + '">' + text + '</a>';
    });
    Y.Handlebars.registerHelper('list-link', function (text, url, listClass, listID) {
        return '<li class="' + listClass + '" id="' + listID + '"><a href="' + url + '">' + text + '</a></li>';
    });

    /*********************
     * helper functions
     ********************/
    // -- localStorage Sync Implementation (from todo demo) -----------------------
    // This is a simple factory function that returns a `sync()` function that can
    // be used as a sync layer for either a Model or a ModelList instance. The
    // TodoModel and TodoList instances above use it to save and load items.
    function LocalStorageSync(key) {
        var localStorage,
            data;
        if (!key) {
            Y.error('No storage key specified.');
        }
        if (Y.config.win.localStorage) {
            localStorage = Y.config.win.localStorage;
        }
        // Try to retrieve existing data from localStorage, if there is any.
        // Otherwise, initialize `data` to an empty object.
        data = Y.JSON.parse((localStorage && localStorage.getItem(key)) || '{}');
        // Delete a model with the specified id.
        function destroy(id) {
            var modelHash;
            if ((modelHash = data[id])) {
                delete data[id];
                save();
            }
            return modelHash;
        }
        // Generate a unique id to assign to a newly-created model.
        function generateId() {
            var id = '',
                i  = 4;
            while (i--) {
                id += (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            }
            return id;
        }
        // Loads a model with the specified id. This method is a little tricky,
        // since it handles loading for both individual models and for an entire
        // model list.
        //
        // If an id is specified, then it loads a single model. If no id is
        // specified then it loads an array of all models. This allows the same sync
        // layer to be used for both the TodoModel and TodoList classes.
        function get(id) {
            return id ? data[id] : Y.Object.values(data);
        }
        // Saves the entire `data` object to localStorage.
        function save() {
            localStorage && localStorage.setItem(key, Y.JSON.stringify(data));
        }
        // Sets the id attribute of the specified model (generating a new id if
        // necessary), then saves it to localStorage.
        function set(model) {
            var hash = model.toJSON(),
                idAttribute = model.idAttribute;
            if (!Y.Lang.isValue(hash[idAttribute])) {
                hash[idAttribute] = generateId();
            }
            data[hash[idAttribute]] = hash;
            save();
            return hash;
        }
        // Returns a `sync()` function that can be used with either a Model or a
        // ModelList instance.
        return function (action, options, callback) {
            // `this` refers to the Model or ModelList instance to which this sync
            // method is attached.
            var isModel = Y.Model && this instanceof Y.Model;
            switch (action) {
            case 'create': // intentional fallthru
            case 'update':
                callback(null, set(this));
                return;
            case 'read':
                callback(null, get(isModel && this.get('id')));
                return;
            case 'delete':
                callback(null, destroy(isModel && this.get('id')));
                return;
            }
        };
    }
    /// "a" versus "an" for drink message
    function startsWithVowel(word) {
        var letter = word[0].toLowerCase();
        return letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u';
    }
    /// pretty-fies the time display instead of using time's default toString
    function getTimeDisp(now) {
        Date.prototype.subtractHours = function (h) {
            this.setTime(this.getTime() - (h * 60 * 60 * 1000));
            return this;
        }
        if (!now) {
            now = new Date();
            now.subtractHours(4);
        }
        var hour = now.getHours(),
            min = now.getMinutes(),
            ap = "am";
        if (hour > 11) {
            ap = "pm";
        }
        if (hour > 12) {
            hour = hour - 12;
        }
        if (hour === 0) {
            hour = 12;
        }
        if (min < 10)	{
            min = "0" + min;
        }

        return hour + ":" + min + ap;
    }
    /// determines time difference between current and a given time. Useful for various display functions (e.g. buddy list)
    function getTimeDiff(date, now) {
        var nTotalDiff = now.getTime() - date.getTime(),
            oDiff = new Object();

        oDiff.months = Math.floor(nTotalDiff / 1000 / 60 / 60 / 24 / 30);
        nTotalDiff -= oDiff.months * 1000 * 60 * 60 * 24 * 30;

        oDiff.weeks = Math.floor(nTotalDiff / 1000 / 60 / 60 / 24 / 7);
        nTotalDiff -= oDiff.weeks * 1000 * 60 * 60 * 24 * 7;

        oDiff.days = Math.floor(nTotalDiff / 1000 / 60 / 60 / 24);
        nTotalDiff -= oDiff.days * 1000 * 60 * 60 * 24;

        oDiff.hours = Math.floor(nTotalDiff / 1000 / 60 / 60);
        nTotalDiff -= oDiff.hours * 1000 * 60 * 60;

        oDiff.minutes = Math.floor(nTotalDiff / 1000 / 60);
        nTotalDiff -= oDiff.minutes * 1000 * 60;

        oDiff.seconds = Math.floor(nTotalDiff / 1000);

        return oDiff;
    }
    /// determine the text of the drink message based on drink name, volume, and if location is used
    function createDrinkMessage(drinkName, volume, location) {
        volume = parseFloat(volume);
        var msg = "";
        if (startsWithVowel(drinkName)) {
            switch(volume) {
            case 1:
            case 2:
                msg = "had a tasting of " + drinkName;
              break;
            case 1.5:
                msg = "had a shot of " + drinkName;
                break;
            case 3.0:
                msg = "had a double shot of " + drinkName;
                break;
            case 4.5:
                msg = "had an " + drinkName + " martini";
                break;
            case 5.0:
                msg = "has a glass of " + drinkName;
                break;
            case 6.0:
                msg = "had an " + drinkName + " lowball";
                break;
            case 6.3:
                msg = "had a split of " + drinkName;
                break;
            case 9.5:
                msg = "had an " + drinkName + " highball";
                break;
            case 12.0:
                msg = "had a bottle of " + drinkName;
                break;
            case 12.7:
                msg = "had half a bottle of " + drinkName;
                break;
            case 13.0:
                msg = "had an " + drinkName + " margarita/hurricane";
                break;
            case 16.0:
                msg = "had a pint of " + drinkName;
                break;
            case 25.4:
                msg = "had a bottle of " + drinkName;
                break;
            case 33.8:
                msg = "had a liter of " + drinkName;
                break;
            case 40.0:
                msg = "had a Forty of " + drinkName;
                break;
            default:
                msg = "had an " + drinkName;
                break;
            }
        } else {
            switch(volume) {
            case 1:
            case 2:
                msg = "had a tasting of " + drinkName;
            case 1.5:
                msg = "had a shot of " + drinkName;
                break;
            case 3.0:
                msg = "had a double shot of " + drinkName;
                break;
            case 4.5:
                msg = "had a " + drinkName + " martini";
                break;
            case 5.0:
                msg = "has a glass of " + drinkName;
                break;
            case 6.0:
                msg = "had a " + drinkName + " lowball";
                break;
            case 6.3:
                msg = "had a split of " + drinkName;
                break;
            case 9.5:
                msg = "had a " + drinkName + " highball";
                break;
            case 12.0:
                msg = "had a bottle of " + drinkName;
                break;
            case 12.7:
                msg = "had half a bottle of " + drinkName;
                break;
            case 13.0:
                msg = "had a " + drinkName + " margarita/hurricane";
                break;
            case 16.0:
                msg = "had a pint of " + drinkName;
                break;
            case 25.4:
                msg = "had a bottle of " + drinkName;
                break;
            case 33.8:
                msg = "had a liter of " + drinkName;
                break;
            case 40.0:
                msg = "had a Forty of " + drinkName;
                break;
            default:
                msg = "had a " + drinkName;
                break;
            }
        }
        if (typeof (location) !== "undefined") {
          msg += " at <span class='feedLocation'>" + location + "</span>";
        }
        return msg;
    }
    /*********************
     * Models
     ********************/
    /// user = user current logged in
    User = Y.Base.create('user', Y.Model, [], {
        /// prototype methods!
    }, {
        sync: LocalStorageSync('trinker'),
        ATTRS: {
            uID: {value: null},
            username: {value: null},
            currentUnits: {value: 0},
            currentDrinks: {value: 0},
            drinkHistory: {value: null}, /// (eventsList) last 5? drinks for recent drinks/status
            lat: {value: 0}, /// from geolocation and/or query
            lng: {value: 0}, /// from geolocation and/or query
            buddies: {value: null}, /// (ModelList) buddiesList
            picURL: {value: "http://getTrinker.com/m/img/profile.png"}
        }
    });
    /// profile = profile current/last viewed. defaults to user
    Profile = Y.Base.create('profile', Y.Model, [], {
        /// prototype methods!
    }, {
        sync: LocalStorageSync('trinker'),
        ATTRS: {
            id: {value: null}, /// userID
            username: {value: null}, /// userName
            picURL: {value: "http://getTrinker.com/m/img/profile.png"},
            history: {value: null}, /// (ModelList) eventList
            drinks: {value: 0}, /// stats for badge from database
            units: {value: 0},
            volume: {value: 0},
            kegs: {value: 0},
            daysActive: {value: 0} /// from DB, for more maths!
        }
    });
    /// event = an individual event (for logging, displaying, composing feed, etc)
    Event = Y.Base.create('event', Y.Model, [], {
        /// prototype methods!
    }, {
        sync: LocalStorageSync('trinker'),
        ATTRS: {
            id: {value: null},
            uID: {value: null}, /// userID who did event
            username: {value: null}, /// username
            picURL: {value: "http://getTrinker.com/m/img/profile.png"},
            type: {value: 0}, /// checkin? drink? comment? etc
            action: {value: 0}, /// actual text/data about the event
            lat: {value: null}, /// location
            lng: {value: null},
            timestamp: {value: new Date()} /// (Date) when it happened
        }
    });
    /// eventList = a ModelList of Events (for feed/map/profile/status?)
    EventList = Y.Base.create('eventList', Y.ModelList, [], {
        /// prototype methods!
        model: Event,
        /// override default comparator to ensure events are reverse chronological
        comparator: function (event) {
            return -event.get('timestamp');
        }
    }, {
        ATTRS: {
            user: {value: User} /// event lists belong to a certain user (default: currently logged in)
        }
    });
    /// drink = one drink from the database (for logging, composing feed, drink info (eventually))
    Drink = Y.Base.create('drink', Y.Model, [], {
        /// prototype methods!
    }, {
        sync: LocalStorageSync('trinker'),
        ATTRS: {
            id: {value: null},
            name: {value: null},
            ABV: {value: 0},
            volume: {value: 0},
            type: {value: null}, /// beer? wine? cocktail? liquor?
            class: {value: null}, /// pilsner? spiced rum? chardonnay?
            ingredients: {value: null}, /// (array) for cocktails
            manufacturer: {Value: null} /// for beer/spirits
        }
    });
    /// drinkList = ModelList of Drinks (for recent/search)
    DrinkList = Y.Base.create('drinkList', Y.ModelList, [], {
        /// prototype methods!
        model: Drink,
        /// override default comparator to ensure drinks are alphabetical
        comparator: function (drink) {
            return drink.get('name');
        }
    }, {
        ATTRS: {}
    });
    /// buddy = one buddy (for profile view, rally call, composing list)
    Buddy = Y.Base.create('buddy', Y.Model, [], {
        /// prototype methods!
    }, {
        sync: LocalStorageSync('trinker'),
        ATTRS: {
            id: {value: null}, /// buddy's uID
            username: {value: null},
            lastSeen: {value: null}, /// (Date) when they were last active
            status: {value: null}, /// online/idle/offline (based on lastSeen)
            picURL: {value: "http://getTrinker.com/m/img/profile.png"}
        }
    });
    /// buddyList = ModelList of Buddies (for rally search, buddy listing, etc)
    BuddyList = Y.Base.create('buddyList', Y.ModelList, [], {
        /// prototype methods!
        model: Buddy,
        /// override default comparator to ensure buddies are sorted alphabetically
        comparator: function (buddy) {
            return buddy.get('name');
        }
    }, {
        ATTRS: {
            user: {value: User} /// buddy lists belong to a certain user (default: currently logged in)
        }
    });
    /// venue = one venue from Foursquare (for checking in/logging drinks at bars, composing list)
    Venue = Y.Base.create('venue', Y.Model, [], {
        /// prototype methods!
    }, {
        sync: LocalStorageSync('trinker'),
        ATTRS: {
            id: {value: null}, /// vID from 4sq
            name: {value: null},
            lat: {value: 0},
            lng: {value: 0},
            address: {value: null},
            distance: {value: 0}, /// based on lat/lng, user's current loc
            picURL: {value: "https://foursquare.com/img/categories/nightlife/lounge_88.png"} /// pic from 4sq
        }
    });
    /// venueList = ModelList of Venues (for checkin)
    VenueList = Y.Base.create('venueList', Y.ModelList, [], {
        /// prototype methods!
        model: Venue,
        /// override default comparator to ensure venues are closest -> furthest
        comparator: function (venue) {
            return -venue.get('distance');
        }
    }, {
        ATTRS: {}
    });

    /*********************
     * Views
     ********************/
    /// mapview used on home page
    MapView = Y.Base.create('mapView', Y.View, [], {
        initializer: function(uID) {
            var events = this.events = this.get('model');
            //console.log(events);
            //this.load();
        },
        //template: Y.Handlebars.compile(Y.one('')) map doesn't have a template, just render
        render: function() {
            var events = this.get('model').toJSON(),
                content;
        }
    }, {
        ATTRS: {
            container: Y.one('#map')
        }
    });
    /// news ticker from homepage
    TickerView = Y.Base.create('tickerView', Y.View, [], {
        template: Y.Handlebars.compile(Y.one('#trinker-ticker-template').getHTML()),
        events: {
            '#ticker li': {click: 'showEventOnMap'}
        },
        initializer: function(uID) {
            var events = this.events = new EventList();
            //this.load();
        },
        render: function() {
            var events = this.get('model').toJSON(),
                eventsData,
                content;
            eventsData = events.map(function (event) {
                var data = event.toJSON();
                data.timestamp = getTimeDisp(data.timestamp);
                if (data.type === "drink") {
                    if (startsWithVowel(data.action)) {
                        data.action = " had an " + data.action;
                    } else {
                        data.action = " had a " + data.action;
                    }
                } else if(data.type === "checkIn") {
                    data.action = " checked in "
                }
                return data;
            });
            content = Y.Handlebars.templates['trinker-ticker-template']({events: eventsData});
            Y.one(this.get('container')).setHTML(content);
        },
        showEventOnMap: function (e) {
            console.log(e);
        }
    }, {
        ATTRS: {
            container: Y.one('#ticker ul')
        }
    });
    /// user profile view (for current user or buddies)
    ProfileView = Y.Base.create('profileView', Y.View, [], {
        template: Y.Handlebars.compile(Y.one('#trinker-profile-template').getHTML()),
        render: function() {
            var profile = this.get('model').toJSON(),
                content;
        }
    }, {
        ATTRS: {}
    });
    /// current user's status
    StatusView = Y.Base.create('statusView', Y.View, [], {
        template: Y.Handlebars.compile(Y.one('#trinker-status-template').getHTML()),
        render: function() {
            var status = this.get('model').toJSON(),
                statusEvents,
                content;
            statusEvents = status.drinkHistory.map(function (event) {
                data = event.toJSON();
                data.timestamp = getTimeDisp(data.timestamp);

                return data;
            });
            status.drinkHistory = statusEvents;
            content = Y.Handlebars.template['trinker-status-template']({user: status});
            Y.one(this.get('container')).setHTML(content);
        }
    }, {
        ATTRS: {}
    });
    /// action about to take place (and/or reviewing individual actions from feed)
    EventView = Y.Base.create('eventView', Y.View, [], {
        template: Y.Handlebars.compile(Y.one('#trinker-event-template').getHTML()),
        render: function() {
            var event = this.get('model').toJSON(),
                content;
        }
    }, {
        ATTRS: {}
    });
    /// used for news feed page & history (on profile)
    EventFeedView = Y.Base.create('eventFeedView', Y.View, [], {
        template: Y.Handlebars.compile(Y.one('#trinker-eventList-template').getHTML()),
        render: function() {
            var events = this.get('model').toJSON(),
                content;
        }
    }, {
        ATTRS: {}
    });
    /// used for buddy page, rally selection
    BuddyListView = Y.Base.create('buddyFeedView', Y.View, [], {
        template: Y.Handlebars.compile(Y.one('#trinker-buddyList-template').getHTML()),
        render: function() {
            var buddies = this.get('model').toJSON(),
                content;
        }
    }, {
        ATTRS: {}
    });
    /// used for recent/searched drinks
    DrinkListView = Y.Base.create('drinkFeedView', Y.View, [], {
        template: Y.Handlebars.compile(Y.one('#trinker-drinkList-template').getHTML()),
        render: function() {
            var drinks = this.get('model').toJSON(),
                content;
        }
    }, {
        ATTRS: {}
    });
    /// used for selecting venue while checking in
    VenueListView = Y.Base.create('venueFeedView', Y.View, [], {
        template: Y.Handlebars.compile(Y.one('#trinker-venueList-template').getHTML()),
        render: function() {
            var venues = this.get('model').toJSON(),
                content;
        }
    }, {
        ATTRS: {}
    });

    /****************
     * Page Views
     ****************/
    HomePageView = Y.Base.create('homePageView', Y.View, [], {
        template: Y.Handlebars.compile(Y.one('#trinker-home-template').getHTML()),
        events: {
            '#home-drink': {
                click: 'showLeftMenu'
            },
            '#home-party': {
                click: 'showRightMenu'
            },
            '#right-menu': {
                click: 'showRightMenu'
            }
        },
        initializer: function () {
            var user = this.get('model'),
                events = new EventList();

            var handleJSONP = function (res) {
                console.log(res);
            }
            Y.jsonp("http://gettrinker.com/m/php/newsFeed.php?uID=" + user.get('uID') + "&callback={callback}", function (res) {
                var meta = res.meta,
                    data = res.data;
                console.log(data);
            });

            this.mapView = new MapView();
            this.tickerView = new TickerView();
        },
        destructor: function () {
            this.mapView.destroy();
            this.tickerView.destroy();

            delete this.mapView;
            delete this.tickerView;
        },
        render: function () {
            /// get child model instances, render their content, smash into appropriate placeholders
            var user = this.get('model'),
                //map = this.mapView.render().get('container'),
                //ticker = this.tickerView.render().get('container'),//(user.getAttrs(['ticker'])),
                container = this.get('container'),
                content = Y.one(Y.config.doc.createDocumentFragment());
            //content.append(map);
            //content.append(ticker);

            this.get('container').addClass('home-page').setHTML(content);
            return this;
        },
        showRightMenu: function (e) {
            e.preventDefault();
            var $rightMenu = Y.one('#right-menu');
            $rightMenu.transition({
                duration: 0.5,
                right: "300px"
            })
        },
        showLeftMenu: function (e) {
            e.preventDefault();
            var $leftMenu = Y.one('#left-menu');
            $leftMenu.transition({
                duration: 0.5,
                left: "300px"
            })
        }

    });

    /*********************
     * Routes
     ********************/

    /*********************
     * App setup
     ********************/
    Trinker = Y.Base.create('trinkerApp', Y.App, [], {
        views: {
            homePage: {
                type: HomePageView
            },
            statusPage: {
                type: StatusView,
                parent: 'homePage'
            },
            drinkList: {
                type: DrinkListView,
                parent: 'homePage'
            }
        },
        initializer: function () {
            this.on('*:showStatus', this.navigateToStatus)
            this.once('ready', function (e) {
                if (this.hasRoute(this.getPath())) {
                    this.dispatch();
                } else {
                    this.showHomePage();
                }
            });
        },
        navigateToStatus: function (e) {
            var activeView = this.get('activeView');

            if (activeView instanceof HomePageView && this.getPath() !== "/") {
                this.save('/');
            }

            this.navigate('/status');
        },
        showHomePage: function (req) {
            this.showView('homePage', {
                model: this.get('user')
            });
        }

    }, {
        ATTRS: {
            user: {value: new User()},
            routes: {
                value: [
                    {path: "/", callbacks: "showHomePage"},
                    {path: "/status", callbacks: "navigateToStatus"}
                ]
            }
        }

    });
    var defaultUser = new User({
            uID: "5042b566d6a895c53b000000",
            username: "borego",
            picURL: "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-snc6/211332_3707564_2121633792_q.jpg"
        });
    Y.jsonp("http://gettrinker.com/m/php/newsFeed.php?uID=" + defaultUser.get('uID') + "&callback={callback}", function (res) {
                var meta = res.meta,
                    data = res.data;
                console.log(data);
            });
    new Trinker({
        serverRouting: false,
        transitions: true,
        user: defaultUser
    }).render();
});
