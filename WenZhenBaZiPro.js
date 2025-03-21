/**************************************
function：问真八字解锁砖石会员
author:   skm_1229
**************************************
[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.*\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/WenZhenBaZiPro.js

[mitm] 
hostname=bzpp2.iwzbz.com



***************************************/





var skm={"code":-1,"data":"3,砖石会员","validateKey":"","isSuccess":true};
$done({body:JSON.stringify(skm)});
