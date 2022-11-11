  function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      myFunction(this);
    }
    xhttp.open("GET", "videojuegos.xml");
    xhttp.send();
  }
  function myFunction(xml) {
    const xmlDoc = xml.responseXML;
    const x = xmlDoc.getElementsByTagName("VIDEOJUEGO");
    let table="<tr><th>TITLE</th><th>AGE</th>><th>DISTRIBUTOR</th><th>DEVELOPER</th><th>PRICE</th></tr>";
    for (let i = 0; i <x.length; i++) { 
      table += "<tr><td>" +
      x[i].getElementsByTagName("TITLE")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("AGE")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("DISTRIBUTOR")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("DEVELOPER")[0].childNodes[0].nodeValue +
      "</td><td>" +
      x[i].getElementsByTagName("PRICE")[0].childNodes[0].nodeValue +
      "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
  }