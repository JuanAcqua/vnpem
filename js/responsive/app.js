var $select = $("<select></select>");
$("#menu").append($select);
var $homeOption = $("<option></option>");
$homeOption.val("/");
$homeOption.text("Home");
$select.append($homeOption);

$("#menu a").each(function(){
    var $anchor = $(this);
    var $option = $("<option></option>");

    if($anchor.parent().hasClass("selected")) {
        $option.prop("selected", true);
    }

    $option.val($anchor.attr("href"));

    $option.text($anchor.text());

    $select.append($option);
});

$select.change(function(){
    window.parent.location = $select.val();
});
