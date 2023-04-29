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
^http[s]?:\/\/api\.zhihu\.com\/(people\/self|unlimited\/go\/my_card|sku\/reversion_sku_ext).*$ url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/zhihuVip.jss
^http[s]?:\/\/.*zhihu\.(com|cn)\/(appview\/v2\/answer|remix-web\/paid_columns|km_player\/album|market\/paid_column|appview\/p|api\/v3\/books|books|market\/paid_magazine).*$ url script-request-header https://raw.githubusercontent.com/skm1229/Scripts/main/zhihuToken.js
***************************************/
var Body = $response["Body"];
var Url = $request["Url"];
const URI1 = "people/self";
const URI2 = "unlimited/go/my_card";
const URI3 = "sku/reversion_sku_ext";

url["indexOf"](URI1) != -1 && (body = body["replace"](/vip_type":\d/g, "1:\"epyt_piv"["split"]('')["reverse"]()["join"](''))["replace"](/name":"[^"]+/g, "name\":\"Skm_1229")["replace"](/is_vip":\w+/g, "is_vip\":true")["replace"](/"avatar_url":"[^"]+/g, "\"avatar_url\": \"https://picx.zhimg.com/100/v2-802fd7817df46f9ea1a962f4a328566b_xl.jpg?source=32738c0c"));

const Json_body = {
    "body": body
};
$done(Json_body);
