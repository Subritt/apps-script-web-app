/*
function to get user info
*/
var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

/*
function to append_data
*/
function append_row(table_name, data){
  var table = spreadsheet.getSheetByName(table_name);
  table.appendRow(data);
}

/*
function to get tabale data
*/
function get_data(table_name){
  var user_database = spreadsheet.getSheetByName(table_name);
  var data = user_database.getRange(2, 1, user_database.getLastRow()-1, user_database.getLastColumn()).getValues();
  return data;
}

/*
function to set value to a table
*/
function set_data(row, col, value, table_name){
  var user_database = spreadsheet.getSheetByName(table_name); 
  user_database.getRange(row, col).setValue(value);
}