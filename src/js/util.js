/*exported nvl, fixLen, getUserAgent */

/*
 * Some date functions
 */
Date.prototype.format = function(format) // author: meizz
{
  var monName = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
  var dayName = [ "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat" ];
  var o = {
    "M+" : this.getMonth() + 1, // month
    "d+" : this.getDate(), // day
    "h+" : this.getHours(), // hour
    "i+" : this.getHours() + 1, // hour + 1
    "m+" : this.getMinutes(), // minute
    "s+" : this.getSeconds(), // second
    "q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
    "S" : this.getMilliseconds()
  // millisecond
  };

  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  for ( var k in o) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
    }
  }
  if (/(N+)/.test(format)) {
    format = format.replace(RegExp.$1, monName[this.getMonth()]);
  }
  if (/(W+)/.test(format)) {
    format = format.replace(RegExp.$1, dayName[this.getDay()]);
  }
  return format;
};

/*
 * Add minutes to date
 */
Date.prototype.addMinutes = function(minutes) {
  var copiedDate = new Date(this.getTime());
  return new Date(copiedDate.getTime() + minutes * 60000);
};

/*
 * Protection against nulls
 */
function nvl(field, defval) {
  return field === null || field === "null" || typeof field === "undefined" ? defval : field;
}

/*
 * Fix a string to 2 characters long prefixing a zero
 */
function fixLen(inStr) {
  if (inStr === null || inStr.length > 1)
    return inStr;
  return "0" + inStr;
}

/*
 * Work out user agent
 */
function getUserAgent() {
  if (typeof navigator === "undefined" || typeof navigator.userAgent === "undefined") {
    return "unknown";
  } else {
    return (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i)) ? "iOS" : "Android";
  }
}