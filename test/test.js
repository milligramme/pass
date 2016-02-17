var fs      = require("fs");
var path    = require("path");
var test    = require("tape");
var fakestk = require("fakestk");


var estktest = function (t, file) {
  fakestk.run(file, function (err, res) {
    if (err) {
      console.error(err);
    }
    t.equal(res, 'true');
    t.end();
  })
}

test("3.1.5 should pass 3.1.5", function (t) {
  file = path.join(__dirname, "/equal-1.jsx")
  estktest(t, file)
});
test("3.0.2 should not pass 3.1.5", function (t) {
  file = path.join(__dirname, "/equal-2.jsx")
  estktest(t, file)
});

test("~> 3.1 should pass 3.1.5", function (t) {
  file = path.join(__dirname, "/before_next_minor-1.jsx")
  estktest(t, file)
});
test("~> 3.1.4 should pass 3.1.5", function (t) {
  file = path.join(__dirname, "/before_next_minor-2.jsx")
  estktest(t, file)
});
test("~> 3.1.6 should not pass 3.1.5", function (t) {
  file = path.join(__dirname, "/before_next_minor-3.jsx")
  estktest(t, file)
});
test("~> 3.0 should not pass 3.1.5", function (t) {
  file = path.join(__dirname, "/before_next_minor-4.jsx")
  estktest(t, file)
});
test("~> 2.9 should not pass 3.1.5", function (t) {
  file = path.join(__dirname, "/before_next_minor-5.jsx")
  estktest(t, file)
});

test(">= 2.9.1 should pass 3.1.5", function (t) {
  file = path.join(__dirname, "/newer_version-1.jsx")
  estktest(t, file)
});
test(">= 2.9 should pass 3.1.5", function (t) {
  file = path.join(__dirname, "/newer_version-2.jsx")
  estktest(t, file)
});
test(">= 3.0 should pass 3.1.5", function (t) {
  file = path.join(__dirname, "/newer_version-3.jsx")
  estktest(t, file)
});
test(">= 3.0.5 should pass 3.1.5", function (t) {
  file = path.join(__dirname, "/newer_version-4.jsx")
  estktest(t, file)
});
test(">= 3.1.7 should not pass 3.1.5", function (t) {
  file = path.join(__dirname, "/newer_version-5.jsx")
  estktest(t, file)
});
test(">= 4.0 should not pass 3.1.5", function (t) {
  file = path.join(__dirname, "/newer_version-6.jsx")
  estktest(t, file)
});

test("< 4.0 should pass 3.1.5", function (t) {
  file = path.join(__dirname, "/previous_version-1.jsx")
  estktest(t, file)
});
test("< 3.0 should not pass 3.1.5", function (t) {
  file = path.join(__dirname, "/previous_version-2.jsx")
  estktest(t, file)
});
test("< 3.5 should pass 3.1.5", function (t) {
  file = path.join(__dirname, "/previous_version-3.jsx")
  estktest(t, file)
});
test("< 2.5 should not pass 3.1.5", function (t) {
  file = path.join(__dirname, "/previous_version-4.jsx")
  estktest(t, file)
});
test("< 3.1.2 should not pass 3.1.5", function (t) {
  file = path.join(__dirname, "/previous_version-2.jsx")
  estktest(t, file)
});
