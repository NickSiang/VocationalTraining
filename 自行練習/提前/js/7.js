// if判斷

// 如果...我就...
var hungry = true;
var no_hungry = false;

if (hungry) {
    document.write("我就去吃飯")
}

if (no_hungry) {
    document.write("吃飯")
}

// (寫入判斷的東西)判斷成立{執行這邊程式碼}
document.write('<br/>');

// 如果...否則...

var rainy = false;
if (rainy) {
    document.write('我就開車');
}
else {
    document.write('我就走路')

};
document.write('<br/>');

// 如果分數我就給1000
// 或是如果...我就
// 或是如果...我就
// 否則...就

var score = 20;
// =等於把100這個值放到變數裡面
if (score == 100) {
    document.write('給1000');
}
else if (score >= 80) {
    document.write('給500');
}
else if (score >= 60) {
    document.write('給200');
}
else {
    document.write('沒錢')
}

// ==等於判斷左和右邊的值是否有相等
document.write('<br/>');

// 如果...且...
// 我給1000
// 否則你給1000

var score1 = 100;
var rainy1 = false;
if (score1 == 100 && rainy1) {
    document.write("我給1000")
}
else {
    document.write('你給1000')
}
// &&等於 且
// 左右需成立才會執行
document.write('<br/>');

// 如果...或...我給1000
// 否則你給100

var score2 = 90;
var rainy2 = false;

if (score2 == 100 || rainy2) {
    document.write('我給1000');
}
else (document.write('你給1000'))
// ||等於 或(shift+\) ||其中一邊true就全true
document.write('<br/>');

// 如果... 或...沒有
// 我給1000
// 否則
// 你給1000

var score3 = 100;
var rainy3 = false;

if (score3 == 100 || !rainy3) {
    document.write('我給1000');
}
else ('你給1000');

// !反面的意思可變布林值

document.write('<br/>');


function max_num(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    }

    else if (num2 >= num1 && num2 >= num3) {
        return num2;
    }

    else { return num3; }
}

document.write(max_num = (100, 90, 70));