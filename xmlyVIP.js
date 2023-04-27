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
^http[s]?:\/\/((.+ximalaya.+)|(.+xmcdn.+)).*\/(playpage\/tabs\/v2|v1\/album\/track\/ts|v1\/album\/price|v2\/homePage|business-vip-presale-mobile-web\/page\/ts|vip\/v1\/recommand|track\/v3\/baseInfo|v1\/module\/"data"\/dynamic|basicInfo\/dynamic\/ts).*$ url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/xmlyVIP.js


[mitm]

hostname = 180.153.*.*,*xima*,*xmcdn*,*.ximalaya.com,*.xmcdn.com,180.153.255.*,180.153.140.*,180.153.250.*,114.80.99.*,114.80.139.237,114.80.161.29,1.62.62.64,51*.com

************************/

var List = ["body", "url",
    "/mobile-playpage/playpage/tabs",
    "v1/album/track/ts",
    "business-vip-presale-mobile-web/page/ts",
    "/product/promotion/v1/album/price/ts",
    "mobile-user/v2/homePage/",
    "vip/v1/recommand",
    "/track/v3/baseInfo",
    "/product/detail/v1/module/data/dynamic",
    "/product/detail/v1/basicInfo/dynamic/ts"];
var Body = $response["body"];
var Url = $request["url"];
const URI1 = List[2];
const URI2 = List[3];
const URI3 = List[4];
const URI4 = List[5];
const URI5 = List[6];
const URI6 = List[7];
const URI7 = List[8];
const URI8 = List[9];
const URI9 = List[10];
Url["indexOf"](URI1) != -1 && (Body = Body[replace](/"sampleDuration":\d/g, "\"sampleDuration\":99999")[replace](/"isFree":\w+/g, "\"isFree\":true")[replace](/"text":"[^"]+/g, "\"text\":\"SVIP通道",)[replace](/"isAuthorized":\w+/g, "\"isAuthorized\":true")[replace](/"url":"[^"]+/g, "\"url\":\"https://t.me/+gcEcUFPzQ2g5NTg9"));
Url["indexOf"](URI2) != -1 && (Body = Body[replace](/"isFree":\w+/g, "\"isFree\":true")[replace](/"isPaid":\w+/g, "\"isPaid\":false")[replace](/"isSample":\w+/g, "\"isAuthorized\":true")[replace](/"isAuthorized":\w+/g, "\"isSample\":true"));
Url["indexOf"](URI8) != -1 && (Body = Body[replace](/"isFree":\w+/g, "\"isFree\":true")[replace](/"isPaid":\w+/g, "\"isPaid\":false")[replace](/"isSample":\w+/g, "\"isAuthorized\":true")[replace](/"isSample":\w+/g, "\"isSample\":true")[replace](/"vipPurchaseText":"[^"]+/g, "\"vipPurchaseText\":\"暂无")[replace](/"vipPurchaseUrl":"[^"]+/g, "\"vipPurchaseUrl\":\"https://t.me/+gcEcUFPzQ2g5NTg9"));
Url["indexOf"](URI9) != -1 && (Body = Body[replace](/"buttonContent\\":\\"[^"]+/g, "\"buttonContent\\\":\\\"点击跳转\\")[replace](/"url\\":\\"[^"]+/g, "\"url\\\":\\\"https://t.me/+gcEcUFPzQ2g5NTg9\\")[replace](/"isFree":\w+/g, "\"isFree\":true")[replace](/"isPaid":\w+/g, "\"isPaid\":false")[replace](/"isSample":\w+/g, "\"isAuthorized\":true")[replace](/"isSample":\w+/g, "\"isSample\":true"));
Url["indexOf"](URI3) != -1 && (Body = Body[replace](/nickName":"[^"]+/g, "nickName\":\"三坊七巷")[replace](/vipStatus":\d/g, "vipStatus\":2")[replace](/subtitle":"[^"]+/g, "subtitle\":\"2999-09-09年")[replace](/userLevelIcon":"[^"]+/g, "userLevelIcon\":\"http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png")[replace](/userLogoPic":"[^"]+/g, "userLogoPic\":\""));

var User = JSON[parse](Body);

if (Url[indexOf](URI4) != -1) {
    User["data"]["behaviors"][0]["action"][url] = "https://t.me/+gcEcUFPzQ2g5NTg9";
    User["data"]["behaviors"][0]["vipPurchaseText"] = "暂无更多详细信息";
    User["data"]["behaviors"][0]["labelSubTitle"] = "暂无更多详细信息";
    User["data"]["behaviors"][0]["labelText"] = "暂无更多详细信息";
    Body = JSON[stringify](User);
}

if (Url["indexOf"](URI5) != -1) {
    User["data"]["nickname"] = "三坊七巷";
    User["data"]["isVip"] = true;
    User["data"]["vipExpireTime"] = 32493834549000;
    User["data"]["vipStatus"] = 2;
    User["data"]["vipLevel"] = 5;
    User["data"]["anchorVipInfo"]["isVip"] = true;
    User["data"]["vipInfo"]["isVip"] = true;
    User["data"]["vipInfo"]["level"] = 5;
    User["data"]["mobileLargeLogo"] = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";
    User["data"]["mobileSmallLogo"] = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";
    User["data"]["mobileMiddleLogo"] = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";
    Body = JSON["stringify"](User);
}

Url["indexOf"](URI6) != -1 && (delete User["data"]["modules"], User["data"]["vipStatus"] = 2, User["data"]["nickName"] = "三坊七巷", Body = JSON["stringify"](User));
Url["indexOf"](URI7) != -1 && (User["msg"] = "暂无更多详细信息", Body = JSON["stringify"](User));
const Json_body = {
    "body": Body
};
$done(Json_body);
