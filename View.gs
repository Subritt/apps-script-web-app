var Route = {};
Route.path = function(route, callback){
  Route[route] = callback;
}

/*
Rendering Html from a file
*/
function doGet(e){
  //  Logger.log(e.parameters);
  
  Route.path("profile", profile_page);
  
  if(Route[e.parameters.v]){
    return Route[e.parameters.v]();
  }else{
    return login_page();
  }
}

/*
function to return script url
*/
function web_app_url(){
  Logger.log(ScriptApp.getService().getUrl());
  return ScriptApp.getService().getUrl();
//  return "https://script.google.com/macros/s/AKfycbyhvZydOqLYCHr7VWtUU82uoZrZu6fFdxRhGJekSUiF/dev";
}
/*
render dynamic html
*/
function include(file_name){
  return HtmlService.createHtmlOutputFromFile(file_name).getContent();
}

/*
render login page
*/
function login_page(){
  return render("LoginForm");
}

/*
render profile page
*/
function profile_page(){
  //window.open("<?= ScriptApp.getService().getUrl(); ?>?v=profile","_parent");
  //window.location.replace("<?= ScriptApp.getService().getUrl(); ?>?v=profile");
  return render("ProfilePage", {title : "Profile Page"});
}

/*
function to render pages
*/
function render(file_name, argObj){
  var tmp = HtmlService.createTemplateFromFile(file_name);
  if(argObj){
    var keys = Object.keys(argObj);
    
    keys.forEach(function(key){
      tmp[key] = argObj[key];
    });
  }//END IF
  return tmp.evaluate(); 
}