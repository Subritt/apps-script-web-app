/*
Function to check user in database and
login them to home page
*/

function user_login(userinfo){
  var data = get_data("Users");
  var flag = 0;
  var full_name = "";
  
  for(var i = 0 ; i < data.length ; i++){
    if(data[i][2] == userinfo.user_name && data[i][3] == userinfo.password){
      full_name = data[i][1];
      flag = 1;
      Logger.log("Hello " + full_name);
      set_data(i+1, 11, new Date(), "Users");
      Logger.log(data[i][0]);
      //      var questions = get_questions(data[i][0]);
      //      Logger.log(questions);
      return [flag, full_name, data[i][0]];
    }
  }
  
  Logger.log("Invalid username or password");
  return[flag, full_name];
}

/*
function to get question
*/
function get_questions(user_id){
  Logger.log("inside get_questions()" + user_id);
  var data = get_data("Question");
  Logger.log(data);
  var row = data.map(function(user){return user[6]});
  var questions = [];
  
    for(var i = 0 ; i < row.length ; i++){
      if(row[i] == user_id){
        questions.push([data[i][0], data[i][1], data[i][2]]);
      }
    }
  return questions;
}

function get_all_question(){
  return get_data("Question");
}