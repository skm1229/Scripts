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
    "/product/detail/v1/basicInfo/dynamic/ts",
    "indexOf",
    "\"url\":\"https://t.me/+gcEcUFPzQ2g5NTg9",
    "replace",
    "\"isAuthorized\":true",
    "\"text\":\"暂无",
    "\"isFree\":true",
    "\"sampleDuration\":99999",
    "\"isSample\":true",
    "\"isPaid\":false",
    "\"vipPurchaseUrl\":\"https://t.me/+gcEcUFPzQ2g5NTg9",
    "\"vipPurchaseText\":\"暂无",
    "\"url\\\":\\\"https://t.me/+gcEcUFPzQ2g5NTg9\\",
    "\"buttonContent\\\":\\\"暂无\\",
    "userLogoPic\":\"",
    "userLevelIcon\":\"http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png",
    "subtitle\":\"2999-09-09年",
    "vipStatus\":2", "nickName\":\"", "parse", "action",
    "behaviors",
    "data",
    "https://t.me/+gcEcUFPzQ2g5NTg9",
    "vipPurchaseText",
    "暂无",
    "labelSubTitle",
    "暂无",
    "labelText",
    "暂无",
    "stringify",
    "nickname",
    "Skm_1229",
    "isVip",
    "vipExpireTime",
    "vipStatus",
    "vipLevel",
    "anchorVipInfo",
    "vipInfo",
    "level",
    "mobileLargeLogo",
    "",
    "mobileSmallLogo",
    "mobileMiddleLogo",
    "modules",
    "nickName",
    "msg",
    "暂无"];
var Body = $response[List[0]];
var Url = $request[List[1]];
const URI1 = List[2];
const URI2 = List[3];
const URI3 = List[4];
const URI4 = List[5];
const URI5 = List[6];
const URI6 = List[7];
const URI7 = List[8];
const URI8 = List[9];
const URI9 = List[10];
Url[List[11]](URI1) != -1 && (Body = Body[List[13]](/"sampleDuration":\d/g, List[17])[List[13]](/"isFree":\w+/g, List[16])[List[13]](/"text":"[^"]+/g, List[15])[List[13]](/"isAuthorized":\w+/g, List[14])[List[13]](/"url":"[^"]+/g, List[12]));
Url[List[11]](URI2) != -1 && (Body = Body[List[13]](/"isFree":\w+/g, List[16])[List[13]](/"isPaid":\w+/g, List[19])[List[13]](/"isSample":\w+/g, List[14])[List[13]](/"isAuthorized":\w+/g, List[18]));
Url[List[11]](URI8) != -1 && (Body = Body[List[13]](/"isFree":\w+/g, List[16])[List[13]](/"isPaid":\w+/g, List[19])[List[13]](/"isSample":\w+/g, List[14])[List[13]](/"isSample":\w+/g, List[18])[List[13]](/"vipPurchaseText":"[^"]+/g, List[21])[List[13]](/"vipPurchaseUrl":"[^"]+/g, List[20]));
Url[List[11]](URI9) != -1 && (Body = Body[List[13]](/"buttonContent\\":\\"[^"]+/g, List[23])[List[13]](/"url\\":\\"[^"]+/g, List[22])[List[13]](/"isFree":\w+/g, List[16])[List[13]](/"isPaid":\w+/g, List[19])[List[13]](/"isSample":\w+/g, List[14])[List[13]](/"isSample":\w+/g, List[18]));
Url[List[11]](URI3) != -1 && (Body = Body[List[13]](/nickName":"[^"]+/g, List[28])[List[13]](/vipStatus":\d/g, List[27])[List[13]](/subtitle":"[^"]+/g, List[26])[List[13]](/userLevelIcon":"[^"]+/g, List[25])[List[13]](/userLogoPic":"[^"]+/g, List[24]));

var User = JSON[List[29]](Body);

if (Url[List[11]](URI4) != -1) {
    User[List[32]][List[31]][0][List[30]][List[1]] = List[33];
    User[List[32]][List[31]][0][List[34]] = List[35];
    User[List[32]][List[31]][0][List[36]] = List[37];
    User[List[32]][List[31]][0][List[38]] = List[39];
    Body = JSON[List[40]](User);
}

if (Url[List[11]](URI5) != -1) {
 
    User[List[32]][List[41]] = List[42];
    User[List[32]][List[43]] = true;
    User[List[32]][List[44]] = 32493834549000;
    User[List[32]][List[45]] = 2;
    User[List[32]][List[46]] = 5;
    User[List[32]][List[47]][List[43]] = true;
    User[List[32]][List[48]][List[43]] = true;
    User[List[32]][List[48]][List[49]] = 5;
    User[List[32]][List[50]] = List[51];
    User[List[32]][List[52]] = List[51];
    User[List[32]][List[53]] = List[51];
    Body = JSON[List[40]](User);
}

Url[List[11]](URI6) != -1 && (delete User[List[32]][List[54]], User[List[32]][List[45]] = 2, User[List[32]][List[55]] = List[42], Body = JSON[List[40]](User));
Url[List[11]](URI7) != -1 && (User[List[56]] = List[57], Body = JSON[List[40]](User));
const Json_body = {
    "body": Body
};
$done(Json_body);
