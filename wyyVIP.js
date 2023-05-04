/***************************************

function：解锁网易云VIP
author:   Skm_1229

**************************************
[mitm]

hostname = *.music.163.com

[rewrite_local]

^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header https://raw.githubusercontent.com/skm1229/Scripts/main/wyyToken.js
^http[s]?:\/\/music\.163\.com\/weapi\/batch\?csrf_token=.*$ url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/wyyVIP.js


**************************************/

var Body = $response['body'];
var Url = $request['url'];
var Skm_1229 = JSON['parse'](Body);

const URI1 = "music.163.com/weapi/batch?csrf_token";


if (Url["indexof"](URI1) != -1) {

    Skm_1229["/api/music-vip-membership/front/vip/info"]["data"]["associator"]["vipCode"] = 1
    Skm_1229["/api/music-vip-membership/front/vip/info"]["data"]["associator"]["vipLevel"] = "1";
    Skm_1229["/api/music-vip-membership/front/vip/info"]["data"]["associator"]["expireTime"] = 32493834549000;

    Skm_1229["/api/nuser/account/get"]["account"]["vipType"] = 5;
    Skm_1229["/api/nuser/account/get"]["account"]["paidFee"] = true;
    Skm_1229["/api/nuser/account/get"]["profile"]["nickname"] = "1111";
    Skm_1229["/api/nuser/account/get"]["profile"]["vipType"] = 5;
    Skm_1229["/api/nuser/account/get"]["profile"]["viptypeVersion"] = 1;
    // Skm_1229["/api/purchased/redvip/vipstatus"]["userVipStatus"] = [5];
    Body = JSON['stringify'](Skm_1229);
}

$done({
    "body": Body
});;
