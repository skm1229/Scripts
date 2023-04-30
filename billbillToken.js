var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = '_uuid=13AB40E3-1F3F-351F-45FA-19C483A4B34C85259infoc; buvid3=33EB5DB3-5273-4431-BEA6-B7A6E092162A167624infoc; Buvid=YA4B74AB146181B648D5940003B65FCCAAEA; DedeUserID=3493086384621868; DedeUserID__ckMd5=d425140d8c9e2683; SESSDATA=89c9f6a5%2C1684743184%2C863e02b1; bili_jct=626befe41a9207c97708881f038d168f; sid=8l2vlbcc';
modifiedHeaders['x-bili-device-bin'] = 'CAEQ5LuwIRokWUE0Qjc0QUIxNDYxODFCNjQ4RDU5NDAwMDNCNjVGQ0NBQUVBIgZpcGhvbmUqA2lvczIFcGhvbmU6BWFwcGxlQgVBcHBsZUoJaVBob25lIDExUgYxNS4zLjFqBTcuMC4wckAyQkIzQkExRjg4OUZFMDlERUFENTI3OEI2OEYyOTVCNzIwMjIxMDIwMDYwMjMxMzUwQkM1RDIzRDU3NTdBNzg2eNu+g6C5MA==';
modifiedHeaders['Authorization'] = 'identify_v1 ca988fd817c61f831fed14618f91b7b1';
modifiedHeaders['User-Agent'] = 'bili-universal/70700200 os/ios model/iPhone 6 mobi_app/iphone osVer/12.4.4 network/2';
modifiedHeaders['buvid'] = 'YA4B74AB146181B648D5940003B65FCCAAEA';
modifiedHeaders['x-bili-metadata-bin'] = 'CiBjYTk4OGZkODE3YzYxZjgzMWZlZDE0NjE4ZjkxYjdiMRIGaXBob25lGgVwaG9uZSDku7AhKgVhcHBsZTIkWUE0Qjc0QUIxNDYxODFCNjQ4RDU5NDAwMDNCNjVGQ0NBQUVBOgNpb3M=';
modifiedHeaders['x-bili-locale-bin'] = '';
modifiedHeaders['x-bili-network-bin'] = '';
modifiedHeaders['x-bili-fawkes-req-bin'] = '';
modifiedHeaders['x-bili-trace-id'] = '';
modifiedHeaders['x-bili-exps-bin'] = '';
modifiedHeaders['x-bili-network-bin'] = '';
$notify('改脚本已失效');
$done({
    'headers': modifiedHeaders
});;
