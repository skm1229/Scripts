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

var _0x3be4d3 = ["body", "url", "/mobile-playpage/playpage/tabs", "v1/album/track/ts", "business-vip-presale-mobile-web/page/ts", "/product/promotion/v1/album/price/ts", "mobile-user/v2/homePage/", "vip/v1/recommand", "/track/v3/baseInfo", "/product/detail/v1/module/data/dynamic", "/product/detail/v1/basicInfo/dynamic/ts", "indexOf", "\"url\":\"https://t.me/WeiRenQAQ/163", "replace", "\"isAuthorized\":true", "\"text\":\"âï¸èæ¬ç±ä¼äººåè´¹æä¾!è¯·ç¹å»æ­¤å¤è·åææ°JSãå½åæ¯SVIPçº¿è·¯â¤ï¸", "\"isFree\":true", "\"sampleDuration\":99999", "\"isSample\":true", "\"isPaid\":false", "\"vipPurchaseUrl\":\"https://t.me/WeiRenQAQ", "\"vipPurchaseText\":\"ç¹å»æ·»å ä½èTGé¢é", "\"url\\\":\\\"https://t.me/WeiRenQAQ\\", "\"buttonContent\\\":\\\"â¤ï¸â¤ï¸ç¹å»æ·»å ä½èTGé¢éâ¤ï¸â¤ï¸\\", "userLogoPic\":\"https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg", "userLevelIcon\":\"http://imagev2.xmcdn.com/group87/M09/0A/4E/wKg5IV8Pwjmw5My3AAASYbQa39Y768.png", "subtitle\":\"2999-09-09åè´¹æä¾ç¦æ­¢è´©å", "vipStatus\":2", "nickName\":\"by~ä¼äºº", "parse", "action", "behaviors", "data", "https://t.me/WeiRenQAQ/163", "vipPurchaseText", "ç¹å»æ·»å ä½èTGé¢é", "labelSubTitle", "æ·»å é¢éè·åææ°èæ¬ç»§ç»­çå¬ï¼ð", "labelText", "è¯¥èæ¬å·²å¤±æ", "stringify", "nickname", "by~ä¼äºº", "isVip", "vipExpireTime", "vipStatus", "vipLevel", "anchorVipInfo", "vipInfo", "level", "mobileLargeLogo", "https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg", "mobileSmallLogo", "mobileMiddleLogo", "modules", "nickName", "msg", "è¯¥èæ¬ä¸å¤©è¿è¡æ¬¡æ°è¿å¤ãè¯·ä½¿ç¨å«ççº¿è·¯æèéä¸å¤©åæ¥ð"];
var _0xee80a5 = $response[_0x3be4d3[0]];
var _0xf5402d = $request[_0x3be4d3[1]];
const _0x79eeae = _0x3be4d3[2];
const _0x1d0455 = _0x3be4d3[3];
const _0x467465 = _0x3be4d3[4];
const _0x2f1e1f = _0x3be4d3[5];
const _0x1ff020 = _0x3be4d3[6];
const _0x2efcc1 = _0x3be4d3[7];
const _0x1dff18 = _0x3be4d3[8];
const _0x1730ba = _0x3be4d3[9];
const _0x24a2ad = _0x3be4d3[10];
_0xf5402d[_0x3be4d3[11]](_0x79eeae) != -1 && (_0xee80a5 = _0xee80a5[_0x3be4d3[13]](/"sampleDuration":\d/g, _0x3be4d3[17])[_0x3be4d3[13]](/"isFree":\w+/g, _0x3be4d3[16])[_0x3be4d3[13]](/"text":"[^"]+/g, _0x3be4d3[15])[_0x3be4d3[13]](/"isAuthorized":\w+/g, _0x3be4d3[14])[_0x3be4d3[13]](/"url":"[^"]+/g, _0x3be4d3[12]));
_0xf5402d[_0x3be4d3[11]](_0x1d0455) != -1 && (_0xee80a5 = _0xee80a5[_0x3be4d3[13]](/"isFree":\w+/g, _0x3be4d3[16])[_0x3be4d3[13]](/"isPaid":\w+/g, _0x3be4d3[19])[_0x3be4d3[13]](/"isSample":\w+/g, _0x3be4d3[14])[_0x3be4d3[13]](/"isAuthorized":\w+/g, _0x3be4d3[18]));
_0xf5402d[_0x3be4d3[11]](_0x1730ba) != -1 && (_0xee80a5 = _0xee80a5[_0x3be4d3[13]](/"isFree":\w+/g, _0x3be4d3[16])[_0x3be4d3[13]](/"isPaid":\w+/g, _0x3be4d3[19])[_0x3be4d3[13]](/"isSample":\w+/g, _0x3be4d3[14])[_0x3be4d3[13]](/"isSample":\w+/g, _0x3be4d3[18])[_0x3be4d3[13]](/"vipPurchaseText":"[^"]+/g, _0x3be4d3[21])[_0x3be4d3[13]](/"vipPurchaseUrl":"[^"]+/g, _0x3be4d3[20]));
_0xf5402d[_0x3be4d3[11]](_0x24a2ad) != -1 && (_0xee80a5 = _0xee80a5[_0x3be4d3[13]](/"buttonContent\\":\\"[^"]+/g, _0x3be4d3[23])[_0x3be4d3[13]](/"url\\":\\"[^"]+/g, _0x3be4d3[22])[_0x3be4d3[13]](/"isFree":\w+/g, _0x3be4d3[16])[_0x3be4d3[13]](/"isPaid":\w+/g, _0x3be4d3[19])[_0x3be4d3[13]](/"isSample":\w+/g, _0x3be4d3[14])[_0x3be4d3[13]](/"isSample":\w+/g, _0x3be4d3[18]));
_0xf5402d[_0x3be4d3[11]](_0x467465) != -1 && (_0xee80a5 = _0xee80a5[_0x3be4d3[13]](/nickName":"[^"]+/g, _0x3be4d3[28])[_0x3be4d3[13]](/vipStatus":\d/g, _0x3be4d3[27])[_0x3be4d3[13]](/subtitle":"[^"]+/g, _0x3be4d3[26])[_0x3be4d3[13]](/userLevelIcon":"[^"]+/g, _0x3be4d3[25])[_0x3be4d3[13]](/userLogoPic":"[^"]+/g, _0x3be4d3[24]));

var _0x2eb8b1 = JSON[_0x3be4d3[29]](_0xee80a5);

if (_0xf5402d[_0x3be4d3[11]](_0x2f1e1f) != -1) {
  const _0x856322 = "2|3|0|4|1"["split"]("|");

  let _0x4355b5 = 0;
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[31]][0][_0x3be4d3[30]][_0x3be4d3[1]] = _0x3be4d3[33];
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[31]][0][_0x3be4d3[34]] = _0x3be4d3[35];
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[31]][0][_0x3be4d3[36]] = _0x3be4d3[37];
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[31]][0][_0x3be4d3[38]] = _0x3be4d3[39];
  _0xee80a5 = JSON[_0x3be4d3[40]](_0x2eb8b1);
}

if (_0xf5402d[_0x3be4d3[11]](_0x1ff020) != -1) {
  const _0x5f08b8 = "9|6|1|8|2|11|5|7|4|0|10|3"["split"]("|");

  let _0x277913 = 0;
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[41]] = _0x3be4d3[42];
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[43]] = true;
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[44]] = 32493834549000;
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[45]] = 2;
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[46]] = 5;
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[47]][_0x3be4d3[43]] = true;
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[48]][_0x3be4d3[43]] = true;
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[48]][_0x3be4d3[49]] = 5;
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[50]] = _0x3be4d3[51];
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[52]] = _0x3be4d3[51];
  _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[53]] = _0x3be4d3[51];
  _0xee80a5 = JSON[_0x3be4d3[40]](_0x2eb8b1);
}

_0xf5402d[_0x3be4d3[11]](_0x2efcc1) != -1 && (delete _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[54]], _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[45]] = 2, _0x2eb8b1[_0x3be4d3[32]][_0x3be4d3[55]] = _0x3be4d3[42], _0xee80a5 = JSON[_0x3be4d3[40]](_0x2eb8b1));
_0xf5402d[_0x3be4d3[11]](_0x1dff18) != -1 && (_0x2eb8b1[_0x3be4d3[56]] = _0x3be4d3[57], _0xee80a5 = JSON[_0x3be4d3[40]](_0x2eb8b1));
const _0x9b43cf = {
  "body": _0xee80a5
};
$done(_0x9b43cf);
