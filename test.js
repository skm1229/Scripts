
/***************************************

[mitm]

hostname = *1*1*,www.zhihu.com,zhuanlan.zhihu.com,api.zhihu.com,api.zhihu.com,183.204.14.111,125.77.176*,27.148*,183.204*,122.224*,60.188.72*,120.220*,120.222*,103.41.167.236,150.109.91*,*.zhihu.*,103.41.167.226

[rewrite_local]

^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/real_time_launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/(people\/self|unlimited\/go\/my_card|sku\/reversion_sku_ext).*$ url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/test.js
^http[s]?:\/\/.*zhihu\.(com|cn)\/(appview\/v2\/answer|remix-web\/paid_columns|km_player\/album|market\/paid_column|appview\/p|api\/v3\/books|books|market\/paid_magazine).*$ url script-request-header https://raw.githubusercontent.com/skm1229/Scripts/main/zhihuToken.js
***************************************/
var _0x2718fe = $response["body"];
var _0x736448 = $request["url"];
const _0x2b547c = "people/self";

const _0x598f3a = "drac_ym/og/detimilnu"["split"]('')["reverse"]()["join"]('');

const _0x462e74 = "sku/reversion_sku_ext";
_0x736448["indexOf"](_0x2b547c) != -1 && (_0x2718fe = _0x2718fe["replace"](/vip_type":\d/g, "1:\"epyt_piv"["split"]('')["reverse"]()["join"](''))["replace"](/name":"[^"]+/g, "name\":\"by~ä¼äºº")["replace"](/is_vip":\w+/g, "is_vip\":true")["replace"](/"avatar_url":"[^"]+/g, "\"avatar_url\": \"https://static.jietushuiyin.com/uploads/20230204/452be787cb7d63972965498fbf23666d.jpg"));
_0x736448["indexOf"](_0x598f3a) != -1 && (_0x2718fe = _0x2718fe["replace"](/jump_url":"[^"]+/g, "QAQneRieW/em.t//:sptth\":\"lru_pmuj"["split"]('')["reverse"]()["join"](''))["replace"](/"button_text":"[^"]+/g, "éé¢GTèä½å æ·»å»ç¹\":\"txet_nottub\""["split"]('')["reverse"]()["join"](''))["replace"](/"title":"[^"]+/g, "\"title\": \"2999-09-09å°æ")["replace"](/songNeedPay":\d/g, "0:\"yaPdeeNgnos"["split"]('')["reverse"]()["join"]('')));

var _0x58d1cd = JSON["parse"](_0x2718fe);

if (_0x736448["indexOf"](_0x462e74) != -1) {
  const _0x283fb6 = "2|3|0|4|5|1"["split"]("|");

  let _0x3b037d = 0;
  _0x58d1cd["data"]["center"]["buttons"][1]["sub_text"] = "ï¼é¦åGTå æ·»å¤æ­¤å»ç¹ï¼çè§æ³æ "["split"]('')["reverse"]()["join"]('');
  _0x58d1cd["data"]["center"]["buttons"][1]["link_url"] = "https://t.me/WeiRenQAQ";
  _0x58d1cd["data"]["center"]["buttons"][1]["button_text"] = "å®¹åè¯¥éè§£å·²"["split"]('')["reverse"]()["join"]('');
  _0x58d1cd["data"]["bottom"]["buttons"][1]["button_text"] = "ç«å³éè¯»";
  delete _0x58d1cd["data"]["center"]["buttons"][0]["sub_text"];
  _0x2718fe = JSON["stringify"](_0x58d1cd);
}

const _0x4d1e52 = {
  "body": _0x2718fe
};
$done(_0x4d1e52);
