$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var devoured = $(this).data("devoured");

        var newDevoured = {
            devoured: devoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevoured
        }).then(
            function () {
                console.log("changed devoured to", devoured);
                location.reload();
            }
        );
    });
    $(".create-form").on("submit", function (event) {
        event.preventDefault();
        var newBurger = {
            burgerName: $("#ca").val().trim(),
            devoured: false
        };
        console.log(newBurger.burgerName)
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                location.reload();
            }
        );
    });
});