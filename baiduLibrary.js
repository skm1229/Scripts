/***********************************
function：    百度文库 解锁会员
author:       Skm_1229
version:      1.0v
************************************

[rewrite_local]

^https:\/\/appwk\.baidu\.com\/(naapi\/(recommend\/recommenddoc|wkcircle\/messagetab|search\/wkhotwords|api\/wmadopt)|appapi\/(search\/hot|donate\/detail)|xpage\/interface\/wknaad) url reject
^https:\/\/appwk\.baidu\.com\/naapi\/(user\/getinfo|doc\/getdocdownloadcopywriter) url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/baiduLibrary.js

[mitm] 

hostname = appwk.baidu.com

*/

var Url = $request.url;
var Body = JSON.parse($response.body);
const URI1 = '/user/getinfo';
const URI2 = '/doc/getdocdownloadcopywriter';
if (Url.indexOf(URI1) != -1) {
    Body.data.vip.base_vip_info = { "end_time": 4070880000, "uid": 510004015, "is_vip": 1, "pro_total": 0, "start_time": 1672502400, "type": 2, "remain_day": 365, "normal_total": 0 };
};
if (Url.indexOf(URI2) != -1) {
    Body.data.copywriter2 = "";
    Body.data.downloadStatus = 21;
};
$done({ body: JSON.stringify(Body) });
