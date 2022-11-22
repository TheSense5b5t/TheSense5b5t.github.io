/*
MOTD JavaScript file: Sets the MOTD on all pages dynamically.
By AlphaGameDeveloper (GitHub/AlphaGameDeveloper)
*/
(function(){console.log("Loading motd.js...");})();
var motd__motd_text = "Test :)";

var motd(id) { // Main function for the MOTD.  ARGS: motd element ID. (<element id="...">)
  const e = document.getElementById(id);
  e.innerHTML = motd__motd_text;
  return;
}
(function(){console.log("Done loading motd.js.");})();
