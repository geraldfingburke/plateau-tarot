function draw() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      const results = JSON.parse(this.responseText);
    }
  };
  xhttp.open("GET", "https://indiealchemy.com/plateautarot/api", true);
  xhttp.send();
}

// User selects the spread they want
// Every display besides the desired spread is deactivated
// The cards animate to their positions


$(document).ready(function() {
  $("#3-card-spread").hide();
  $("#star-spread").hide();
  $("#decision-spread").hide();
  $("#single-card").hide();
});

function selectSpread(spread) {
  $("#menu").hide();
  switch(spread) {
    case "single":
      $("#3-card-spread").hide();
      $("#star-spread").hide();
      $("#decision-spread").hide();
      $("#single-card").show();
      break;
    case "3 card":
      $("#single-card").hide();
      $("#star-spread").hide();
      $("#decision-spread").hide();
      $("#3-card-spread").show();
      break;
    case "star":
      $("#3-card-spread").hide();
      $("#decision-spread").hide();
      $("#single-card").hide();
      $("#star-spread").show();
      break;
    case "decision":
      $("#single-card").hide();
      $("#3-card-spread").hide();
      $("#star-spread").hide();
      $("#decision-spread").show();
      break;
  }
}
