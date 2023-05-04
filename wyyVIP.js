/***************************************

function：解锁网易云VIP
author:   Skm_1229

**************************************
[mitm]

hostname = *.music.163.com

[rewrite_local]

^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header https://raw.githubusercontent.com/skm1229/Scripts/main/wyyToken.js
^http[s]?:\/\/((interface3\.music\.163\.com)\/api\/music-vip-membership\/cashier\/info).*$ url script-response-body https://raw.githubHeaderscontent.com/skm1229/Scripts/main/wyyVip.js


**************************************/

var Body = $response['body'];
var Url = $request['url'];
var Skm_1229 = JSON['parse'](Body);

const URI1 = "/api/music-vip-membership/cashier/info";
const URI2 = "/weapi/batch?csrf_token=ae59ae3f9897880c47cb191c87616064";

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

// if (Url["indexof"](URI2) != -1) {
//     Skm_1229["/api/music-vip-membership/front/vip/info"]["data"]["associator"]["vipCode"] = 1
//     Skm_1229["/api/music-vip-membership/front/vip/info"]["data"]["associator"]["expireTime"] = 32493834549000;
//     Skm_1229["/api/music-vip-membership/front/vip/info"]["data"]["associator"]["vipLevel"] = "1";
//     Skm_1229["/api/nuser/account/get"]["account"]["vipType"] = 5;
//     Skm_1229["/api/nuser/account/get"]["account"]["paidFee"] = true;
//     Skm_1229["/api/nuser/account/get"]["profile"]["nickname"] = '1111';
//     Skm_1229["/api/nuser/account/get"]["profile"]["vipType"] = 5;
//     Skm_1229["/api/nuser/account/get"]["profile"]["viptypeVersion"] = 1;
//     // Skm_1229["/api/purchased/redvip/vipstatus"]["userVipStatus"] = [4];
//     Body = JSON['stringify'](Skm_1229);
// }

$done({
    "body": Body
});;
