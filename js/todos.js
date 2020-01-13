console.log(" todo.js connected");
//Check off specific Todos By Clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});
//click on X to delete todo
$("ul").on("click", "span", function(event) {
    $(this)
        .parent()
        .fadeOut(550, function() {
            $(this).remove();
        });
    event.stopPropagation();
});
$("input[type = 'text']").keypress(function(event) {
    if (event.which === 13) {
        //grabbing new todo text from input
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append(
            "<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>"
        );
    }
});
$("#toggle-form").click(function() {
    $("input[type='text']").fadeToggle(550);
});