function calendarInvites(){
  var userId = 'bfrost234@gmail.com';
  var event = CalendarApp.createEvent("Random", new Date("July 10, 2020 17:00:00 GMT+5:45"), 
                                      new Date("July 10, 2020 17:30:00 GMT+5:45"), 
                                      {guests: "subrittburlakoti@gmail.com, burlakotisubritt@gmail.com", sendInvites: true});
}