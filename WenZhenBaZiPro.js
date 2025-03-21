/**************************************
function：问真八字解锁砖石会员
author:   skm_1229
**************************************
[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.*\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/WenZhenBaZiPro.js

[mitm] 
hostname=bzpp2.iwzbz.com



***************************************/





var skm={"code":-1,"data":{"wxno2":"wzwh0307",vipLevel":3,"wxno4":"wen2021827,zhulu6020","wxno":"wen2021827","wxno3":"momo97097","expires":"2099-12-31 23:59:59"},"message":"","validateKey":"","isSuccess":true};
$done({body:JSON.stringify(skm)});
