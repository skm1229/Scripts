/***************************************
function：知乎 盐故事+知识+书刊+去部分广告
author:   Skm_1229
version:  1.0v
**************************************

[mitm]

hostname = www.zhihu.com,zhuanlan.zhihu.com,api.zhihu.com,api.zhihu.com,183.204.14.111,125.77.176*,27.148*,183.204*,122.224*,60.188.72*,120.220*,120.222*,103.41.167.236,150.109.91*,*.zhihu.*,103.41.167.226

[rewrite_local]

[mitm]

hostname = ww.zhihu.com,zhuanlan.zhihu.com,api.zhihu.com,api.zhihu.com,183.204.14.111,125.77.176*,27.148*,183.204*,122.224*,60.188.72*,120.220*,120.222*,103.41.167.236,150.109.91*,*.zhihu.*,103.41.167.226

[rewrite_local]

^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/real_time_launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/(people\/self|unlimited\/go\/my_card|sku\/reversion_sku_ext).*$ url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/zhihuVIP.js
^http[s]?:\/\/.*zhihu\.(com|cn)\/(appview\/v2\/answer|remix-web\/paid_columns|km_player\/album|market\/paid_column|appview\/p|api\/v3\/books|books|market\/paid_magazine).*$ url script-request-header https://raw.githubusercontent.com/skm1229/Scripts/main/zhihuToken.js
***************************************/
var Body = $response["body"];
var Url = $request["url"];

const URI1 = "people/self";
const URI2 = "unlimited/go/my_card";
const URI3 = "sku/reversion_sku_ext";


Url["indexOf"](URI1) != -1 && (Body = Body["replace"](/vip_type":\d/g, "\"vip_type\":1")["replace"](/is_vip":\w+/g, "is_vip\":true")["replace"]);
Url["indexOf"](URI2) != -1 && (Body = Body["replace"](/jump_url":"[^"]+/g, "\"jump_url\":https://github.com/skm1229/Scripts")["replace"](/"button_text":"[^"]+/g, "\"button_text\":\"查看作者GitHUb\"")["replace"](/"title":"[^"]+/g, "\"title\": \"2999-09-09到期")["replace"](/songNeedPay":\d/g, "songNeedPay\":0"));

var Skm_1229 = JSON["parse"](Body);

if (Url["indexOf"](URI3) != -1) {
    Skm_1229["data"]["center"]["buttons"][1]["sub_text"] = "暂无";
    Skm_1229["data"]["center"]["buttons"][1]["link_url"] = "https://github.com/skm1229/Scripts";
    Skm_1229["data"]["center"]["buttons"][1]["button_text"] = "关注作者GitHub";
    Skm_1229["data"]["bottom"]["buttons"][1]["button_text"] = "关注作者GitHub";
    delete Skm_1229["data"]["center"]["buttons"][0]["sub_text"];
    Body = JSON["stringify"](Skm_1229);
}

const Json_body = {
    "body": Body
};

$done(Json_body);

