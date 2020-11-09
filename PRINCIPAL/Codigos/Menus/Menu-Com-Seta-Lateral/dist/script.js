const days = [
  "NUMBER 0 NEVER TO BE SEEN",
  88, //(Mercury) #scroll-tab-1 .age
  225,
  1,
  687,
  4307,
  10731,
  30660,
  59860
];

function addCommas(t) {
  return String(t).replace(/(\d)(?=(\d{3})+$)/g, "$1,");
}

$("#calc").click(function () {
  var yr = $("#age-input").val();
  for (var i = 1; i < 10; i++) {
    var ageDy = (yr * 365) / days[i];
    var ageYr = Math.floor(ageDy / 365);
    $("#scroll-tab-" + i + " .age").html(" " + addCommas(ageYr));
  }
});