#target "indesign 9.0"
#include "../index.jsx"
var p = new Pass("3.1.5");
if (p.ass("~> 3.1.4")) {
  $.write("true");
}

