import React, { useEffect } from "react";

const Plugins = ({ minutes, hours, days, seconds }) => {
  useEffect(() => {
    // window.jQuery = require("../../styles/vendor/jquery/jquery-3.2.1.min.js");
    window.Popper = require("../../styles/vendor/bootstrap/js/popper.js");
    window.Bootstrap = require("../../styles/vendor/bootstrap/js/bootstrap.min.js");
    window.Select2 = require("../../styles/vendor/select2/select2.min.js");
    // window.Moment = require("../../styles/vendor/countdowntime/moment.min.js");
    window.MomentTimezone = require("../../styles/vendor/countdowntime/moment-timezone.min.js");
    window.MomentTimezoneWithData = require("../../styles/vendor/countdowntime/moment-timezone-with-data.min.js");
    window.Countdowntime = require("../../styles/vendor/countdowntime/countdowntime.js");

    window.jQuery(".cd100").countdown100({
      /*Set Endtime here*/
      /*Endtime must be > current time*/
      endtimeYear: 0,
      endtimeMonth: 0,
      endtimeDate: days || 28,
      endtimeHours: hours || 9,
      endtimeMinutes: minutes || 0,
      endtimeSeconds: seconds || 0,
      timeZone: "",
      // ex:  timeZone: "America/New_York"
      //go to " http://momentjs.com/timezone/ " to get timezone
    });

    window.Countdowntime = require("../../styles/vendor/tilt/tilt.jquery.min.js");

    window.jQuery(".js-tilt").tilt({
      scale: 1.1,
    });

    (function ($) {
      "use strict";

      $(".js-tilt").tilt({
        scale: 1.1,
      });
      /*==================================================================
    [ Validate ]*/
      var input = $(".validate-input .input100", ".validate-input .PhoneInputInput");

      $(".validate-form").on("submit", function () {
        var check = true;

        for (var i = 0; i < input.length; i++) {
          if (validate(input[i]) == false) {
            showValidate(input[i]);
            check = false;
          }
        }

        return check;
      });

      $(".validate-form .input100", ".validate-form .PhoneInputInput").each(function () {
        $(this).focus(function () {
          hideValidate(this);
        });
      });

      function validate(input) {
        if (
          $(input).attr("type") == "email" ||
          $(input).attr("name") == "email"
        ) {
          if (
            $(input)
              .val()
              .trim()
              .match(
                /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/
              ) == null
          ) {
            return false;
          }
        } else {
          if ($(input).val().trim() == "") {
            return false;
          }
        }
      }

      function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass("alert-validate");
      }

      function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass("alert-validate");
      }
    })(jQuery || window.jQuery);
  }, [days, hours, minutes, seconds]);

  return <div />;
};

export default Plugins;
