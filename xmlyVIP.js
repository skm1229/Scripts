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
const _0x432336 = List[2];
const _0x200175 = List[3];
const _0x3d866d = List[4];
const _0x5a1dda = List[5];
const _0x4fbc5d = List[6];
const _0x47d9fd = List[7];
const _0x4e31c2 = List[8];
const _0x204a1f = List[9];
const _0x6a0115 = List[10];
Url[List[11]](_0x432336) != -1 && (Body = Body[List[13]](/"sampleDuration":\d/g, List[17])[List[13]](/"isFree":\w+/g, List[16])[List[13]](/"text":"[^"]+/g, List[15])[List[13]](/"isAuthorized":\w+/g, List[14])[List[13]](/"url":"[^"]+/g, List[12]));
Url[List[11]](_0x200175) != -1 && (Body = Body[List[13]](/"isFree":\w+/g, List[16])[List[13]](/"isPaid":\w+/g, List[19])[List[13]](/"isSample":\w+/g, List[14])[List[13]](/"isAuthorized":\w+/g, List[18]));
Url[List[11]](_0x204a1f) != -1 && (Body = Body[List[13]](/"isFree":\w+/g, List[16])[List[13]](/"isPaid":\w+/g, List[19])[List[13]](/"isSample":\w+/g, List[14])[List[13]](/"isSample":\w+/g, List[18])[List[13]](/"vipPurchaseText":"[^"]+/g, List[21])[List[13]](/"vipPurchaseUrl":"[^"]+/g, List[20]));
Url[List[11]](_0x6a0115) != -1 && (Body = Body[List[13]](/"buttonContent\\":\\"[^"]+/g, List[23])[List[13]](/"url\\":\\"[^"]+/g, List[22])[List[13]](/"isFree":\w+/g, List[16])[List[13]](/"isPaid":\w+/g, List[19])[List[13]](/"isSample":\w+/g, List[14])[List[13]](/"isSample":\w+/g, List[18]));
Url[List[11]](_0x3d866d) != -1 && (Body = Body[List[13]](/nickName":"[^"]+/g, List[28])[List[13]](/vipStatus":\d/g, List[27])[List[13]](/subtitle":"[^"]+/g, List[26])[List[13]](/userLevelIcon":"[^"]+/g, List[25])[List[13]](/userLogoPic":"[^"]+/g, List[24]));

var _0x2e9115 = JSON[List[29]](Body);

if (Url[List[11]](_0x5a1dda) != -1) {
    const _0x4a0323 = "2|4|0|1|3"["split"]("|");

    let _0x2d827e = 0;
    _0x2e9115[List[32]][List[31]][0][List[30]][List[1]] = List[33];
    _0x2e9115[List[32]][List[31]][0][List[34]] = List[35];
    _0x2e9115[List[32]][List[31]][0][List[36]] = List[37];
    _0x2e9115[List[32]][List[31]][0][List[38]] = List[39];
    Body = JSON[List[40]](_0x2e9115);
}

if (Url[List[11]](_0x4fbc5d) != -1) {
    const _0x4573f8 = "9|10|1|11|2|3|6|7|0|8|4|5"["split"]("|");

    let _0x366a73 = 0;
    _0x2e9115[List[32]][List[41]] = List[42];
    _0x2e9115[List[32]][List[43]] = true;
    _0x2e9115[List[32]][List[44]] = 32493834549000;
    _0x2e9115[List[32]][List[45]] = 2;
    _0x2e9115[List[32]][List[46]] = 5;
    _0x2e9115[List[32]][List[47]][List[43]] = true;
    _0x2e9115[List[32]][List[48]][List[43]] = true;
    _0x2e9115[List[32]][List[48]][List[49]] = 5;
    _0x2e9115[List[32]][List[50]] = List[51];
    _0x2e9115[List[32]][List[52]] = List[51];
    _0x2e9115[List[32]][List[53]] = List[51];
    Body = JSON[List[40]](_0x2e9115);
}

Url[List[11]](_0x47d9fd) != -1 && (delete _0x2e9115[List[32]][List[54]], _0x2e9115[List[32]][List[45]] = 2, _0x2e9115[List[32]][List[55]] = List[42], Body = JSON[List[40]](_0x2e9115));
Url[List[11]](_0x4e31c2) != -1 && (_0x2e9115[List[56]] = List[57], Body = JSON[List[40]](_0x2e9115));
const _0x50d395 = {
    "body": Body
};
$done(_0x50d395);
