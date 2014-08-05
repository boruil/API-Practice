var xhr = new XMLHttpRequest();
xhr.open("GET", "http://www.boruili.com/", false);
xhr.send();
console.log(xhr.status);
console.log(xhr.statusText);