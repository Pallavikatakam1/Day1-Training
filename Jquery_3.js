$(document).ready(function () {
    $("#modify").click(function () {
        $("#myList li:eq(2)").text("Pooji");
    });
 
    $("#clone").click(function () {
        $("#container p").first().clone().appendTo("#container");
    });
 
    $("#findParent").click(function () {
        $("#child").parent().css("border", "10px solid red");
    });
 
    $("#findChildren").click(function () {
        $("#parentDiv").children().css("color", "Blue");
    });
 
    $("#addItem").click(function () {
        $("#dynamicList").append("<li>New Item</li>");
    });
 
    $("#removeItem").click(function () {
        $("#dynamicList li:last").remove();
    });
 
    $("#highlight").click(function () {
        $("#myTable tr:odd").css("background-color", "orange");
        $("#myTable tr:even").css("background-color", "lightgreen");
    });
});