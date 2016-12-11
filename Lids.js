



function storyCreator(){
 var newButton = document.getElementById("buttonB");
 var result = newButton.link("Story.html");

}
function setStory(){
  var words=[];
  var inputs = document.getElementsByTagName("input");
  for(i=0; i<inputs.length;i++){
    words[i] = inputs[i].value}
    var story = words[0] + "is the ruler of" + words[1] + "he has been a ruller after he pulled"
     + words[2] + "out of a " + words[3] + "stone." + words[0] + ", had to find " + words[4] +
     "and had found them at " + words[5] + ",Then" + words[4]+ "went out an got ready the mighty"
     + words[5] + "and it's trusty" + words[6]+ "He was set off to kill off" + words[7] + "as you get close to " + words[8]+ ",Where it lives. As the monstar gets up to you get the mighty weapon and" + words[9] + "stap it in";
    setCookie("wordsofLids",words, )
   alert("Your words have been saved");
  }

//courtesy of W3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of W3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
  }
