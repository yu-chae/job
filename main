/** 
* https://www.yukibnb.com/entry/2020/01/08/223405
*/
function onOpen() {
  var ui = SpreadsheetApp.getUi()
  
  //メニュー名を決定
  var menu = ui.createMenu("スクリプト実行");
  
  //メニューに実行ボタン名と関数を割り当て: その1
  menu.addItem("カレンダーに書き込み","toCalender");
  
  //スプレッドシートに反映
  menu.addToUi();
}

function toCalender() {
  CreateSchedule();//カレンダーへの転記
  rev_PastedData();//削除
  var msg = "Googleカレンダーへの転記が完了いたしました！"
  Browser.msgBox(msg);
}
