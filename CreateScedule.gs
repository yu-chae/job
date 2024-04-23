/**
 * Googleカレンダーに予定を追加する
 * https://technical.verybestcbp.com/registfromsheetx/
 */
function CreateSchedule() {

  // googleカレンダーの取得
  const calendar = CalendarApp.getDefaultCalendar()

  // 読み取り範囲（表の始まり行と終わり列）
  const topRow = 2
  const lastCol = 7
  const statusCellCol = 1

  // 予定の一覧バッファ内の列(0始まり)
  const statusNum = 0
  const dayNum = 1
  const startNum = 2
  const endNum = 3
  const titleNum = 4
  const locationNum = 5
  const descriptionNum = 6

  // シートを取得
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet()

  // 予定の最終行を取得
  let lastRow = sheet.getLastRow()

  //予定の一覧をバッファに取得
  const contents = sheet.getRange(topRow, 1, sheet.getLastRow(), lastCol).getValues()

  //順に予定を作成
  for (let i = 0; i <= lastRow - topRow; i++) {

    //「済」の場合は無視する
    if (contents[i][statusNum] === "済") {
      continue
    }

    // 値をセット 日時はフォーマットして保持
    let day = contents[i][dayNum]
    let startTime = contents[i][startNum]
    let endTime = contents[i][endNum]
    let title = contents[i][titleNum]

    // 場所と詳細をセット
    let options = { location: contents[i][locationNum], description: contents[i][descriptionNum] }

    console.log(day + " " + contents[i][titleNum])

    try {
      // 開始終了時刻が無ければ終日で設定
      if (startTime == '' || endTime == '') {
        //予定を作成
        calendar.createAllDayEvent(
          title,
          day,
          options
        )

        // 開始終了時刻があれば範囲で設定
      } else {
        // 開始日時を作成
        let startDate = new Date(day)
        startDate.setHours(startTime.getHours())
        startDate.setMinutes(startTime.getMinutes())

        // 終了日時を作成
        let endDate = new Date(day)
        endDate.setHours(endTime.getHours())
        endDate.setMinutes(endTime.getMinutes())

        // 予定を作成
        calendar.createEvent(
          title,
          startDate,
          endDate,
          options
        )
      }

      //予定が作成されたら「済」にする
      sheet.getRange(topRow + i, statusCellCol).setValue("済")

      // エラーの場合ログ出力する
    } catch (e) {
      Logger.log(e)
    }
  }


}
