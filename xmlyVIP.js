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

var _0x35d2d1 = $response["body"];
var _0x250955 = $request["url"];
const _0x4e5b40 = "/mobile-playpage/playpage/tabs";
const _0x2310c1 = "v1/album/track/ts";
const _0x3cc202 = "business-vip-presale-mobile-web/page/ts";
const _0xb963fa = "/product/promotion/v1/album/price/ts";
const _0x5c7fed = "mobile-user/v2/homePage/";
const _0xc5dc45 = "vip/v1/recommand";
const _0x4f91d4 = "/track/v3/baseInfo";
const _0x502905 = "/product/detail/v1/module/data/dynamic";
const _0x2ae674 = "/product/detail/v1/basicInfo/dynamic/ts";
_0x250955["indexOf"](_0x4e5b40) != -1 && (_0x35d2d1 = _0x35d2d1["replace"](/"sampleDuration":\d/g, "\"sampleDuration\":99999")["replace"](/"isFree":\w+/g, "\"isFree\":true")["replace"](/"text":"[^"]+/g, "\"text\":\"âï¸èæ¬ç±ä¼äººåè´¹æä¾!è¯·ç¹å»æ­¤å¤è·åææ°JSãå½åæ¯02æ¯å·çº¿è·¯â¤ï¸")["replace"](/"isAuthorized":\w+/g, "\"isAuthorized\":true")["replace"](/"url":"[^"]+/g, "\"url\":\"https://t.me/WeiRenQAQ/163"));
_0x250955["indexOf"](_0x2310c1) != -1 && (_0x35d2d1 = _0x35d2d1["replace"](/"isFree":\w+/g, "\"isFree\":true")["replace"](/"isPaid":\w+/g, "\"isPaid\":false")["replace"](/"isSample":\w+/g, "\"isAuthorized\":true")["replace"](/"isAuthorized":\w+/g, "\"isSample\":true"));
_0x250955["indexOf"](_0x502905) != -1 && (_0x35d2d1 = _0x35d2d1["replace"](/"isFree":\w+/g, "\"isFree\":true")["replace"](/"isPaid":\w+/g, "\"isPaid\":false")["replace"](/"isSample":\w+/g, "\"isAuthorized\":true")["replace"](/"isSample":\w+/g, "\"isSample\":true")["replace"](/"vipPurchaseText":"[^"]+/g, "\"vipPurchaseText\":\"ç¹å»æ·»å ä½èTGé¢é")["replace"](/"vipPurchaseUrl":"[^"]+/g, "\"vipPurchaseUrl\":\"https://t.me/WeiRenQAQ"));
_0x250955["indexOf"](_0x2ae674) != -1 && (_0x35d2d1 = _0x35d2d1["replace"](/"buttonContent\\":\\"[^"]+/g, "\"buttonContent\\\":\\\"â¤ï¸â¤ï¸ç¹å»æ·»å ä½èTGé¢éâ¤ï¸â¤ï¸\\")["replace"](/"url\\":\\"[^"]+/g, "\"url\\\":\\\"https://t.me/WeiRenQAQ\\")["replace"](/"isFree":\w+/g, "\"isFree\":true")["replace"](/"isPaid":\w+/g, "\"isPaid\":false")["replace"](/"isSample":\w+/g, "\"isAuthorized\":true")["replace"](/"isSample":\w+/g, "\"isSample\":true"));
_0x250955["indexOf"](_0x3cc202) != -1 && (_0x35d2d1 = _0x35d2d1["replace"](/nickName":"[^"]+/g, "nickName\":\"by~ä¼äºº")["replace"](/vipStatus":\d/g, "vipStatus\":2")["replace"](/subtitle":"[^"]+/g, "subtitle\":\"2999-09-09åè´¹æä¾ç¦æ­¢è´©å")["replace"](/userLevelIcon":"[^"]+/g, "userLevelIcon\":\"http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png")["replace"](/userLogoPic":"[^"]+/g, "userLogoPic\":\"https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg"));

var _0x1585e9 = JSON["parse"](_0x35d2d1);

if (_0x250955["indexOf"](_0xb963fa) != -1) {
  const _0x1805c1 = "1|0|2|3|4"["split"]("|");

  let _0x5e34e1 = 0;
  _0x1585e9["data"]["behaviors"][0]["action"]["url"] = "https://t.me/WeiRenQAQ/163";
  _0x1585e9["data"]["behaviors"][0]["vipPurchaseText"] = "ç¹å»æ·»å ä½èTGé¢é";
  _0x1585e9["data"]["behaviors"][0]["labelSubTitle"] = "æ·»å é¢éè·åææ°èæ¬ç»§ç»­çå¬ï¼ð";
  _0x1585e9["data"]["behaviors"][0]["labelText"] = "è¯¥èæ¬å·²å¤±æ";
  _0x35d2d1 = JSON["stringify"](_0x1585e9);
}

if (_0x250955["indexOf"](_0x5c7fed) != -1) {
  const _0x2ce4a3 = "10|5|2|9|0|7|4|6|1|8|3|11"["split"]("|");

  let _0x2b6f74 = 0;
  _0x1585e9["data"]["nickname"] = "by~ä¼äºº";
  _0x1585e9["data"]["isVip"] = true;
  _0x1585e9["data"]["vipExpireTime"] = 32493834549000;
  _0x1585e9["data"]["vipStatus"] = 2;
  _0x1585e9["data"]["vipLevel"] = 5;
  _0x1585e9["data"]["anchorVipInfo"]["isVip"] = true;
  _0x1585e9["data"]["vipInfo"]["isVip"] = true;
  _0x1585e9["data"]["vipInfo"]["level"] = 5;
  _0x1585e9["data"]["mobileLargeLogo"] = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";
  _0x1585e9["data"]["mobileSmallLogo"] = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";
  _0x1585e9["data"]["mobileMiddleLogo"] = "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg";
  _0x35d2d1 = JSON["stringify"](_0x1585e9);
}

_0x250955["indexOf"](_0xc5dc45) != -1 && (delete _0x1585e9["data"]["modules"], _0x1585e9["data"]["vipStatus"] = 2, _0x1585e9["data"]["nickName"] = "by~ä¼äºº", _0x35d2d1 = JSON["stringify"](_0x1585e9));
_0x250955["indexOf"](_0x4f91d4) != -1 && (_0x1585e9["msg"] = "è¯¥èæ¬ä¸å¤©è¿è¡æ¬¡æ°è¿å¤ãè¯·ä½¿ç¨å«ççº¿è·¯æèéä¸å¤©åæ¥ð", _0x35d2d1 = JSON["stringify"](_0x1585e9));
const _0x136176 = {
  "body": _0x35d2d1
};
$done(_0x136176);
