Pass = this.Pass = function (script_version) {
  this.SCRIPT_VERSION = script_version;
}

Pass.prototype.pass = 
Pass.prototype.ass = function (version) {
  var script_version = this.SCRIPT_VERSION.split(".");
  var target_version = version.split(/[ .]/);

  if (target_version[0].match(/\d/)) {
    return this.SCRIPT_VERSION == version
  }
  else {
    var SCPT_MAJOR = script_version[0] * 1;
    var SCPT_MINOR = script_version[1] * 1;
    var SCPT_PATCH = script_version[2] == null ? 0 : script_version[2] * 1;
    var OPE = target_version[0];
    var TARG_MAJOR = target_version[1] * 1;
    var TARG_MINOR = target_version[2] * 1;
    var TARG_PATCH = target_version[3] == null ? 0 : target_version[3] * 1;
  
    if (OPE == "~>") {
      return SCPT_MAJOR == TARG_MAJOR && SCPT_MINOR == TARG_MINOR && SCPT_PATCH >= TARG_PATCH
    }
    else if (OPE == ">=") {
      if (SCPT_MAJOR > TARG_MAJOR) {
        return true
      }
      else if (SCPT_MAJOR == TARG_MAJOR) {
        if (SCPT_MINOR == TARG_MINOR) {
          return SCPT_PATCH >= TARG_PATCH
        }
        else {
          return SCPT_MINOR > TARG_MINOR
        }
      }
      else {
        return false
      }
    }
    else if (OPE == "<") {
      if (SCPT_MAJOR < TARG_MAJOR) {
        return true
      }
      else if (SCPT_MAJOR == TARG_MAJOR) {
        if (SCPT_MINOR == TARG_MINOR) {
          return SCPT_PATCH < TARG_PATCH
        }
        else {
          return SCPT_MINOR < TARG_MINOR
        }
      }
      else {
        return false
      }
    }
  }
};
