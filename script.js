window.onload = function () {
  var httpRequest;
  document.getElementById("searchbttn").onclick = function() {
    displayresult("Result");
    var q = document.getElementById("searching").value;
    makeRequest(('request.php?q='+q)); 
    
  };
  
  function makeRequest(url) {
    httpRequest = new XMLHttpRequest();

    if (!httpRequest) {
      alert('Giving up :( Cannot create an XMLHTTP instance');
      return false;
    }
    
    httpRequest.onreadystatechange = alertContents;
    httpRequest.open('GET', url);
    httpRequest.send();
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status === 200) {
        document.getElementById("result").innerHTML = httpRequest.responseText;
      } 
      else {
        document.getElementById("result").innerHTML = ('There was a problem with the request.');
        
      }
    }
  }
  
  function displayresult(result){
    document.getElementById("r-head").innerHTML = result;
  }
  
}