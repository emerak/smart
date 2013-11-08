var inbox = [
        {
            ID: 1,
            From: "John Doe",
            Subject: "Monday meeting",
            Text: "Hi Tom, Since Monday I'll be out of office, I'm rescheduling the meeting for Tuesday.",
            Time: "07:56"
        },
        {
            ID: 2,
            From: "Sarah Connor",
            Subject: "Regarding org chart changes",
            Text: "Tom, I checked the new org chart last night and I have some reservations about it...",
            Time: "08:22"
        },
        {
            ID: 3,
            From: "Jane Parker",
            Subject: "Your Costume is ready",
            Text: "Hi mr. Sawyer, I'm sorry for the delay, your Halloween costume is ready. The bears...",
            Time: "10:14"
        },
        {
            ID: 4,
            From: "Joe Harper",
            Subject: "I'm sorry, Tom",
            Text: "Hi Tom, my aunt comes for a visit this Saturday, so I can't come back to St. Pete...",
            Time: "10:14"
        },
        {
            ID: 5,
            From: "Becky Thatcher",
            Subject: "Out tonight?",
            Text: "Honey, wanna go out tonight to grab some chicken? My weekly vouchers for cooking...",
            Time: "10:14"
        },
        {
            ID: 6,
            From: "ATT Services",
            Subject: "Credit card",
            Text: "Your credit card has been delivered, if you want to know more about our online...",
            Time: "20:09"
        },
        {
            ID: 7,
            From: "Times",
            Subject: "Newsletter",
            Text: "If you no longer wish to receive these emails, please reply to this message with...",
            Time: "20:14"
        },
        {
            ID: 8,
            From: "Sam Douglas",
            Subject: "Re: Regarding org chart changes",
            Text: "Take a deeper look into the latest versions of Chart.org, we have improved the desig...",
            Time: "20:19"
        },
        {
            ID: 9,
            From: "Lara Sullivan",
            Subject: "Photo of the week",
            Text: "This photo was taken in Marrakesh out in the remote countryside. I used a Canon...",
            Time: "22:09"
        },
        {
            ID: 10,
            From: "Robert Smith",
            Subject: "Weekly review",
            Text: "Hello, I sent your report back, I've made some styling corrections but despite of ...",
            Time: "22:25"
        }


    ];

    function onOpen(e) {
        this.element.find(".km-actionsheet-title").text(e.target.next().text());
    }

    function fshow(e) {
         window.location.assign("show.html");
    }

    function reply(e) {
         window.location.assign("reply.html");
    }

    function archive(e) {
        $("#actionResult").html("Archiving message #" + e.context);
    }
