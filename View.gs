var Route = {};
Route.path = function(route, callback){
  Route[route] = callback;
}

/*
Rendering Html from a file
*/
function doGet(e){
  Route.path("profile", profile_page);
  Route.path("covid19_dashboard", covid19_page);
  Route.path("login", login_page);
  
  if(Route[e.parameters.v]){
    return Route[e.parameters.v]();
  }else{
    return home_page();
  }
}

/*
function to return script url
*/
function web_app_url(){
  Logger.log(ScriptApp.getService().getUrl());
  //  return ScriptApp.getService().getUrl();
  return "https://script.google.com/macros/s/AKfycbyhvZydOqLYCHr7VWtUU82uoZrZu6fFdxRhGJekSUiF/dev";
}
/*
render dynamic html
*/
function include(file_name){
  return HtmlService.createHtmlOutputFromFile(file_name).getContent();
}

/*
render home page
*/
function home_page(){
  return render("homePage", {title: "Home Page"});
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
render covid19 dashboard
*/
function covid19_page(){
  return render("covid19Page");
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