#target "indesign 7.0"
#include "../index.jsx"
var p = new Pass("3.1.5");
if (!p.ass("~> 3.0")) {
  $.write("true");
}
