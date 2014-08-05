var apiKey = "FtHwuH8w1RDjQpOr0y0gF3AWm8sRsRzncK3hHh9";

var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.boruili.com/", false);
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);

function showResponse(response) {
    var responseString = JSON.stringify(response, '', 2);
    document.getElementById('response').innerHTML += responseString;
}

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// add a api key