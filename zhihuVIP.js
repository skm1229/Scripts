/***************************************

function：      知乎 盐故事+知识+书刊+去部分广告
author:         Skm_1229、
app_version:    9.1.0
version:        1.1V

**************************************
[mitm]

hostname = *1*1*,www.zhihu.com,zhuanlan.zhihu.com,api.zhihu.com,api.zhihu.com,183.204.14.111,125.77.176*,27.148*,183.204*,122.224*,60.188.72*,120.220*,120.222*,103.41.167.236,150.109.91*,*.zhihu.*,103.41.167.226

[rewrite_local]

^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/real_time_launch_v2 url reject-dict
^http[s]?:\/\/.*zhihu\.(com|cn)\/(appview\/v2\/answer|remix-web\/paid_columns|km_player\/album|market\/paid_column|appview\/p|api\/v3\/books|books|market\/paid_magazine).*$ url script-request-header https://raw.githubusercontent.com/skm1229/Scripts/main/zhihuToken.js
***************************************/


var body = $response["body"];
var url = $request["url"];


const URI1 = "people/self";
const URI2 = "unlimited/go/my_card";
const URI3 = "sku/reversion_sku_ext";


url["indexOf"](URI1) != -1 && (body = body["replace"](/vip_type":\d/g, "vip_type\":1"))["replace"](/name":"[^"]+/g, "name\":\"Skm_1229\"")["replace"](/is_vip":\w+/g, "is_vip\":true")["replace"](/"avatar_url":"[^"]+/g, "\"avatar_url\": \"https://pic1.zhimg.com/v2-802fd7817df46f9ea1a962f4a328566b_l.jpg?source=32738c0c");
url["indexOf"](URI2) != -1 && (body = body["replace"](/jump_url":"[^"]+/g, "\"jump_url\":https://github.com/skm1229/Scripts")["replace"](/"button_text":"[^"]+/g, "\"button_text\":\"关注作者GitHub\"")["replace"](/"title":"[^"]+/g, "\"title\": \"2999-09-09年")["replace"](/songNeedPay":\d/g, "songNeedPay\":0"));

var Jump_butoon_text = JSON["parse"](body);

if (url["indexOf"](URI3) != -1) {


    Jump_butoon_text["data"]["center"]["buttons"][1]["sub_text"] = "关注作者GitHub";
    Jump_butoon_text["data"]["center"]["buttons"][1]["link_url"] = "https://github.com/skm1229/Scripts";
    Jump_butoon_text["data"]["center"]["buttons"][1]["button_text"] = "关注作者GitHub";
    Jump_butoon_text["data"]["bottom"]["buttons"][1]["button_text"] = "关注作者GitHub";
    delete Jump_butoon_text["data"]["center"]["buttons"][0]["sub_text"];
    body = JSON["stringify"](Jump_butoon_text);
}

const Json_body = {
    "body": body
};
$done(Json_body);

