// 陣列
// 此為一陣列
var scores = [80,70,40,50,90];

var score1 = 80;
var score2 = 70;
var score3 = 40;
var score4 = 50;
var score5 = 90;

document.write(scores);
document.write("<br/>");

var scores = [80,70,40,50,90];
document.write(scores[2]);
// 可取得第二位的值
document.write("<br/>");

var scores = [80,70,40,50,90];
scores[0] = 20;
// 修改陣列的值
document.write(scores[0]);
document.write("<br/>");

var friends = ["白","黃","黑"];
document.write(friends[0]);
// 串列為字串
document.write("<br/>");

var other = [true,false,true];
// 串列為布林值
document.write(other[0]);
document.write("<br/>");


var others = [true,8,"黃",6];
// 串列為混和
document.write(others);
document.write(others.length);
// 取得陣列長度或幾個值