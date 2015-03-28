/**
 * Created by marius on 25/11/14.
 */
init = function($) {

    // Pre-compile template and "cache" it using closure
    var resultTemplate = _.template($("#resultTemplate").html());

    // Subscribe to the new search tags topic
    $.subscribe("/search/tags", function(e, tags) {
        $("#lastQuery")
            .html("<p>Searched for:<strong>" + tags + "</strong></p>");
    });

    // Subscribe to the new results topic
    $.subscribe("/search/resultSet", function(e, results) {
        $("#searchResults").empty().append(resultTemplate(results));

    });

    // Submit a search query and publish tags on the /search/tags topic
    $("#flickrSearch").submit(function(e) {
        e.preventDefault();
        var tags = $(this).find("#query").val();

        if (!tags) {
            return;
        }

        $.publish("/search/tags", [$.trim(tags)]);
    });


    // Subscribe to new tags being published and perform
    // a search query using them. Once data has returned
    // publish this data for the rest of the application
    // to consume

    $.subscribe("/search/tags", function(e, tags) {
        // return a promise insted of handle it directly
        var resultPromise = $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?", {
            tags: tags,
            tagmode: "any",
            format: "json"
        });

        // when the promise is resolved publish the result
        resultPromise.done(function(data) {
            if (!data.items.length) {
                return;
            }

            $.publish("/search/resultSet", {
                items: data.items
            });
        });
    });
};

$('document').ready(function() {
    init(jQuery);
});