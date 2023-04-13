/**************************************
function：billbill画质解锁
author:   skm_1229

     user['data']['name'] = 'skm_1229';
     user['data']['coin'] = 999880;
     user['data']['bcoin'] = 999880;
     user['data']['face'] = ' /2021/11/09/00/23/e8374efaeeaa36fe6004e73490e13b118606eac1.jpg';
     user['data']['level'] = 6;
**************************************
[rewrite_local]
^http[s]?:\/\/.+bilibili.+((pgc\/player\/api\/playurl)|(x\/v2\/account\/myinfo\?)|(x\/v2\/account/mine\?)).*$ url script-response-body https://raw.githubusercontent.com//skm1229/scripts/main/billbillHD.js
[mitm]
hostname = *.biliapi.*,*.bilibili.*


***************************************/


var body = $response['body'];
var url = $request['url'];
const api = '/pgc/player/api/playurl';
const myinfo = '/x/v2/account/myinfo?';
const mine = '/x/v2/account/mine?';
if (url['indexOf'](api) != -1) {
    let vip = JSON['parse'](body);
    vip['has_paid'] = !![];
    vip['quality'] = vip['accept_quality'][0];
    vip['vip_type'] = 2;
    vip['vip_status'] = 1;
    body = JSON['stringify'](vip);
};
if (url['indexOf'](myinfo) != -1) {
    let data = JSON['parse'](body);
    data['data']['vip']['type'] = 2;
    data['data']['vip']['status'] = 1;
    data['data']['vip']['vip_pay_type'] = 1;
    data['data']['vip']['due_date'] = 1796054400000;
    body = JSON['stringify'](data);
};
if (url['indexOf'](mine) != -1) {
    let user = JSON['parse'](body);
    user['data']['vip_type'] = 2;
    user['data']['vip']['type'] = 2;
    user['data']['vip']['status'] = 1;
    user['data']['vip']['vip_pay_type'] = 1;
    user['data']['vip']['due_date'] = 1796054400000;
    body = JSON['stringify'](user);
};
$done({
    'body': body
});
