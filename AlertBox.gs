/*
onOpen Trigger.
This function runs when the spreadsheet is first opened or refereshed
*/
function onOpen(){
  alert_box();
}

/*
alert box
*/
function alert_box(){
  var ui = SpreadsheetApp.getUi();
  var date = new Date();
  
  // show prompt
  ui.alert("Greetings " + get_session() + "\n" + "Happy " + get_day(date.getDay()) + " 😉");
}

/*
function to get session
*/
function get_session(){
  Logger.log(Session.getActiveUser());
  return Session.getActiveUser();
}

/*
return day
*/
function get_day(date){
  switch(date){
    case 0:
      return "Sunday";
    case 1:
      return "Monday";
    case 2:
      return "Tuesday";
    case 3:
      return "Wednesday";
    case 4:
      return "Thursday";
    case 5:
      return "Friday";
    case 6:
      return "Saturday";
  }
}