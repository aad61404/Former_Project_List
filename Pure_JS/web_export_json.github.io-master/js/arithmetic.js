function subtract() {  //減法
    var x = document.getElementById("calculate-people").value;
    x = parseInt(x);
    x = x - 1 ;
    document.getElementById("calculate-people").value = parseInt(x);
    //console.log(x);
}

function add() {   //加法
    var x = document.getElementById("calculate-people").value;
    x = parseInt(x);
    x = x + 1 ;
    document.getElementById("calculate-people").value = parseInt(x);
    //console.log(x); 
}

// 確認鍵  後 開啟 視窗
function show_alert_1(){
    document.getElementById('alert-1').style.display="block"; //this is the replace of this line
    
}

// 確認鍵  後 關閉 式窗
function close_alert_1(){
    document.getElementById('alert-1').style.display="none"; //this is the replace of this line
}




//----------------------------------------------

