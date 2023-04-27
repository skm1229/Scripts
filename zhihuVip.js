/***************************************

function：知乎 盐故事+知识+书刊+去部分广告
author:   Skm_1229

**************************************

[mitm]

hostname = *1*1*,www.zhihu.com,zhuanlan.zhihu.com,api.zhihu.com,api.zhihu.com,183.204.14.111,125.77.176*,27.148*,183.204*,122.224*,60.188.72*,120.220*,120.222*,103.41.167.236,150.109.91*,*.zhihu.*,103.41.167.226

[rewrite_local]

[mitm]

hostname = *1*1*,www.zhihu.com,zhuanlan.zhihu.com,api.zhihu.com,api.zhihu.com,183.204.14.111,125.77.176*,27.148*,183.204*,122.224*,60.188.72*,120.220*,120.222*,103.41.167.236,150.109.91*,*.zhihu.*,103.41.167.226

[rewrite_local]

^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/commercial_api\/real_time_launch_v2 url reject-dict
^http[s]?:\/\/api\.zhihu\.com\/(people\/self|unlimited\/go\/my_card|sku\/reversion_sku_ext).*$ url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/zhihuVip.js
^http[s]?:\/\/.*zhihu\.(com|cn)\/(appview\/v2\/answer|remix-web\/paid_columns|km_player\/album|market\/paid_column|appview\/p|api\/v3\/books|books|market\/paid_magazine).*$ url script-request-header https://raw.githubusercontent.com/skm1229/Scripts/main/zhihuToken.js
***************************************/
var Body = $response["Body"];
var Url = $request["Url"];
const URI1 = "people/self";

Url["indexOf"](URI1) != -1 && (Body = Body["replace"](/vip_type":\d/g, "1:\"epyt_piv"["split"]('')["reverse"]()["join"](''))["replace"](/name":"[^"]+/g, "name\":\"")["replace"](/is_vip":\w+/g, "is_vip\":true")["replace"](/"avatar_Url":"[^"]+/g, "\"avatar_Url\": \""));

const Json_body = {
    "body": body
};
$done(Json_body);
