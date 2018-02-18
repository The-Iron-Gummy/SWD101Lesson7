function changed() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("moreInfo").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "moreINFO.txt", true);
    xhttp.send();
  }