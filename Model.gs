/*
function to get user info
*/
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

/*
function to get tabale data
*/
function get_data(table_name){
  var user_database = spreadsheet.getSheetByName(table_name);
  var data = user_database.getDataRange().getValues();
  return data;
}

/*
function to set value to a table
*/
function set_data(row, col, value, table_name){
  var user_database = spreadsheet.getSheetByName(table_name); 
  user_database.getRange(row, col).setValue(value);
}