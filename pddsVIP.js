/****************************************

function:       樊登读书   樊登讲书+非凡精读+李蕾阅读+付费课程
author:         Skm_1229
app_version:    5.64.0
version:        1.0v

*****************************************
[mitm]

hostname = *dushu*


[rewrite_local]

^http[s]?:\/\/.+dushu.+(v101|v100|program\/v100)\/(content|play\/duration|index|list|userInfo|vipInfo|info|ceiltip|mainList|getMarketInfoByType|share).*$ url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/pddsVIP.js
^http[s]?:\/\/.+dushu.+(v101\/content|book\/v100\/info|\/play\/duration|\/v100\/index|lilei-talk-orch\/program\/v100\/info).*$ url script-request-body https://raw.githubusercontent.com/skm1229/Scripts/main/pddsToken.js
^http[s]?:\/\/.*dushu365\.com\/resource-orchestration-system\/play\/duration url reject-200

***************************************/


var Body = $response['body'];
var Url = $request['url'];
var Skm_1229 = JSON['parse'](Body);
const URI1 = '/v101/content';
const URI2 = '/v100/list';
const URI3 = 'smart-orch/program/v100/info';
const URI4 = '/v101/userInfo';
const URI5 = '/v100/vipInfo';
const URI6 = '/course/v100/info';
const URI7 = '/v100/ceiltip';
const URI8 = '/v100/mainList';
const URI9 = '/v100/getMarketInfoByType';
const URI10 = '/lilei-talk-orch/program/v100/info';
if (Url['indexOf'](URI1) != -1) {
    Skm_1229['data']['free'] = true;
    Body = JSON['stringify'](Skm_1229);
}
if (Url['indexOf'](URI2) != -1) {
    for (var i = 0; i < Skm_1229['data']['length']; i++) {
        Skm_1229['data'][i]['free'] = true;
        Skm_1229['data'][i]['unlock'] = true;
    }
    Body = JSON['stringify'](Skm_1229);
}
if (Url['indexOf'](URI3) != -1) {
    for (var i = 0; i < Skm_1229['data']['programList']['length']; i++) {
        Skm_1229['data']['programList'][i]['free'] = true;
        Skm_1229['data']['programList'][i]['unlock'] = true;
    }
    Skm_1229['data']['free'] = true;
    Skm_1229['data']['isBuyed'] = true;
    Skm_1229['data']['trial'] = true;
    Skm_1229['data']['unlock'] = true;
    Body = JSON['stringify'](Skm_1229);

}


if (Url['indexOf'](URI4) != -1) {

    Skm_1229['data']['is_vip'] = true;
    Skm_1229['data']['username'] = 'Skm_1229';
    Skm_1229['data']['expire_time'] = 32493834549000;
    Skm_1229['data']['free'] = true;
    Body = JSON['stringify'](Skm_1229);

}
if (Url['indexOf'](URI5) != -1) {
    Skm_1229['data']['endTime'] = 32493834549000;
    Skm_1229['data']['userStatus'] = 1;
    Body = JSON['stringify'](Skm_1229);
}
if (Url['indexOf'](URI6) != -1) {
    Skm_1229['data']['learningInfo']['shareText'] = '本课程已解锁成功!';
    Skm_1229['data']['hasBought'] = true;
    Body = JSON['stringify'](Skm_1229);
}
if (Url['indexOf'](URI7) != -1) {
    Skm_1229['data']['descTip'] = '暂无更多信息';
    Body = JSON['stringify'](Skm_1229);
}
if (Url['indexOf'](URI8) != -1) {
    for (var i = 0; i < Skm_1229['data']['hotTopCourses']['hotCourse']['length']; i++) {
        Skm_1229['data']['hotTopCourses']['hotCourse'][i]['hasOwned'] = true;
        Skm_1229['data']['hotTopCourses']['hotCourse'][i]['offShelf'] = true;
    }
    for (var i = 0; i < Skm_1229['data']['hotTopCourses']['topCourse']['length']; i++) {
        Skm_1229['data']['hotTopCourses']['topCourse'][i]['hasOwned'] = true;
        Skm_1229['data']['hotTopCourses']['topCourse'][i]['offShelf'] = true;
    }
    Body = JSON['stringify'](Skm_1229);
}
if (Url['indexOf'](URI9) != -1) {
    for (var i = 0; i < Skm_1229['data']['length']; i++) {
        Skm_1229['data'][i]['hasBuy'] = 1;
    }
    Body = JSON['stringify'](Skm_1229);
}
if (Url['indexOf'](URI10) != -1) {
    Body = Body['replace'](/"activityText":"[^"]+/g, '"activityText": "暂无更多信息')['replace'](/userStatus":2/g, 'userStatus":1')['replace'](/"endTime":\d+/g, '"endTime":4092647115000')['replace'](/"free":\w+/g, '"free":true');;
}
$done({
    'body': Body
});;
