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
    document.querySelector("#ajax_text").addEventListener("click", function () {
      sendGetRequest("/test_js/data/data.txt", function (request) {
        document.querySelector("#content_ajax_text").innerHTML = "<h2>" + request.responseText + "</h2>";
      });
    });
  }
);

document.addEventListener("DOMContentLoaded",
  function (event) {
    document.querySelector("#ajax_json").addEventListener("click", function () {
      sendGetRequest("/test_js/data/data.json", function (request) {
        document.querySelector("#content_ajax_json").innerHTML = "<h2>" + JSON.parse(request.responseText)["a"] + "</h2>";
      });
    });
  }
);