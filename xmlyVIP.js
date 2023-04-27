/***************************************

function：喜马拉雅 解锁会员+去部分广告
author:   Skm_1229

**************************************

[rewrite_local]

^http[s]?:\/\/openapi\.mysteel\.com/v5/getAdv.htm url reject
^http[s]?.+ulogs.umeng.com url reject
^http[s]?.+gslbali.ximalaya.com url reject
^http[s]?.+adse.ximalaya.com url reject
^http[s]?.+gslbtx.ximalaya.com url reject
^http[s]?.+location.ximalaya.com url reject
^http[s]?.+passport.ximalaya.com url reject
^http[s]?.+adbehavior.ximalaya.com url reject
^http[s]?.+ad.ximalaya.com url reject
^http[s]?.+audid-api.taobao.com url reject
^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+))\/mobile-playpage\/track\/v3\/baseInfo\/ts url script-request-header https://raw.githubusercontent.com/skm1229/Scripts/main/xmlyToken.js
^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+)).*\/(playpage\/tabs\/v2|v1\/album\/track\/ts|v1\/album\/price|v2\/homePage|business-vip-presale-mobile-web\/page\/ts|vip\/v1\/recommand|track\/v3\/baseInfo|v1\/module\/data\/dynamic|basicInfo\/dynamic\/ts).*$ url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/xmlyVIP.js


[mitm]

hostname = 180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com

***********************************/
var Body = $response["body"];
var Url = $request["url"];
const URI1 = "/mobile-playpage/playpage/tabs";
const URI2 = "v1/album/track/ts";
const URI3 = "business-vip-presale-mobile-web/page/ts";
const URI4 = "/product/promotion/v1/album/price/ts";
const URI5 = "mobile-user/v2/homePage/";
const URI6 = "vip/v1/recommand";
const URI7 = "/track/v3/baseInfo";
const URI8 = "/product/detail/v1/module/data/dynamic";
const URI9 = "/product/detail/v1/basicInfo/dynamic/ts";

Url["indexOf"](URI1) != -1 && (Body = Body["replace"](/"sampleDuration":\d/g, "\"sampleDuration\":99999")["replace"](/"isFree":\w+/g, "\"isFree\":true")["replace"](/"text":"[^"]+/g, "\"text\":\"QAQ")["replace"](/"isAuthorized":\w+/g, "\"isAuthorized\":true")["replace"](/"url":"[^"]+/g, "\"url\":\"https://github.com/skm1229/Scripts"));
Url["indexOf"](URI2) != -1 && (Body = Body["replace"](/"isFree":\w+/g, "\"isFree\":true")["replace"](/"isPaid":\w+/g, "\"isPaid\":false")["replace"](/"isSample":\w+/g, "\"isAuthorized\":true")["replace"](/"isAuthorized":\w+/g, "\"isSample\":true"));
Url["indexOf"](URI8) != -1 && (Body = Body["replace"](/"isFree":\w+/g, "\"isFree\":true")["replace"](/"isPaid":\w+/g, "\"isPaid\":false")["replace"](/"isSample":\w+/g, "\"isAuthorized\":true")["replace"](/"isSample":\w+/g, "\"isSample\":true")["replace"](/"vipPurchaseText":"[^"]+/g, "\"vipPurchaseText\":\"查看作者GitHub")["replace"](/"vipPurchaseUrl":"[^"]+/g, "\"vipPurchaseUrl\":\"https://github.com/skm1229/Scripts"));
Url["indexOf"](URI9) != -1 && (Body = Body["replace"](/"buttonContent\\":\\"[^"]+/g, "\"buttonContent\\\":\\\"关注作者GitHub\\")["replace"](/"url\\":\\"[^"]+/g, "\"url\\\":\\\"https://github.com/skm1229/Scripts\\")["replace"](/"isFree":\w+/g, "\"isFree\":true")["replace"](/"isPaid":\w+/g, "\"isPaid\":false")["replace"](/"isSample":\w+/g, "\"isAuthorized\":true")["replace"](/"isSample":\w+/g, "\"isSample\":true"));
Url["indexOf"](URI3) != -1 && (Body = Body["replace"](/nickName":"[^"]+/g, "nickName\":\"三坊七巷")["replace"](/vipStatus":\d/g, "vipStatus\":2")["replace"](/subtitle":"[^"]+/g, "subtitle\":\"")["replace"](/userLevelIcon":"[^"]+/g, "userLevelIcon\":\"http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png")["replace"](/userLogoPic":"[^"]+/g, "userLogoPic\":\""));

var UserBody = JSON["parse"](Body);

if (Url["indexOf"](URI4) != -1) {
    const _0x4a0323 = "2|4|0|1|3"["split"]("|");

    let _0x2d827e = 0;
    UserBody["data"]["behaviors"][0]["action"]["url"] = "https://github.com/skm1229/Scripts";
    UserBody["data"]["behaviors"][0]["vipPurchaseText"] = "查看作者GitHub";
    UserBody["data"]["behaviors"][0]["labelSubTitle"] = "暂无更多信息";
    UserBody["data"]["behaviors"][0]["labelText"] = "QAQ";
    Body = JSON["stringify"](UserBody);
}

if (Url["indexOf"](URI5) != -1) {
    const _0x4573f8 = "9|10|1|11|2|3|6|7|0|8|4|5"["split"]("|");

    let _0x366a73 = 0;
    UserBody["data"]["nickname"] = "三坊七巷";
    UserBody["data"]["isVip"] = true;
    UserBody["data"]["vipExpireTime"] = 32493834549000;
    UserBody["data"]["vipStatus"] = 2;
    UserBody["data"]["vipLevel"] = 5;
    UserBody["data"]["anchorVipInfo"]["isVip"] = true;
    UserBody["data"]["vipInfo"]["isVip"] = true;
    UserBody["data"]["vipInfo"]["level"] = 5;
    UserBody["data"]["mobileLargeLogo"] = "";
    UserBody["data"]["mobileSmallLogo"] = "";
    UserBody["data"]["mobileMiddleLogo"] = "";
    Body = JSON["stringify"](UserBody);
}

Url["indexOf"](URI6) != -1 && (delete UserBody["data"]["modules"], UserBody["data"]["vipStatus"] = 2, UserBody["data"]["nickName"] = "三坊七巷", Body = JSON["stringify"](UserBody));
Url["indexOf"](URI7) != -1 && (UserBody["msg"] = "nothing", Body = JSON["stringify"](UserBody));
const Json_body = {
    "body": Body
};
$done(Json_body);
