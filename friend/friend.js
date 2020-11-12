// author by removef
// https://removeif.github.io/
$(function () { //获取处理友链数据
    $.getJSON("../friend/friend.json", function (data) {
        $('.links-content').html("");
        $.each(data, function (i, e) {
            var html = "<div class=\"friend-card-item\">";
            if (e.src == undefined) {
                html += "    <img class=\"ava\" src=\"/friend/default.jpg\" title=\"图片链接不可用，使用的默认图片\">";
            } else {
                html += "    <img class=\"ava\" src=\"" + e.src + "\">";
            }
            html +=
                "<div class='text-desc' title=\""+e.desc+"\">" +
                "名称：" + e.name + "<br>" +
                "地址：<a href=\"" + e.url + "\" target=\"_blank\">" + e.url + "</a><br>" +
                "简介：" + e.desc + "</div>" +
                "</div>";

            $('.links-content').append(html);
        });
        $('.links-content').append("</div>");
    })
});
