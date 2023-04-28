/***********************************
function：    Fileball 解锁PRO会员权限
author:       Skm_1229
app_version:  1.2.8
version:      1.0v
************************************

[rewrite_local]
  
^https?:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/*) url script-echo-response https://raw.githubusercontent.com/skm1229/Scripts/main/fileballPRO.js
^https?:\/\/firebaseremoteconfig\.googleapis\.com\/v\d\/projects\/filebox url script-echo-response https://raw.githubusercontent.com/skm1229/Scripts/main/fileballPRO.js

[mitm] 

hostname=api.revenuecat.com,firebaseremoteconfig.googleapis.com

***********************************/


if ($request["url"]["indexOf"]("offerings") > -1) {
    var Body = {
        "current_offering_id": "pro",
        "offerings": [
            {
                "description": "Pro to access all features",
                "identifier": "pro",
                "packages": [{
                    "identifier": "filebox_pro",
                    "platform_product_identifier": "filebox_pro"
                }]
            },
            {
                "description": "just a test",
                "identifier": "sale",
                "packages": [{
                    "identifier": "$rc_monthly",
                    "platform_product_identifier": "filebox_pro"
                }]
            }
        ]
    };
    $done({ body: JSON["stringify"](Body) });
} else {
    if ($request["url"]["indexOf"]("firebaseremoteconfig") > -1) {
        var Body = {
            "entries": {
                "verify_receipt": "false",
                "reset_pro_if_transcation_id_missing": "false",
                "set_fake_pro_when_loading_offers_failed": "false",
                "verify_receipt_with_firebase": "false",
                "check_receipt_data": "false",
                "check_transcation_id_white_list": "",
                "enable_dandanplay": "true",
                "verify_product_identifier": "false",
                "clean_etag_when_loading_offsers_failed": "flase",
                "blacklist": "{\\\"list\\\":[]}",
                "detect_malformed": "false",
                "library_search_movie": "{\\\"enable\\\":true,\\\"source\\\":\\\"tmdb\\\"}",
                "enable_search_lyrics": "false"
            },
            "appName": "me.shuifeng.Filebox",
            "state": "UPDATE",
            "templateVersion": "42"
        };
        $done({ body: JSON["stringify"](Body) });
    } else {
        var Body = {
            "request_date": "2021-07-13T01:12:58Z",
            "request_date_ms": 1626138778636,
            "subscriber": {
                "entitlements": {
                    "filebox_pro": {
                        "expires_date": null,
                        "grace_period_expires_date": null,
                        "product_identifier": "filebox_pro",
                        "purchase_date": "2021-07-13T01:12:01Z"
                    }
                },
                "first_seen": "2021-07-13T00:26:51Z",
                "last_seen": "2021-07-13T00:26:51Z",
                "management_url": null,
                "non_subscriptions": {
                    "filebox_pro": [{
                        "id": "0522b91781",
                        "is_sandbox": false,
                        "original_purchase_date": "2021-07-13T01:12:01Z",
                        "purchase_date": "2021-07-13T01:12:01Z",
                        "store": "app_store"
                    }]
                },
                "original_app_user_id": "$RCAnonymousID:Body",
                "original_application_version": "1.0",
                "original_purchase_date": "2013-08-01T07:00:00Z",
                "other_purchases": { "filebox_pro": { "purchase_date": "2021-07-13T01:12:01Z" } },
                "subscriptions": {}
            }
        };
        $done({ body: JSON["stringify"](Body) });
    }
}
;
