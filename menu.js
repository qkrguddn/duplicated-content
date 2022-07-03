$(document).ready(() => {
    var menuOrigin = [];
    var mn = $(".menuClass");
    for (var i = 0; i < mn.length; i++) {
        menuOrigin[i] = $(mn[i]).attr("menuName");
    }
    for (var i = 0; i < menuOrigin.length; i++) {
        $("#menuAppend").append("<li><a id=" + "menu" + menuOrigin[i] + " href=\"#\">" + menuOrigin[i] + "</a></li>");
    }
    $('#menuHome').click(() => {
        $('#pageHome').show(); $('#pagePublication').hide(); $('#pageMember').hide(); $('#pageContents').hide();
        $('#menuHome').addClass('menuSelected'); $("#menu" + menuOrigin[0]).removeClass('menuSelected');
        $("#menu" + menuOrigin[1]).removeClass('menuSelected'); $("#menu" + menuOrigin[2]).removeClass('menuSelected');
    });
    $("#menu" + menuOrigin[0]).click(() => {
        $('#pageHome').hide(); $('#pagePublication').show(); $('#pageMember').hide(); $('#pageContents').hide();
        $('#menuHome').removeClass('menuSelected'); $("#menu" + menuOrigin[0]).addClass('menuSelected');
        $("#menu" + menuOrigin[1]).removeClass('menuSelected'); $("#menu" + menuOrigin[2]).removeClass('menuSelected');
    });
    $("#menu" + menuOrigin[1]).click(() => {
        $('#pageHome').hide(); $('#pagePublication').hide(); $('#pageMember').show(); $('#pageContents').hide();
        $('#menuHome').removeClass('menuSelected'); $("#menu" + menuOrigin[0]).removeClass('menuSelected');
        $("#menu" + menuOrigin[1]).addClass('menuSelected'); $("#menu" + menuOrigin[2]).removeClass('menuSelected');
    });
    $("#menu" + menuOrigin[2]).click(() => {
        $('#pageHome').hide(); $('#pagePublication').hide(); $('#pageMember').hide(); $('#pageContents').show();
        $('#menuHome').removeClass('menuSelected'); $("#menu" + menuOrigin[0]).removeClass('menuSelected');
        $("#menu" + menuOrigin[1]).removeClass('menuSelected'); $("#menu" + menuOrigin[2]).addClass('menuSelected');
    });
});