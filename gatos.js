var btn = document.querySelector("#btn");
var img = document.querySelector("#photo");

btn.addEventListener("click", function() {
  var XHR = new XMLHttpRequest();
  
  XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status == 200) {
      img.src = JSON.parse(XHR.responseText).file;  
    }
  }
  XHR.open("GET", "https://aws.random.cat/meow");
  XHR.send();
});