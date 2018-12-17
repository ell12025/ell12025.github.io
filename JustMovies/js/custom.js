// https://www.youtube.com/watch?annotation_id=annotation_843740397&feature=iv&index=1&list=PLZU0qJlzY07XlhEKZfQVAynB-9hC01Lm6&src_vid=LrM7KJOAit0&v=6r_swiMuGgE
// Jquery Pagination Tutorial plugin, Javascript pagination tutorial Plugin Simple pt.1/6 (Follow videos 1-7).


// The code below was done by following a youtube tutorial about pagination. URL and video title listed above.
// The overall focus of this project was to learn how to work with an API using JavaScript.

(function($){

    $(document).ready(function() {

        $(".pagination").customPaginate({
            itemsToPaginate : ".col-md-4",

            activeClass : "active-class"
        });

    });

})(jQuery);