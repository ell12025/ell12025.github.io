// API provided by https://www.themoviedb.org

var HttpClient = function() {
    this.get = function(aUrl, aCallback) {
        var anHttpRequest = new XMLHttpRequest();
        anHttpRequest.onreadystatechange = function() {
            if (anHttpRequest.readyState == 4 && anHttpRequest.status == 200)
                aCallback(anHttpRequest.responseText);
        }

        anHttpRequest.open("GET", aUrl, true);
        anHttpRequest.send(null);
    }
}


var theUrl = "https://api.themoviedb.org/3/discover/movie?page=";
var pageNumber;
var apiKey = "&api_key=f1373bd93c1779606f6eb28ecb5d54a9";
var client = new HttpClient();
for (pageNumber = 1; pageNumber < 10; pageNumber++) {
    client.get(theUrl + pageNumber + apiKey, function(response) {
        var i;
        var response1 = JSON.parse(response);
        var base_url = "https://image.tmdb.org/t/p/w500/";
        // alert(response);

        for (i in response1.results) {

            var col = document.createElement("DIV");
            col.setAttribute("class", "col-md-4");

            var thumbnail = document.createElement("DIV");
            thumbnail.setAttribute("class", "thumbnail");

            var image = document.createElement("IMG");
            image.setAttribute("id", "img");
            image.setAttribute("alt", "move-cover");
            image.setAttribute("src", base_url + response1.results[i].poster_path);

            var t = document.createElement("P");
            t.setAttribute("id", "title");
            t.innerHTML = response1.results[i].title;

            var o = document.createElement("P");
            o.setAttribute("id", "overview");
            o.innerHTML = response1.results[i].overview;

            document.getElementsByClassName("row text-center")[0].appendChild(col);
            col.appendChild(thumbnail);
            thumbnail.appendChild(image);
            thumbnail.appendChild(t);
            thumbnail.appendChild(o);

        }
    });

}


