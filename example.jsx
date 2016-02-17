#include "./index.jsx"

(function () {
  // set script version
  var p = new Pass("3.1.5");
    
  if (p.ass("~> 3.0")) {
    // this function remove in 3.1
    alert("not run.");
  }
  
  if (p.ass(">= 2.0.5")) {
    alert("do anything.");
  }
  if (p.ass("~> 3.1")) {
    alert("do something.");
  }

  if (p.ass("~> 3.1.6")) {
    // not yet run this function
    alert("not run.");
  }

  if (p.ass(">= 2.0") && p.ass("< 4.0")) {
    // not yet run this function
    alert("do anything in v2, v3.");
  }
  if (p.ass("> 4.0")) {
    // not yet run this function
    alert("not run yet.");
  }
})()