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
            From: "Joe Harper",
            Subject: "Reunion",
            Text: "Hi Tom, my aunt comes for a visit this Saturday, so I can't come back to St. Pete...",
            Time: "20:09"
        },
        {
            ID: 7,
            From: "Becky Thatcher",
            Subject: "Out tonight?",
            Text: "Honey, wanna go out tonight to grab some chicken? My weekly vouchers for cooking...",
            Time: "20:14"
        },
        {
            ID: 8,
            From: "Ian Cohen",
            Subject: "Fishing weekend",
            Text: "Honey, wanna go out tonight to grab some chicken? My weekly vouchers for cooking...",
            Time: "20:19"
        },
        {
            ID: 9,
            From: "Lara Sullivan",
            Subject: "I'm sorry, Tom",
            Text: "Hi Tom, my aunt comes for a visit this Saturday, so I can't come back to St. Pete...",
            Time: "22:09"
        },
        {
            ID: 10,
            From: "Robert Smith",
            Subject: "Weekly review",
            Text: "Honey, wanna go out tonight to grab some chicken? My weekly vouchers for cooking...",
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
