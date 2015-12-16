/*exported mConst */

/*
 * Constants
 */
function mConst() {
  var urlPrefix = "http://faweiz.github.io/PebbYun/";
  return {
    limit : 60,
    divisor : 600000,
    url : urlPrefix + "index",
    versionDef : "0",
    lowestVersion : 1,
    ctrlVersionDone : 1,
    ctrlGotRequest : 2,
    ctrlRequestOK : 4,
    ctrlRequestFail : 8,
    timeout : 4000,
    urlNotReady : urlPrefix + "not_ready.html",
    makerPrefix : "https://maker.ifttt.com/trigger/",
    makerSuffix : "/with/key/"
  };
}
