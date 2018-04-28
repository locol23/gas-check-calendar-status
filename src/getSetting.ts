const getSetting = () => {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Settings');
  const values = sheet.getDataRange().getValues();
  let calendarNameCol: number = 0;
  let calendarIdCol: number = 0;
  let termCol: number = 0;
  const result: Array<Object> = [];

  for (let i = 0, len = values[0].length; i < len; i++) {
    if (values[0][i] === 'CalendarName') calendarNameCol = i;
    if (values[0][i] === 'CalendarId') calendarIdCol = i;
    if (values[0][i] === 'Term') termCol = i;
  }
  for (let i = 1, len = values.length; i < len; i++) {
    result.push({
      calendarName: values[i][calendarNameCol],
      calendarId: values[i][calendarIdCol],
      term: values[i][termCol]
    });
  }
  return result;
};

export default getSetting;
