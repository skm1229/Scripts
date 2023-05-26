/***************************************

function：      懒人听书    解锁VIP
author:         Skm_1229
app_version:    9.1.0
version:        1.0V

**************************************


[rewrite_local]

http[s]?:\/\/((hapi\.mting\.info)|(m\.lrts\.me)|(gzapi\.mting\.info))\/(app|yyting)\/(getVipPageData|userclient\/ClientGetUserInfo|usercenter\/ThirdPartyLogin).*$ url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/lrtsVIP.js

[mitm]

hostname = gzapi.mting.info,m.lrts.me,hapi.mting.info

***************************************/
var Body = $response["body"];
var Url = $request["url"];
const URI1 = "/yyting/userclient/ClientGetUserInfo";
const URI2 = "usercenter/ThirdPartyLogin.action";
const URI3 = "/app/getVipPageData";
Url["indexOf"](URI1) != -1 && (Body = Body["replace"](/"timeRemaining":[0-9]+/g, "\"timeRemaining\":356363");

var Skm_1229 = JSON["parse"](Body);

if (Url["indexOf"](URI2) != -1) {
    var Json_body = {
        "thirdType": 0,
        "msg": '',
        "apiStatus": 0,
        "recommendedSwitch": 9,
        "grade": 2,
        "videoCount": 0,
        "sex": 1,
        "attentionCount": 2,
        "collectFolderCount": 0,
        "state": 1,
        "token": "E2HiTadhMDvP1SZKF6GjFg**_BeVkl8YAWdVVtHWZZs_lkenBm4MpT_mj",
        "encryptPhone": "bWCXPEpe8IUM1ZOMfHgTbw==",
        "coin": 0,
        "haspwd": 1,
        "purchaseTime": "2023-06-16 12:53:55",
        "sectionCount": 0,
        "backCover": '',
        "isV": 0,
        "areaIds": "010035",
        "status": 0,
        "description": "暂无更多信息",
        "address": '',
        "ticketBalance": 0,
        "canUnlockNum": 12,
        "openId": '',
        "isForbidden": 0,
        "needAdvertNum": 1,
        "userId": 701156932,
        "loginKey": '',
        "needAdvertSum": 1,
        "fansCount": 0,
        "ticketCount": 0,
        "shortRemark": '',
        "timeRemaining": 22,
        "questionA": '',
        "question_A": '',
        "canNewbieGift": 0,
        "questionB": '',
        "question_B": '',
        "feeType": 3,
        "folderCount": 1,
        "registerTime": 1602205451000,
        "birthday": "1991-06-22",
        "isSetPwd": 0,
        "fcoin": 0,
        "defaultFolderId": 0,
        "memberSectionCount": 0,
        "vipExpireTimeNonExperience": 1686891235000,
        "point": 0,
        "userState": 4212902,
        "phone": "186****8404",
        "audioCount": 0,
        "vipBuyExpireTime": 1686891235000,
        "showGuide": 0,
        "accessToken": '',
        "vipExpireTime": 1686891235000,
        "ablumnCount": 0,
        "account": "LRTS701156932"
    };
    Skm_1229 = Json_body;
    Body = JSON[Body[24]](Skm_1229);
}

if (Url["indexOf"](URI3) != -1) {

    for (var i = 0; i < Skm_1229["data"]["unionMemberSuite"]["length"]; i++) {
        Skm_1229["data"]["unionMemberSuite"][i]["redirectUrl"] = "https://github.com/skm1229/Scripts";
        Skm_1229["data"]["unionMemberSuite"][i]["price"] = 0;
    }

    delete Skm_1229["data"]["goodsSuits"][0];
    Skm_1229["data"]["userInfo"]["vipExpireTime"] = 32493834549000;
    Body = JSON[Body[24]](Skm_1229);
}

var Json_Body = {
    "body": Body
};
$done(Json_Body);
