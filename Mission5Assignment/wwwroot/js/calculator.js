$(document).ready(function() {
    // Set charge per hour
    const rate = 50;

    $('#calculate').click(function() {
        // Get the number of hours entered by the user
        var hours = $('#hours').val();

        // Validate input - Ensure it's a positive number
        if (hours <= 0 || isNaN(hours)) {
            alert("Please enter a valid positive number of hours.");
            $('#total').val('');
            return;
        }

        // Calculate total cost
        var total = hours * rate;

        // Show the total in the output box
        $('#total').val('$' + total.toFixed(2));
    });
});
