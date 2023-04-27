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
var _0x51f0b2 = ["body", "url", "/mobile-playpage/playpage/tabs", "v1/album/track/ts", "business-vip-presale-mobile-web/page/ts", "/product/promotion/v1/album/price/ts", "mobile-user/v2/homePage/", "vip/v1/recommand", "/track/v3/baseInfo", "/product/detail/v1/module/data/dynamic", "/product/detail/v1/basicInfo/dynamic/ts", "indexOf", "\"url\":\"https://t.me/WeiRenQAQ/163", "replace", "\"isAuthorized\":true", "\"text\":\"âï¸èæ¬ç±ä¼äººåè´¹æä¾!è¯·ç¹å»æ­¤å¤è·åææ°JSãå½åæ¯SVIP2çº¿è·¯â¤ï¸", "\"isFree\":true", "\"sampleDuration\":99999", "\"isSample\":true", "\"isPaid\":false", "\"vipPurchaseUrl\":\"https://t.me/WeiRenQAQ", "\"vipPurchaseText\":\"ç¹å»æ·»å ä½èTGé¢é", "\"url\\\":\\\"https://t.me/WeiRenQAQ\\", "\"buttonContent\\\":\\\"â¤ï¸â¤ï¸ç¹å»æ·»å ä½èTGé¢éâ¤ï¸â¤ï¸\\", "userLogoPic\":\"https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg", "userLevelIcon\":\"http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png", "subtitle\":\"2999-09-09åè´¹æä¾ç¦æ­¢è´©å", "vipStatus\":2", "nickName\":\"by~ä¼äºº", "parse", "action", "behaviors", "data", "https://t.me/WeiRenQAQ/163", "vipPurchaseText", "ç¹å»æ·»å ä½èTGé¢é", "labelSubTitle", "æ·»å é¢éè·åææ°èæ¬ç»§ç»­çå¬ï¼ð", "labelText", "è¯¥èæ¬å·²å¤±æ", "stringify", "nickname", "by~ä¼äºº", "isVip", "vipExpireTime", "vipStatus", "vipLevel", "anchorVipInfo", "vipInfo", "level", "mobileLargeLogo", "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg", "mobileSmallLogo", "mobileMiddleLogo", "modules", "nickName", "msg", "è¯¥èæ¬ä¸å¤©è¿è¡æ¬¡æ°è¿å¤ãè¯·ä½¿ç¨å«ççº¿è·¯æèéä¸å¤©åæ¥ð"];
var _0x5ab89a = $response[_0x51f0b2[0]];
var _0xbc0b57 = $request[_0x51f0b2[1]];
const _0x432336 = _0x51f0b2[2];
const _0x200175 = _0x51f0b2[3];
const _0x3d866d = _0x51f0b2[4];
const _0x5a1dda = _0x51f0b2[5];
const _0x4fbc5d = _0x51f0b2[6];
const _0x47d9fd = _0x51f0b2[7];
const _0x4e31c2 = _0x51f0b2[8];
const _0x204a1f = _0x51f0b2[9];
const _0x6a0115 = _0x51f0b2[10];
_0xbc0b57[_0x51f0b2[11]](_0x432336) != -1 && (_0x5ab89a = _0x5ab89a[_0x51f0b2[13]](/"sampleDuration":\d/g, _0x51f0b2[17])[_0x51f0b2[13]](/"isFree":\w+/g, _0x51f0b2[16])[_0x51f0b2[13]](/"text":"[^"]+/g, _0x51f0b2[15])[_0x51f0b2[13]](/"isAuthorized":\w+/g, _0x51f0b2[14])[_0x51f0b2[13]](/"url":"[^"]+/g, _0x51f0b2[12]));
_0xbc0b57[_0x51f0b2[11]](_0x200175) != -1 && (_0x5ab89a = _0x5ab89a[_0x51f0b2[13]](/"isFree":\w+/g, _0x51f0b2[16])[_0x51f0b2[13]](/"isPaid":\w+/g, _0x51f0b2[19])[_0x51f0b2[13]](/"isSample":\w+/g, _0x51f0b2[14])[_0x51f0b2[13]](/"isAuthorized":\w+/g, _0x51f0b2[18]));
_0xbc0b57[_0x51f0b2[11]](_0x204a1f) != -1 && (_0x5ab89a = _0x5ab89a[_0x51f0b2[13]](/"isFree":\w+/g, _0x51f0b2[16])[_0x51f0b2[13]](/"isPaid":\w+/g, _0x51f0b2[19])[_0x51f0b2[13]](/"isSample":\w+/g, _0x51f0b2[14])[_0x51f0b2[13]](/"isSample":\w+/g, _0x51f0b2[18])[_0x51f0b2[13]](/"vipPurchaseText":"[^"]+/g, _0x51f0b2[21])[_0x51f0b2[13]](/"vipPurchaseUrl":"[^"]+/g, _0x51f0b2[20]));
_0xbc0b57[_0x51f0b2[11]](_0x6a0115) != -1 && (_0x5ab89a = _0x5ab89a[_0x51f0b2[13]](/"buttonContent\\":\\"[^"]+/g, _0x51f0b2[23])[_0x51f0b2[13]](/"url\\":\\"[^"]+/g, _0x51f0b2[22])[_0x51f0b2[13]](/"isFree":\w+/g, _0x51f0b2[16])[_0x51f0b2[13]](/"isPaid":\w+/g, _0x51f0b2[19])[_0x51f0b2[13]](/"isSample":\w+/g, _0x51f0b2[14])[_0x51f0b2[13]](/"isSample":\w+/g, _0x51f0b2[18]));
_0xbc0b57[_0x51f0b2[11]](_0x3d866d) != -1 && (_0x5ab89a = _0x5ab89a[_0x51f0b2[13]](/nickName":"[^"]+/g, _0x51f0b2[28])[_0x51f0b2[13]](/vipStatus":\d/g, _0x51f0b2[27])[_0x51f0b2[13]](/subtitle":"[^"]+/g, _0x51f0b2[26])[_0x51f0b2[13]](/userLevelIcon":"[^"]+/g, _0x51f0b2[25])[_0x51f0b2[13]](/userLogoPic":"[^"]+/g, _0x51f0b2[24]));

var _0x2e9115 = JSON[_0x51f0b2[29]](_0x5ab89a);

if (_0xbc0b57[_0x51f0b2[11]](_0x5a1dda) != -1) {
  const _0x4a0323 = "2|4|0|1|3"["split"]("|");

  let _0x2d827e = 0;
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[31]][0][_0x51f0b2[30]][_0x51f0b2[1]] = _0x51f0b2[33];
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[31]][0][_0x51f0b2[34]] = _0x51f0b2[35];
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[31]][0][_0x51f0b2[36]] = _0x51f0b2[37];
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[31]][0][_0x51f0b2[38]] = _0x51f0b2[39];
  _0x5ab89a = JSON[_0x51f0b2[40]](_0x2e9115);
}

if (_0xbc0b57[_0x51f0b2[11]](_0x4fbc5d) != -1) {
  const _0x4573f8 = "9|10|1|11|2|3|6|7|0|8|4|5"["split"]("|");

  let _0x366a73 = 0;
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[41]] = _0x51f0b2[42];
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[43]] = true;
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[44]] = 32493834549000;
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[45]] = 2;
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[46]] = 5;
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[47]][_0x51f0b2[43]] = true;
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[48]][_0x51f0b2[43]] = true;
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[48]][_0x51f0b2[49]] = 5;
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[50]] = _0x51f0b2[51];
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[52]] = _0x51f0b2[51];
  _0x2e9115[_0x51f0b2[32]][_0x51f0b2[53]] = _0x51f0b2[51];
  _0x5ab89a = JSON[_0x51f0b2[40]](_0x2e9115);
}

_0xbc0b57[_0x51f0b2[11]](_0x47d9fd) != -1 && (delete _0x2e9115[_0x51f0b2[32]][_0x51f0b2[54]], _0x2e9115[_0x51f0b2[32]][_0x51f0b2[45]] = 2, _0x2e9115[_0x51f0b2[32]][_0x51f0b2[55]] = _0x51f0b2[42], _0x5ab89a = JSON[_0x51f0b2[40]](_0x2e9115));
_0xbc0b57[_0x51f0b2[11]](_0x4e31c2) != -1 && (_0x2e9115[_0x51f0b2[56]] = _0x51f0b2[57], _0x5ab89a = JSON[_0x51f0b2[40]](_0x2e9115));
const _0x50d395 = {
  "body": _0x5ab89a
};
$done(_0x50d395);
