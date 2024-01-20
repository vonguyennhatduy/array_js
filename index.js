

var lists = [];



document.getElementById('btnAdd').onclick = function (){
    var n = document.getElementById('inputArray').value * 1;
    lists.push(n);
    document.getElementById('txtLists').innerHTML = lists;
}

// tính tổng số dương

document.getElementById('btnPos').onclick = function (){
    var ans = 0;
    for(var i = 0; i < lists.length; i++){
        if(lists[i] > 0){
            ans += lists[i];
        }
    }

    document.getElementById('kq1').innerHTML = "Tổng số dương trong mảng: " + ans;
}

// đếm số dương

document.getElementById('btnCntMin').onclick = function (){
    var ans = 0;
    for(var i = 0; i < lists.length; i++){
        if(lists[i] > 0){
            ans++;
        }
    }
    document.getElementById('kq2').innerHTML = "Số lượng số dương trong mảng: " + ans;

}

// số nhỏ nhất 
document.getElementById('btnMin').onclick = function (){
    var ans = lists[0];
    for(var i = 1; i < lists.length; i++){
        if(lists[i] < ans)
            ans = lists[i];
    }
    document.getElementById('kq3').innerHTML = "Số nhỏ nhất trong mảng: " + ans;
}

// tìm số dương nhỏ nhất
document.getElementById('btnPosMin').onclick = function (){
    var ans = 1000000000000000000;
    for(var i = 0; i < lists.length; i++){
        if(lists[i] > 0){
            if(lists[i] < ans){
                ans = lists[i];
            }
        }
    }
    document.getElementById('kq4').innerHTML = "Số dương nhỏ nhất trong mảng: " + ans;
}

// tìm số chẵn cuối cùng 

document.getElementById('btnLastEven').onclick = function () {
    var ans = 0;
    for(var i = 0; i < lists.length; i++){
        if(lists[i] % 2 == 0)
            ans = lists[i];
    }
    document.getElementById('kq5').innerHTML = "Số chẵn cuối cùng: " + ans;
}

// Đổi chổ

document.getElementById('btnSwap').onclick = function (){
    var id1 = document.getElementById('firstIndex').value * 1;
    var id2 = document.getElementById('secondIndex').value * 1;
    var tmp = lists[id1];
    lists[id1] = lists[id2];
    lists[id2] = tmp;

    document.getElementById('kq6').innerHTML = "Mảng sau khi đổi là: " + lists;
}

// sắp xếp tăng dần 

document.getElementById('btnSort').onclick = function  (){
    for(var i = 0; i < lists.length - 1; i++){
        for(var j = i + 1; j < lists.length; j++){
            if(lists[i] > lists[j]){
                var tmp = lists[i];
                lists[i] = lists[j];
                lists[j] = tmp;
            }
        }
    }

    document.getElementById('kq7').innerHTML = "Mảng sau khi sắp xếp là: " + lists;
}

// tìm số nguyên tố đầu tiên 

document.getElementById('btnFirstPrime').onclick = function (){
    var ans = -1;
    for(var i = 0; i < lists.length; i++){
        var cnt = 0;
        for(var j = 2; j <= Math.sqrt(lists[i]); j++){
            if(lists[i] % j == 0){
                cnt++;
            }
        }
        if(cnt == 0){
            ans = lists[i];
            break;
        }
    }

    if(ans !== -1){
        document.getElementById('kq8').innerHTML = "Số nguyên tố đầu tiên: " + ans;
    }else {
        document.getElementById('kq8').innerHTML = "Không có số nguyên tố ";
    }
}

// đếm số nguyên

var array = [];

document.getElementById('btnCntInt').onclick = function () {
    var n = document.getElementById('txtINT').value * 1;
    array.push(n);

    document.getElementById('ARRAY2').innerHTML = array;
}

document.getElementById('btnInt').onclick = function (){
    var ans = 0;
    for(var i = 0; i < array.length; i++){
        if(Number.isInteger(array[i])){
            ans++;
        }
    }

    document.getElementById('kq9').innerHTML = "Số nguyên: " + ans;
}


// so sánh số âm số dương

document.getElementById('btnCompare').onclick = function (){
    var am = 0,duong = 0;
    for(var i = 0; i < lists.length; i++){
        if(lists[i] < 0)
            am++;
        else if(lists[i] > 0) duong++;
    }

    if(duong > am){
        document.getElementById('kq10').innerHTML = "Số dương > Số âm";
    }else if(duong === am){
        document.getElementById('kq10').innerHTML = "Số dương = Số âm";
    }else document.getElementById('kq10').innerHTML = "Số âm > Số dương";
}
