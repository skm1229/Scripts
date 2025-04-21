/**************************************
function：问真八字解锁砖石会员
author:   skm_1229
**************************************
[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.*\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/WenZhenBaZiPro.js

[mitm] 
hostname=bzpp2.iwzbz.com



***************************************/





var objc = JSON.parse($response.body);
objc.data.adtype = 0;
objc.data.vipLevel = 3;
objc.data.vipTipsType = 0;
objc.data.expires = "2999-11-28 06:06:06";
$done({
  body: JSON.stringify(objc)
});
