import React, { useEffect } from "react";

const HomePlugins = () => {
  useEffect(() => {
    // Expected script for home page
    {/* <Script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.bundle.min.js"></Script>
        <Script src="../styles/lib/easing/easing.min.js"></Script>
        <Script src="../styles/lib/owlcarousel/owl.carousel.min.js"></Script>
        <Script src="../styles/lib/tempusdominus/js/moment.min.js"></Script>
        <Script src="../styles/lib/tempusdominus/js/moment-timezone.min.js"></Script>
        <Script src="../styles/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></Script> */}


    window.jQuery = require("../../styles/vendor/jquery/jquery-3.2.1.min.js");
    window.Popper = require("../../styles/vendor/bootstrap/js/popper.js");
    window.Bootstrap = require("../../styles/vendor/bootstrap/js/bootstrap.min.js");
    window.Select2 = require("../../styles/vendor/select2/select2.min.js");
    // window.Moment = require("../../styles/lib/tempusdominus/js/moment.min.js");
    window.MomentTimezone = require("../../styles/lib/tempusdominus/js/moment-timezone.min.js");
    // window.Bootstrap4 = require("../../styles/lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js");
    window.Easing = require("../../styles/lib/easing/easing.min.js")
    window.OwlCarousel = require("../../styles/lib/owlcarousel/owl.carousel.min.js")


    // Testimonials carousel
    window.jQuery(".testimonial-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      margin: 30,
      dots: true,
      loop: true,
      center: true,
      responsive: {
        0: {
          items: 1
        },
        576: {
          items: 1
        },
        768: {
          items: 2
        },
        992: {
          items: 3
        },
        1300: {
          items: 5
        }
      }
    });

    (function ($) {
      "use strict";

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
  }, []);

  return <div />;
};

export default HomePlugins;
