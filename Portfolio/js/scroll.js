jQuery(function($){
    $("#desktop-nav").menuScroll();
});


jQuery.fn.extend({
    menuScroll: function() {
        // Declare all global variables
        var topMenu = this;
        var topMenuHeight = $(topMenu).height();
        var menuItems = $(topMenu).find("a");
        var lastId;

        // Save all menu items into scrollItems array
        var scrollItems = $(menuItems).map(function() {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });

        // When the menu item is clicked, get the #id from the href value, then scroll to the #id element
        $(topMenu).on("click", "a", function(e){
            var href = $(this).attr("href");

            var offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight;

            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 800);
            e.preventDefault();

        });

        // When page is scrolled
        $(window).scroll(function(){
            var nm = $("html").scrollTop();
            var nw = $("body").scrollTop();
            var fromTop = (nm > nw ? nm : nw)+topMenuHeight;


            // When the page pass one #id section, return all passed sections to scrollItems and save them into new array current
            var current = $(scrollItems).map(function(){
                if ($(this).offset().top <= fromTop)
                    return this;
            });

            // Get the most recent passed section from current array
            current = current[current.length-1];
            var id = current && current.length ? current[0].id : "";
            if (lastId !== id) {
                lastId = id;
                // Set/remove active class
                $(menuItems)
                    .parent().removeClass("active")
                    .end().filter("[href='#"+id+"']").parent().addClass("active");
            }

        });
    }
});








    // typing animation
    (function($) {
        $.fn.writeText = function(content) {
            var contentArray = content.split(""),
                current = 0,
                elem = this;
            setInterval(function() {
                if(current < contentArray.length) {
                    elem.text(elem.text() + contentArray[current++]);
                }
            }, 80);
        };

    })(jQuery);

    // input text for typing animation
    $("#holder").writeText("WEB DESIGNER + FRONT-END DEVELOPER");





