function initForm() {
        var body = $(".km-pane");

        if (kendo.ui.DropDownList) {
            $("#dropdown").kendoDropDownList({
                // The options are needed only for the desktop demo, remove them for mobile.
                popup: { appendTo: body },
                animation: { open: { effects: body.hasClass("km-android") ? "fadeIn" : body.hasClass("km-ios") || body.hasClass("km-wp") ? "slideIn:up" : "slideIn:down" } }
            });
        }

        if (kendo.ui.Slider) {
            $("#slider").kendoSlider({ tooltip: { enabled: false } });
        }
    }

