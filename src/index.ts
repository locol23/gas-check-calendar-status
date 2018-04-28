import getSetting from './getSetting';

declare var global: any;

// global.createNewFile = (): void => {
//   const ss = SheetService.createInitialFile('New file');
//   ss.getRange('A2').setValue('Happy gas!');
// };

global.checkCalendarStatus = () => {
  const settings = getSetting();
  const cal = CalendarApp.getCalendarById(settings[0]['calendarId']);
  const now = new Date();
  const end = new Date(now.getTime() + +(settings[0]['term'] * 24 * 60 * 60 * 1000));
  console.log(cal.getEvents(now, end));
};
