// 函式 預先寫好的程式碼 呼叫才會執行

function hello(name, age) {
    document.write("你好" + name + "你今年" + age + "歲")
}
// 定義函式
// ()代表函示要回傳一個資訊叫做name

hello("翔", 23);

document.write("<br/>");
// hello(123);
// 呼叫函式
document.write("<br/>");

function add(num1, num2) {
    document.write(num1 + num2);
    document.write("<br/>");
    return num1 + num2;
   
    // 回傳值覆蓋原先的呼叫(這邊只直接把相加結果回傳)
    // 回傳因為通常函式大部分運行完把運算結果回來 回傳後可能還會運算處理
    // 函示只要碰到return就不會在運行
}

document.write(add(3, 5));
document.write("<br/>");

function add(num1, num2) {
    document.write(num1 + num2);
    document.write("<br/>");
    return 10;}

value =add(3,2);
document.write( value )

// 先回傳num1+num2 再回傳return 10