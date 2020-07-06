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
      set_data(i+2, 13, new Date(), "Users");
      Logger.log(data[i][0]);
      return [flag, full_name, data[i][0]];
    }
  }
  
  Logger.log("Invalid username or password");
  return[flag, full_name];
}

/*
function to check username validation for signup
*/
function signup_check(user_name){
  var data = get_data("Users");
  
  for(var i = 0 ; i < data.length ; i++){
    return (data[i][2] == user_name) ? 1 : 0;
  }
}

/*
function to add user
      full_name: "Full Name Required!",
      email: "Email Required!",
      school: "School Required!",
      profession: "Please Choose Your Profession!",
      username: "Enter a Username!",
      password: "Enter a Password!",
      telephone: "Phone number not matched!"
*/
function add_user(userinfo){
  var data = [
    "",
    userinfo["full_name"],
    userinfo["username"],
    userinfo["password"],
    userinfo["email"],
    userinfo["telephone"],
    userinfo["school"],
    userinfo["profession"],
  ];
    
  append_row("Users", data);
}

/*
function to capitalize name
*/
function capitalize(full_name){
  Logger.log(full_name.split(" ").length);
  if(full_name.split(" ").length == 2){
    return full_name.split(" ")[0].charAt(0).toUpperCase() + full_name.split(" ")[0].slice(1)
           + " " 
           + full_name.split(" ")[1].charAt(0).toUpperCase() + full_name.split(" ")[1].slice(1);
  }else if(full_name.split(" ").length == 3){
    return full_name.split(" ")[0].charAt(0).toUpperCase() + full_name.split(" ")[0].slice(1)
           + " "
           + full_name.split(" ")[1].charAt(0).toUpperCase() + full_name.split(" ")[1].slice(1)
           + " "
           + full_name.split(" ")[2].charAt(0).toUpperCase() + full_name.split(" ")[2].slice(1);
  }else{
    return full_name.split(" ")[0].charAt(0).toUpperCase() + full_name.split(" ")[0].slice(1);
  }

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

/*
function get overall question
*/
function get_all_question(){
  return get_data("Question");
}

/*
get oveall professions
*/
function get_all_professions(){
  return get_data("Profession");
}