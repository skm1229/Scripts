/***************************************

function：解锁网易云VIP
author:   Skm_1229

**************************************
[mitm]

hostname = *.music.163.com

[rewrite_local]

^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header https://raw.githubusercontent.com/skm1229/Scripts/main/wyyToken.js
^http[s]?:\/\/(interface3\.music\.163\.com).*$ url script-response-body https://raw.githubHeaderscontent.com/skm1229/Scripts/main/wyyVip.js

**************************************/

var Body = $response['body'];
var Url = $request['url'];
var Skm_1229 = JSON['parse'](Body);

const URI1 = "/api/music-vip-membership/cashier/info";

if (Url["indexof"](URI1) != -1) {
    //付费音乐包及年费会员
    Skm_1229["data"]["vip"]["redVipAnnualCount"] = 1;
    Skm_1229["data"]["vip"]["redVipLevel"] = 1;
    Skm_1229["data"]["vip"]["vipCode"] = 1;
    Skm_1229["data"]["vip"]["vipLevel"] = 5;
    Skm_1229["data"]["vip"]["expireTime"] = 32493834549000;
    Skm_1229["data"]["vip"]["musicPackage"]

    //用户类型判断
    Skm_1229["user"]["account"]["viptypeVersion"] = 1;
    Skm_1229["user"]["account"]["vipType"] = 5;
    Skm_1229["user"]["account"]["status"] = 1;
    Skm_1229["profile"]["vipType"] = 5;
    Skm_1229["profile"]["nickname"] = "1111";
    Body = JSON['stringify'](Skm_1229);
}


$done({
    "body": Body
});;
