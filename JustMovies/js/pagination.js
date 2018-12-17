// https://www.youtube.com/watch?annotation_id=annotation_843740397&feature=iv&index=1&list=PLZU0qJlzY07XlhEKZfQVAynB-9hC01Lm6&src_vid=LrM7KJOAit0&v=6r_swiMuGgE
// Jquery Pagination Tutorial plugin, Javascript pagination tutorial Plugin Simple pt.1/6 (Follow videos 1-7).


// The code below was done by following a youtube tutorial about pagination. URL and video title listed above.
// The overall focus of this project was to learn how to work with an API using JavaScript.


(function($){

        $.fn.customPaginate = function(options)
        {

            var paginationContainer = this;
            var itemsToPaginate;


            var standard = {

                itemsPerPage : 16

            };

            var settings = {};

            $.extend(settings, standard, options);

            var itemsPerPage = settings.itemsPerPage;

            itemsToPaginate = $(settings.itemsToPaginate);
            var numberOfPaginationLinks = Math.ceil((itemsToPaginate.length / itemsPerPage));

            $("<ul></ul>").prependTo(paginationContainer);

            for(var index = 0; index < numberOfPaginationLinks; index++)
            {
                paginationContainer.find("ul").append("<li>"+ (index+1) + "</li>");
            }

            itemsToPaginate.filter(":gt(" + (itemsPerPage - 1) + ")").hide();

            paginationContainer.find("ul li").first().addClass(settings.activeClass).end().on('click', function(){

                var $this = $(this);
                $this.addClass(settings.activeClass);
                $this.siblings().removeClass(settings.activeClass);

                var linkNumber = $this.text();

                var itemsToHide = itemsToPaginate.filter(":lt(" + ((linkNumber-1) * itemsPerPage) + ")");
                $.merge(itemsToHide, itemsToPaginate.filter(":gt(" + ((linkNumber * itemsPerPage) -1) + ")"));
                itemsToHide.hide();

                var itemsToShow = itemsToPaginate.not(itemsToHide);
                itemsToShow.show();

            });

        }

}(jQuery));