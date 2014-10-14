var Request = require('request');

var fs = require("fs");

//You need to prepare some valid proxies and save it in proxy.txt file
fs.readFile("proxy.txt",{encoding:"utf-8"}, function(err,content){
    content.split("\r\n").forEach(function(item){
    var request = Request.defaults({proxy:"http://" + item});
	//Use your site url and parameters which used for voting
    request.post({uri:" http://weike.ccen.com.cn/Works/AddYouKeVoteInfo",form:{sourcesInfo_Guid:"b761d2f3-e62e-4b37-85bb-38a0a12a658b"},encoding:"utf-8"},function(err,resp,body){
        if(err){
            console.log("vote failed");
        }
        else{
            console.log(body)
        }
    });
    });
});

