body = $request["body"]["replace"](/token":"[^"]+/g, "token\":\"20230523gn8FFgKYrADixCQlbAI");
var Json_body = {
    "body": body
};
$done(Json_body);
