//loader.js
if (typeof window !== "undefined") {
  // Client-side-only code

  window.$ = window.jQuery = require("jquery");
  window.moment = window.Moment = require("moment");
}
