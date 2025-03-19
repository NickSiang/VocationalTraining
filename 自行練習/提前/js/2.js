// 如何使用字串和用法

var phrase = "hello" + "haha";
document.write(phrase + "HAHA")

// document.write{phrase.length};
var text ="哈哈";
document.write(phrase + text +"haha");

var ss ="bye";
document.write(ss.length)

document.write("<br/>");
/*var phrase = "hello" Mr.white";
document.write(phrase);*/

var phrase = "hello\" Mr.white";
document.write(phrase);
// 想在變數裡加入雙引號加入\

document.write("<br/>");

// 字串常見用法
var phrase = "hello" + "haha";
document.write(phrase.length);
// length回傳字串長度並回傳
document.write("<br/>");

document.write(phrase.toUpperCase());
// toUpperCase把字串字母變大寫並回傳
document.write("<br/>");

document.write(phrase.toLowerCase());
// toUpperCase把字串字母變小寫並回傳
document.write("<br/>");

document.write(phrase.charAt(1));
// charAt把字串第一個回傳(js所有數字都是重0開始)
document.write("<br/>");

document.write(phrase.indexOf("h"));
// index把字串對應的位置以數字回傳 裡面沒有的字元以-1 重複的會回傳近的位置
document.write("<br/>");

document.write(phrase.substring(1,5));
// substring回傳字串第幾到第幾之前
document.write("<br/>");