/***************************************

function：解锁网易云VIP
author:   Skm_1229

**************************************
[mitm]

hostname = *.music.163.com

[rewrite_local]

^http[s]?:\/\/.+music.+(player\/url|playlist|entrance|\/eapi\/search\/).*$ url script-request-header https://raw.githubHeaderscontent.com/skm1229/Scripts/main/wyyVip.js

**************************************/

var Headers = $request['headers'];
Headers['Cookie'] = 'MUSIC_U=00879D711008177595003F53CCDE0C1D740CDB268EBCDF80326677ECA774DAA03FE7CDCB63CC10C2A32761DD9B68D6E4F6E7B34BFC0EB4CD8846C6B6303623F480E8646F1923D15D23301FDA36AEF4CB18D78EB88612FF9E1D1043C3D37372DD4B69B92F6DA8ACD742937B9BD4F19C833E59AD77E5E55C13D70130D46C87AE10EE8258DDC0DA9842F3F0C997DCE268D55A61AF38D6B3C02F776512DD64D413C859F4926B5015A9499A95B42D4827B2F209EFFD9AF10E96AE1C35258E2A07A717C393AFE3C9DBAD8F2B609305EEFF732A6F4BF4BAB7CD819123E1B7E970443D996FB30E6DBF27DC257238548A9C0DE90E0ED555C1766EB3FD56C6ACB8B78DD51AA23B5B7DC9A5B0F357FE76945CAAC4E3BE042E2EB7DBFD1EC7BECA003CBFC4F8BB; NMTID=00O0XnRuDKVYuGLZUmWuDXjDM6QlIAAAAGFR4VF1Q; buildver=3410; channel=distribution; packageType=release; EVNSM=1.0.0; appver=8.9.0; deviceId=584f9e086619c49adc651e974f788304; os=iPhone OS; osver=15.3.1; machineid=iPhone12.1; NMCID=ihqkmu.1671942201000.01.3; appkey=IuRPVVmc3WWul9fT; URS_APPID=6C91998A40B95E9C6B4026E343CBEFD1E74101A3F1B7331CDAE908723504AD5AB6293116B121D6872A9FEA6913295501; NMDI=Q1NKTQcBDACbErxd1z72k52XF%2BuVAAAAczCWNM1BcpDnv8VMC7jX2vpZ%2F%2BbADEW%2BajsWvQm6Y4UTbj47v6eXdmPafK6CZGmYV3yVdGMjYdGOF9PXHRaFlUJi%2Fs%2Fp2Rm321zuQdQiRGlbvQlztsLGQtdPeLiEUKBvY1LMoDgP0LKv%2Fo1hhHYT1Mwcd3%2F49R05KeeyCPUhJWQuOAfOc%2BpVQfDn%2FJDCrv6zG%2F45sV0%3D';
Headers['Headers-Agent'] = 'NeteaseMusic 8.7.85/2956 (iPhone; iOS 15.3.1; zh_CN)';
Headers['MConfig-Info'] = '{"zr4bw6pKFDIZScpo":{"version":319488,"appver":"8.9.0"},"c0Ve6C0uNl2Am0Rl":{"version":591872,"appver":"1.7.50"},"tPJJnts2H31BZXmp":{"version":1183744,"appver":"2.0.30"},"IuRPVVmc3WWul9fT":{"version":5195968,"appver":"8.9.0"}}';
$done({
    'headers': Headers
});;
