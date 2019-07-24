
var obj = {
    请选择游戏类型: "",
    服务器: "",
    在线人数: "",
    租用时长: "",
    产品名称: "",
    产品logo: "",
    产品模板: ""

};

function exportJson(el) {  // 输出成Json档
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));
    // what to return in order to show download window?

    el.setAttribute("href", "data:"+data);  // 设定成href 网址
    el.setAttribute("download", "data.json");  //设定可下载
    
}



function myFunction1() {  //
    var choose_type = document.forms[0];  //设定第一个forms 里的参数 ->请选择游戏类型
    var serve = document.forms[1];        //设定第二个forms 里的参数 ->服务器
    var online_peo = document.forms[2];   //设定第三个forms 里的参数 ->在线人数
    var rent_time = document.forms[3];    //设定第四个forms 里的参数 ->租用时长
    var space = "";                       //产品名称 暂时储存格
    var product_logo = document.forms[4]; //设定第五个forms 里的参数 ->产品logo
    var product_template  = document.forms[5]; //设定第六个forms 里的参数 ->产品模板
    var txt = "";  // 暂时储存格1 请选择游戏类型
    var txt2 = ""; // 暂时储存格2 服务器
    var txt3 = ""; // 暂时储存格3 在线人数
    var txt4 = ""; // 暂时储存格4 租用时长
    var txt5 = ""; // 产品logo
    var txt6 = ""; // 产品模板
    var i;
    
    // 请选择游戏类型
    for (i = 0; i < choose_type.length; i++) {
        if (choose_type[i].checked) {
            txt = txt + choose_type[i].value + " ";  // 找到checked 的值 取代txt
           
            obj.请选择游戏类型 = txt;  // 把新的txt值 丟入 obj里的请选择游戏类型
            // 请忽略-------------
            //document.write( obj.请选择游戏类型.push(" "));
            //obj.请选择游戏类型.push(" ");
            // 请忽略-------------
        }
        else {
            obj.请选择游戏类型 = txt;
        }
    }

//  依此类推 剩下的forms 做法 (目前为暴力解，之后找更佳解法)  
    //服务器
    for (i = 0; i < serve.length; i++) {
        if (serve[i].checked) {
            txt2 = txt2 + serve[i].value;  // 找到checked 的值 取代txt2
            obj.服务器 = txt2;  // 把新的txt2值 丟入 obj里的服务器
        }
        else {
            obj.服务器 = txt2;
        }
    }

    var Q = 0;
    //  在线人数
    for (i = 0; i < online_peo.length; i++) {
        if (online_peo[i].checked) {
            Q ++ ;
            txt3 = txt3 + online_peo[i].value;
            obj.在线人数 = txt3;
        } else {
            obj.在线人数 = txt3;
        }
    }

    if (Q === 0) {
        var h = document.getElementById("calculate-people").value;
        obj.在线人数 = h +"人";
    }


    //  租用时长
    for (i = 0; i < rent_time.length; i++) {
        if (rent_time[i].checked) {
            txt4 = txt4 + rent_time[i].value;
            obj.租用时长 = txt4;
        }
        else {
            obj.租用时长 = txt4;
        }
    }


    //  产品logo
    for (i = 0; i < product_logo.length; i++) {
        if (product_logo[i].checked) {
            txt5 = product_logo[i].value;
            obj.产品logo = txt5;
        }
        else {
            obj.产品logo = txt5;
        }
    }    

    //  产品模板
    for (i = 0; i < product_template.length; i++) {
        if (product_template[i].checked) {
            txt6 = txt6 + product_template[i].value;
            obj.产品模板 = txt6;
        }
        else {
            obj.产品模板 = txt6;
        }
    }

    // 产品名称 input text into object--------------------------------------
    var space = "";
    var gt =document.getElementById("fruit22").value;
    space = gt; 
    obj.产品名称 = space; 
    console.log(space);

    // console--------------------------------------

    console.log(txt);
    console.log(obj);

}

// input txt id calculate-people  開關 (id : 自定義)-----------------------------
function open_disable() { //關
    document.getElementById("calculate-people").disabled = false;   // input:txt 關閉
    document.getElementById("fruit14").checked = false;  // 取消 在線人數 10 ~ 15人的 checked
    document.getElementById("fruit15").checked = false;
    document.getElementById("fruit16").checked = false;
    document.getElementById("fruit17").checked = false;
    document.getElementById("fruit18").checked = false;
    document.getElementById("add").disabled = false;
    document.getElementById("minus").disabled = false;
}

function close_disable() {  //開
    document.getElementById("calculate-people").disabled = true;
    document.getElementById("calculate-people").value = 0;
    document.getElementById("add").disabled = true;
    document.getElementById("minus").disabled = true;

}