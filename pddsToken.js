body = $request["body"]["replace"](/token":"[^"]+/g, "token\":\"20230429urnVlQuVyrJyIzkYDvN");
var Json_body = {
    "body": body
};
$done(Json_body);
