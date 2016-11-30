var text = null;
var end = null;
function getQueryParams(qs) {
    qs = qs.split('+').join(' ');

    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

loop = function(){
  var now = new Date();
  var diff =   end- now;
  if (diff < 0) {
    text.html("YOU SURVIVED THE HACKATON!");
  } else {

  text.html(Math.floor(diff/86400000) + " Days " + Math.floor((diff%86400000)/3600000) + " Hours " + Math.floor((diff%3600000)/60000) + " minutes " + Math.floor((diff%60000)/1000) + " seconds") ;
}
}
$(document).ready(function(){
  text = $(".text");
  end = new Date(getQueryParams(document.location.search).date);

  setInterval(loop,100);
});
