/*
Event handling on index
*/

const burgerInput = $("#burger_name");

$(document).ready(function() {
    // Validate and submit new burger
    $("#form").submit(function(event) {
        event.preventDefault();

        let burger_name = burgerInput.val();
        if (burger_name) {
            $.ajax({
                url: "/api/burgers",
                method: "post",
                data: { burger_name: burger_name }
            })
                .then(() => location.reload());
        }
    });

    // Devour a burger
    $(".devour-btn").click(function(event) {

    });
});
