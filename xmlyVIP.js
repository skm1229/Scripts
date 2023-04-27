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
var List = ["body", "url", "/mobile-playpage/playpage/tabs", "v1/album/track/ts", "business-vip-presale-mobile-web/page/ts", "/product/promotion/v1/album/price/ts", "mobile-user/v2/homePage/", "vip/v1/recommand", "/track/v3/baseInfo", "/product/detail/v1/module/data/dynamic", "/product/detail/v1/basicInfo/dynamic/ts", "indexOf", "\"url\":\"https://t.me/WeiRenQAQ/163", "replace", "\"isAuthorized\":true", "\"text\":\"âï¸èæ¬ç±ä¼äººåè´¹æä¾!è¯·ç¹å»æ­¤å¤è·åææ°JSãå½åæ¯SVIP2çº¿è·¯â¤ï¸", "\"isFree\":true", "\"sampleDuration\":99999", "\"isSample\":true", "\"isPaid\":false", "\"vipPurchaseUrl\":\"https://t.me/WeiRenQAQ", "\"vipPurchaseText\":\"ç¹å»æ·»å ä½èTGé¢é", "\"url\\\":\\\"https://t.me/WeiRenQAQ\\", "\"buttonContent\\\":\\\"â¤ï¸â¤ï¸ç¹å»æ·»å ä½èTGé¢éâ¤ï¸â¤ï¸\\", "userLogoPic\":\"https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg", "userLevelIcon\":\"http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png", "subtitle\":\"2999-09-09åè´¹æä¾ç¦æ­¢è´©å", "vipStatus\":2", "nickName\":\"by~ä¼äºº", "parse", "action", "behaviors", "data", "https://t.me/WeiRenQAQ/163", "vipPurchaseText", "ç¹å»æ·»å ä½èTGé¢é", "labelSubTitle", "æ·»å é¢éè·åææ°èæ¬ç»§ç»­çå¬ï¼ð", "labelText", "è¯¥èæ¬å·²å¤±æ", "stringify", "nickname", "by~ä¼äºº", "isVip", "vipExpireTime", "vipStatus", "vipLevel", "anchorVipInfo", "vipInfo", "level", "mobileLargeLogo", "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg", "mobileSmallLogo", "mobileMiddleLogo", "modules", "nickName", "msg", "è¯¥èæ¬ä¸å¤©è¿è¡æ¬¡æ°è¿å¤ãè¯·ä½¿ç¨å«ççº¿è·¯æèéä¸å¤©åæ¥ð"];
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
Url["indexOf"](URI1) != -1 && (Body = Body["replace"](/"sampleDuration":\d/g, List[17])["replace"](/"isFree":\w+/g, List[16])["replace"](/"text":"[^"]+/g, List[15])["replace"](/"isAuthorized":\w+/g, List[14])["replace"](/"url":"[^"]+/g, List[12]));
Url["indexOf"](URI2) != -1 && (Body = Body["replace"](/"isFree":\w+/g, List[16])["replace"](/"isPaid":\w+/g, List[19])["replace"](/"isSample":\w+/g, List[14])["replace"](/"isAuthorized":\w+/g, List[18]));
Url["indexOf"](URI8) != -1 && (Body = Body["replace"](/"isFree":\w+/g, List[16])["replace"](/"isPaid":\w+/g, List[19])["replace"](/"isSample":\w+/g, List[14])["replace"](/"isSample":\w+/g, List[18])["replace"](/"vipPurchaseText":"[^"]+/g, List[21])["replace"](/"vipPurchaseUrl":"[^"]+/g, List[20]));
Url["indexOf"](URI9) != -1 && (Body = Body["replace"](/"buttonContent\\":\\"[^"]+/g, List[23])["replace"](/"url\\":\\"[^"]+/g, List[22])["replace"](/"isFree":\w+/g, List[16])["replace"](/"isPaid":\w+/g, List[19])["replace"](/"isSample":\w+/g, List[14])["replace"](/"isSample":\w+/g, List[18]));
Url["indexOf"](URI3) != -1 && (Body = Body["replace"](/nickName":"[^"]+/g, List[28])["replace"](/vipStatus":\d/g, List[27])["replace"](/subtitle":"[^"]+/g, List[26])["replace"](/userLevelIcon":"[^"]+/g, List[25])["replace"](/userLogoPic":"[^"]+/g, List[24]));

var UserBody = JSON[List[29]](Body);

if (Url["indexOf"](URI4) != -1) {
    const _0x4a0323 = "2|4|0|1|3"["split"]("|");

    let _0x2d827e = 0;
    UserBody["data"]["behaviors"][0][List[30]][List[1]] = List[33];
    UserBody["data"]["behaviors"][0][List[34]] = List[35];
    UserBody["data"]["behaviors"][0][List[36]] = List[37];
    UserBody["data"]["behaviors"][0][List[38]] = List[39];
    Body = JSON[List[40]](UserBody);
}

if (Url["indexOf"](URI5) != -1) {
    const _0x4573f8 = "9|10|1|11|2|3|6|7|0|8|4|5"["split"]("|");

    let _0x366a73 = 0;
    UserBody["data"][List[41]] = List[42];
    UserBody["data"][List[43]] = true;
    UserBody["data"][List[44]] = 32493834549000;
    UserBody["data"][List[45]] = 2;
    UserBody["data"][List[46]] = 5;
    UserBody["data"][List[47]][List[43]] = true;
    UserBody["data"][List[48]][List[43]] = true;
    UserBody["data"][List[48]][List[49]] = 5;
    UserBody["data"][List[50]] = List[51];
    UserBody["data"][List[52]] = List[51];
    UserBody["data"][List[53]] = List[51];
    Body = JSON[List[40]](UserBody);
}

Url["indexOf"](URI6) != -1 && (delete UserBody["data"][List[54]], UserBody["data"][List[45]] = 2, UserBody["data"][List[55]] = List[42], Body = JSON[List[40]](UserBody));
Url["indexOf"](URI7) != -1 && (UserBody[List[56]] = List[57], Body = JSON[List[40]](UserBody));
const _0x50d395 = {
    "body": Body
};
$done(_0x50d395);
