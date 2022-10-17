function sendGetRequest(url, responseHandler) {
  var request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    handleResponse(request, responseHandler);
  };
  request.open("GET", url);
  request.send(null);
}

function handleResponse(request, responseHandler) {
  if (request.readyState == 4 && request.status == 200) {
    console.log(request);
    responseHandler(request);
  }
}

document.addEventListener("DOMContentLoaded",
  function (event) {
    document.querySelector("button").addEventListener("click", function () {
      sendGetRequest("/test_js/data/data.txt", function (request) {
        document.querySelector("#content").innerHTML = "<h2>" + request.responseText + "</h2>";
      });
    });
  }
);