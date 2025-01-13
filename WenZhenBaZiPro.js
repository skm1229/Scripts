[rewrite_local]
^https?:\/\/bzpp2\.iwzbz\.com\/api\/.*\/user\/getvipinfo url script-response-body https://github.com/skm1229/Scripts/WenZhenBaZiPro.js


[mitm] 
hostname=bzpp2.iwzbz.com









var body={"code":-1,"data":{"vipTipsType":0,"vipLevel":3,"adtype":0,"expires":"2099-12-31 23:59:59"},"message":"","validateKey":"","isSuccess":true};
$done({body:JSON.stringify(body)});
