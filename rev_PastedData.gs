function rev_PastedData() {
    const ss =  SpreadsheetApp.getActive();
  const sheet = ss.getSheetByName("自動カレンダー書き込み");


  var range1 = sheet.getRange("A8:A38");
  range1.clearContent();
 
   var range3 = sheet.getRange("I3");
  range3.clearContent();
  
  /**


 const today = new Date();
 const data  = new Date(today.getTime());
 const month = data.getMonth()+1;
 const date  = data.getDate();
 const yesterday = Utilities.formatDate(data, "JST", "M/d");

 console.log(yesterday)

 const old_Sheet = ss.getSheetByName(yesterday);
 console.log(old_Sheet)

　if (old_Sheet != null ){
　　ss.deleteSheet(old_Sheet) 
  }else{}

 sh1.clearContents();
 


 Browser.msgBox("過去データを削除しました。特定JOB・乗務割データの貼り付けに進んでください。")
*/

}
