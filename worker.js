var json = []
var url = "https://zlc1003.github.io/es/as.json"/*json文件url，本地的就写本地的位置，如果是服务器的就写服务器的路径*/
var request = new XMLHttpRequest();
request.open("get", url);/*设置请求方法与路径*/
request.send(null);/*不发送数据到服务器*/
request.onload = function () {/*XHR对象获取到返回信息后执行*/
    if (request.status == 200) {/*返回状态为200，即为数据获取成功*/

        json = JSON.parse(request.responseText);
        //set json to first 100 of json
        // console.log(json);
        // json = json.slice(0, 1500);
        // json = json.slice(70, 100);// debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug // debug //
        let lj = document.getElementById("lg")
        console.log("start to load")
        inhtml = '<div id="lrs" style="display: none;"><p>nothing here ;)</p><button onclick="lessupdate()">low accuracy search?</button></div>'
        for (var i = 0; i < json.length; i++) {
            max = 20
            id = json[i]
            aud = id
            inhtml += "<button type=\"button\" class=\"list-group-item list-group-item-action hahahajoejoebtnbtn\" onclick=\"copyandplay('" + json[i] + "')\">" + aud + "</button>";
        }
        lj.innerHTML = inhtml
        console.log("end to load")
    }
    else {
        console.log("Request failed! ");
        alert("Request failed! \n NETORK_ERROR_CODE_" + request.status);
    }
}