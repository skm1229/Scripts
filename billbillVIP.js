/****************************************

function:       哔哩哔哩  解锁大会员
author:         Skm_1229
app_version:    9.0
version:        1.0v

*****************************************

[rewrite_local]

^https?:\/\/app\.bilibili\.com\/x\/resource\/ip url reject
^http[s]?:\/\/api\.bilibili\.com\/x\/member\/app\/face\/update\?access_key url reject-200
^http[s]?:\/\/app\.bilibili\.com\/bilibili\.app\.interface\.v1\.Teenagers\/UpdateStatus url reject-200
^http[s]?:\/\/api\.bilibili\.com\/x\/member\/app\/uname\/update\?_device url reject-200
^http[s]?:\/\/.*passport-login\/revoke url reject
^http[s]?:\/\/api\.biliapi\.net\/x\/v2\/reply\/add url reject-200
^http[s]?:\/\/passport\.bilibili\.com\/x\/passport-login\/type url reject
^http[s]?:\/\/api\.bilibili\.com\/x\/v2\/reply\/add url reject-200
^http[s]?:\/\/app\.bilibili\.com\/x\/v2\/splash\/show url reject-dict
^http[s]?:\/\/((app)|(passport)|(api))\.bilibili\.com\/x\/.*(account\/mine\?|passport-login|vip|show\/tab|account\/myinfo\?).*$ url script-response-body https://raw.githubusercontent.com/skm1229/Scripts/main/billbillVIP.js
^http[s]?:\/\/((app)|(passport)|(api))\.bilibili\.com\/(bilibili|x\/v2|x\/vip|x\/resource|x\/passport).*$ url script-request-header https://raw.githubusercontent.com/skm1229/Scripts/main/billbillToken.js

#去播放页面Ad原作者脚本库 https://github.com/app2smile/rules
^https:\/\/app\.bilibili\.com\/bilibili\.app\.(view\.v1\.View\/View|dynamic\.v2\.Dynamic\/DynAll|playurl\.v1\.PlayURL\/PlayView)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/bilibili-proto.js


[mitm]

hostname = *.biliapi.*,*.bilibili.*

*****************************/

var Body = $response["body"];
var Url = $request["url"];

var User_Body = JSON["parse"](Body);

const URI1 = "https://app.bilibili.com/x/v2/account/myinfo?";
const URI2 = "https://api.bilibili.com/x/vip/price/panel/v10?";
const URI3 = "https://app.bilibili.com/x/resource/show/tab/v2";
const URI4 = "https://app.bilibili.com/x/v2/account/mine?access_key";
const URI5 = "https://api.bilibili.com/x/vip/web/vip_center/combine?";
const URI6 = "https://passport.bilibili.com/x/passport-login/oauth2/";

if (Url["indexOf"](URI1) != -1) {
    let VIP_Body = JSON["parse"](Body);

    VIP_Body["data"]["vip"]["type"] = 2;
    VIP_Body["data"]["vip"]["status"] = 1;
    VIP_Body["data"]["vip"]["vip_pay_type"] = 1;
    VIP_Body["data"]["vip"]["due_date"] = 1796054400000;
    Body = JSON["stringify"](VIP_Body);
}

if (Url["indexOf"](URI2) != -1) {

    delete User_Body["data"]["privileges"];
    delete User_Body["data"]["panel_info"];
    delete User_Body["data"]["other_open_info"];
    delete User_Body["data"]["banner_list"];
    delete User_Body["data"]["tv_price_list"];
    delete User_Body["data"]["panel_protocol_info"];
    User_Body["data"]["auto_renew_statement"] = "https://github.com/skm1229/Scripts";
    User_Body["data"]["user_info"]["user_explain"] = "2999-90-90 年";
    User_Body["data"]["user_info"]["tv_user_explain"] = "到期时间: 2999-09-09";
    User_Body["data"]["user_info"]["user_name"] = "Skm_1229";
    User_Body["data"]["user_info"]["hide_tel"] = "Skm_1229";
    Body = JSON["stringify"](User_Body);
}

Url["indexOf"](URI3) != -1 && (delete User_Body["data"]["bottom"][3], delete User_Body["data"]["bottom"][2], Body = JSON["stringify"](User_Body));

if (Url["indexOf"](URI4) != -1) {
    const png1 = {
        "id": 396,
        "title": "缓存",
        "icon": "http://i0.hdslb.com/bfs/archive/5fc84565ab73e716d20cd2f65e0e1de9495d56f8.png",
        "common_op_item": {},
        "uri": "bilibili://user_center/download"
    };
    const png2 = {
        "id": 397,
        "title": "记录",
        "icon": "http://i0.hdslb.com/bfs/archive/8385323c6acde52e9cd52514ae13c8b9481c1a16.png",
        "common_op_item": {},
        "uri": "bilibili://user_center/history"
    };
    const png3 = {
        "id": 398,
        "title": "收藏",
        "icon": "http://i0.hdslb.com/bfs/archive/d79b19d983067a1b91614e830a7100c05204a821.png",
        "common_op_item": {},
        "uri": "bilibili://user_center/favourite"
    };
    const png4 = {
        "id": 399,
        "title": "历史",
        "icon": "http://i0.hdslb.com/bfs/archive/63bb768caa02a68cb566a838f6f2415f0d1d02d6.png",
        "need_login": 1,
        "uri": "bilibili://user_center/watch_later",
        "common_op_item": {}
    };
    const png5 = {
        "items": [png1, png2, png3, png4],
        "style": 1,
        "button": {}
    };
    const png6 = {
        "url": "https://github.com/skm1229/Scripts",
        "text": "关注作者GitHub",
        "progress": ''
    };
    const png7 = {
        "birthday_conf": null,
        "bubble": '',
        "member_text": ''
    };
    const png8 = {
        "width": 1.35,
        "height": 1.35
    };
    const png9 = {
        "argb": "#FFFFFFFF"
    };
    const png10 = {
        "argb": "#FF17181A"
    };
    const png11 = {
        "day": png9,
        "night": png10,
        "is_dark_mode_aware": true
    };
    const png12 = {
        "fill_mode": 1,
        "draw_type": 1,
        "color_config": png11
    };
    const png13 = {
        "draw": png12,
        "src_type": 3
    };
    const png14 = {
        "draw_src": png13
    };
    const png15 = {
        "res_type": 5,
        "res_native_draw": png14
    };
    const png16 = {
        "axis_x": 0.675,
        "axis_y": 0.675,
        "coordinate_pos": 2
    };
    const png17 = {
        "width": 1.0625,
        "height": 1.0625
    };
    const png18 = {
        "opacity": 1
    };
    const png19 = {
        "pos_spec": png16,
        "size_spec": png17,
        "render_spec": png18
    };
    const png20 = {
        "AVATAR_LAYER": {}
    };
    constpng21 = {
        "tags": png20,
        "is_critical": true
    };
    const png22 = {
        "resource": png15,
        "general_spec": png19,
        "layer_config": png21,
        "visible": true
    };
    const UserImg = {
        "url": "https://i0.hdslb.com/bfs/face/0afb1bf3999402aaac7182a240a48db923e0a0ee.jpg",
        "bfs_style": "widget-layer-avatar"
    };
    const UserImgCss1 = {
        "placeholder": 6,
        "src_type": 1,
        "remote": UserImg
    };
    const UserImgCss2 = {
        "image_src": UserImgCss1
    };
    const UserImgCss3 = {
        "res_type": 3,
        "res_image": UserImgCss2
    };
    const UserImgCss4 = {
        "axis_x": 0.675,
        "axis_y": 0.675,
        "coordinate_pos": 2
    };
    const UserImgCss5 = {
        "width": 1,
        "height": 1
    };
    const UserImgCss6 = {
        "opacity": 1
    };
    const UserImgCss7 = {
        "pos_spec": UserImgCss4,
        "size_spec": UserImgCss5,
        "render_spec": UserImgCss6
    };
    const UserImgCss8 = {
        "axis_x": 0.675,
        "axis_y": 0.675,
        "coordinate_pos": 2
    };
    const UserImgCss9 = {
        "width": 1,
        "height": 1
    };
    const UserImgCss10 = {
        "opacity": 1
    };
    const _0x9af3c4 = {
        "pos_spec": UserImgCss8,
        "size_spec": UserImgCss9,
        "render_spec": UserImgCss10
    };
    const UserImgCss11 = {
        "argb": "#FF000000"
    };
    const UserImgCss12 = {
        "day": UserImgCss11
    };
    const UserImgCss13 = {
        "fill_mode": 1,
        "draw_type": 1,
        "color_config": UserImgCss12
    };
    const UserImgCss14 = {
        "draw": UserImgCss13,
        "src_type": 3
    };
    const UserImgCss15 = {
        "general_spec": _0x9af3c4,
        "mask_src": UserImgCss14
    };
    const UserImgCss16 = {
        "AVATAR_LAYER": {}
    };
    const UserImgCss17 = {
        "layer_mask": UserImgCss15,
        "tags": UserImgCss16,
        "is_critical": true
    };
    const _0x32f2b2 = {
        "resource": UserImgCss3,
        "general_spec": UserImgCss7,
        "layer_config": UserImgCss17,
        "visible": true
    };
    const UserImgCss18 = {
        "argb": "#FFFFFFFF"
    };
    const UserImgCss19 = {
        "argb": "#FF17181A"
    };
    const _0x395645 = {
        "day": UserImgCss18,
        "night": UserImgCss19,
        "is_dark_mode_aware": true
    };
    const UserImgCss20 = {
        "fill_mode": 1,
        "draw_type": 1,
        "color_config": _0x395645
    };
    const UserImgCss21 = {
        "draw": UserImgCss20,
        "src_type": 3
    };
    const _0x21c74a = {
        "draw_src": UserImgCss21
    };
    const UserImgCss22 = {
        "res_type": 5,
        "res_native_draw": _0x21c74a
    };
    const UserImgCss23 = {
        "resource": UserImgCss22,
        "visible": true
    };
    const UserImgCss24 = {
        "local": 1,
        "src_type": 2
    };
    const UserImgCss25 = {
        "image_src": UserImgCss24
    };
    const UserImgCss26 = {
        "res_type": 3,
        "res_image": UserImgCss25
    };
    const UserImgCss27 = {
        "resource": UserImgCss26,
        "visible": true
    };
    const UserImgCss28 = {
        "layers": [png22, _0x32f2b2, UserImgCss23, UserImgCss27],
        "is_critical_group": true
    };
    const UserImgCss29 = {
        "container_size": png8,
        "fallback_layers": UserImgCss28,
        "mid": "3493265946971025"
    };
    const UserImgCss30 = {
        "type": -1,
        "desc": ''
    };
    const bilbill_vip_icon = {
        "bg_color": "#FB7299",
        "bg_style": 1,
        "text": "暂无",
        "border_color": '',
        "path": '',
        "image": "https://i0.hdslb.com/bfs/vip/3788b674c69072f1ee252b79a31ecc8c43af3039.png",
        "label_theme": "vip",
        "text_color": "#FFFFFF"
    };
    const bilbill_vip_status = {
        "status": 1,
        "avatar_subscript": 1,
        "nickname_color": '',
        "due_date": 1682092800000,
        "role": 1,
        "vip_pay_type": 0,
        "avatar_subscript_url": '',
        "label": bilbill_vip_icon,
        "type": 1,
        "themeType": 0,
        "theme_type": 0
    };
    const bilbill_vip_data = {
        "bcoin": 10000000000,
        "enable_bili_link": true,
        "achievement": {},
        "silence": 0,
        "show_creative": 0,
        "level": 6,
        "audio_type": 0,
        "sections_v2": [png5],
        "rank": 5000,
        "follower": 0,
        "answer": png6,
        "dynamic": 0,
        "show_nft_face_guide": false,
        "show_name_guide": false,
        "coin": 10000000000,
        "bubbles": null,
        "following": 0,
        "sex": 0,
        "show_videoup": 1,
        "senior_gate": png7,
        "name": "Skm_1229",
        "avatar": UserImgCss29,
        "new_followers": 0,
        "new_followers_rtime": 5000,
        "answer_status": 1,
        "mid": 3493265946971025,
        "show_face_guide": false,
        "in_reg_audit": 0,
        "face": "https://i0.hdslb.com/bfs/face/0afb1bf3999402aaac7182a240a48db923e0a0ee.jpg",
        "face_nft_new": 0,
        "official_verify": UserImgCss30,
        "vip": bilbill_vip_status,
        "first_live_time": 0,
        "vip_type": 1
    };
    const bilbill_vip_code = {
        "code": 0,
        "message": "0",
        "ttl": 1,
        "data": bilbill_vip_data
    };
    User_Body = bilbill_vip_code;
    Body = JSON["stringify"](User_Body);
}

if (Url["indexOf"](URI5) != -1) {
    const _0x12b86d = {
        "mid": 1,
        "name": "Skm_1229QAQ~",
        "sex": "男",
        "face": "https://i0.hdslb.com/bfs/face/0afb1bf3999402aaac7182a240a48db923e0a0ee.jpg",
        "sign": '',
        "rank": 5000,
        "birthday": 315504000,
        "is_fake_account": 0,
        "is_deleted": 0,
        "in_reg_audit": 0,
        "is_senior_member": 0
    };
    const _0x43a055 = {
        "text": "暂无",
        "label_theme": "vip",
        "text_color": "#FFFFFF",
        "bg_style": 1,
        "bg_color": "#FB7299",
        "border_color": '',
        "use_img_label": true,
        "img_label_uri_hans": '',
        "img_label_uri_hant": '',
        "img_label_uri_hans_static": "https://i0.hdslb.com/bfs/vip/3788b674c69072f1ee252b79a31ecc8c43af3039.png",
        "img_label_uri_hant_static": "https://i0.hdslb.com/bfs/activity-plat/static/20220614/e369244d0b14644f5e1a06431e22a4d5/jwXBWRVwa5.png"
    };
    const _0x44039f = {
        "mid": 1,
        "vip_type": 1,
        "vip_status": 1,
        "vip_due_date": 1682092800000,
        "vip_pay_type": 0,
        "theme_type": 0,
        "label": _0x43a055,
        "avatar_subscript": 1,
        "avatar_subscript_url": "https://i0.hdslb.com/bfs/vip/icon_Certification_big_member_22_3x.png",
        "nickname_color": '',
        "is_new_user": false,
        "tip_material": null
    };
    const _0x29b57a = {
        "type": 0,
        "vip_pay_type": 0,
        "status": 0,
        "due_date": 0
    };
    const _0x31b2d6 = {
        "text": '',
        "link": ''
    };
    const _0x187775 = {
        "text": '',
        "tv_text": '',
        "type": 0,
        "can_close": false,
        "surplus_seconds": 0,
        "tv_surplus_seconds": 0
    };
    const _0x3fc58f = {
        "account": _0x12b86d,
        "vip": _0x44039f,
        "tv": _0x29b57a,
        "background_image_small": '',
        "background_image_big": '',
        "panel_title": "Skm_1229",
        "panel_sub_title": '',
        "avatar_pendant": null,
        "vip_overdue_explain": "到期时间 2999/09/09",
        "tv_overdue_explain": "到期时间 2999/09/09",
        "account_exception_text": '',
        "is_auto_renew": false,
        "is_tv_auto_renew": false,
        "surplus_seconds": 2617282,
        "vip_keep_time": 1679404055,
        "renew": _0x31b2d6,
        "notice": _0x187775
    };
    const _0x2dea52 = {
        "coupon": 0,
        "point": 0,
        "privilege_received": true
    };
    const _0x370da3 = {
        "point": 0,
        "expire_point": 0,
        "expire_time": 0,
        "expire_days": 0
    };
    const _0x4207f6 = {
        "sign_remind": true,
        "benefit": 5,
        "bonus_benefit": 100,
        "normal_remind": true,
        "muggle_task": true
    };
    const _0x442e62 = {
        "point_info": _0x370da3,
        "sign_info": _0x4207f6,
        "sku_info": {},
        "point_switch_off": false
    };
    const _0x2b653c = {
        "user": _0x3fc58f,
        "wallet": _0x2dea52,
        "in_review": false,
        "big_point": _0x442e62,
        "hot_list": {}
    };
    const _0x384107 = {
        "code": 0,
        "message": "0",
        "ttl": 1,
        "data": _0x2b653c
    };
    User_Body = _0x384107;
    Body = JSON["stringify"](User_Body);
}

if (Url["indexOf"](URI6) != -1) {
    const _0x520716 = {
        "refresh_token": "4b5c42d38484bc79fbd3918fe67ed631",
        "mid": 3493265946971025,
        "expires_in": 15552000,
        "access_token": "f4dc6b6174b749e1ed32617550f59131"
    };
    const _0x5b9eeb = {
        "status": 0,
        "is_new": false,
        "token_info": _0x520716,
        "is_tourist": false,
        "url": ''
    };
    const _0x23d019 = {
        "code": 0,
        "message": "0",
        "ttl": 1,
        "data": _0x5b9eeb
    };
    User_Body = _0x23d019;
    Body = JSON["stringify"](User_Body);
    $notify("该脚本已失效");
}

const Json_body = {
    "body": Body
};
$done(Json_body);
