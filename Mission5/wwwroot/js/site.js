// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(document).ready(function () {
    $('#calculatorForm').on('submit', function (e) {
        e.preventDefault();
        var hours = $('#hours').val();
        var rate = $('#rate').val();

        // Check if the hours entered is a positive number
        if (hours <= 0) {
            alert("Please enter a positive number for hours.");
            return;
        }
        else {
            var total = hours * rate;
            $('#total').val(total);
        }
    });
});
