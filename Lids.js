function storyCreator(){
 var newButton = document.getElementById("buttonB");
 var result = newButton.link("Story.html");

}
function setStory(){
  var words=[];
  var inputs = document.getElementsByTagName("input");
  if (inputs == ""){
    alert("Texts are empty")
  }
  else{
  for(i=0; i<inputs.length;i++){
    words[i] = inputs[i].value}
    var groups = JSON.stringify(words);
    setCookie('wordsofLids', groups )
   alert("Your words have been saved");
 }
  }
function storySetting(){
  var fullstory =  getCookie('wordsofLids');
  var wordsB = JSON.parse(fullstory);
  var story = wordsB[0] + " is the ruler of " + wordsB[1] + ", he has been a ruller of " + wordsB[1] + " ,after he pulled the "
    + wordsB[2] + " out of a " + wordsB[3] + " stone. King " + wordsB[0] + " , had to find " + wordsB[4] + " at "
    + wordsB[5]+ " to go kill a "+ wordsB[7] +" at "+ wordsB[8] + " ,Then " + wordsB[4]+ " went out to get a "
    + wordsB[7] + " and it's trusty " + wordsB[6]+ ". He was set off to kill off the " + wordsB[8] +" at "
   + wordsB[9] + " ,When " +wordsB[4] +" found where it lives. The " + wordsB[7] + " gets up and try to attack "
   + wordsB[4] + " But, " + wordsB[4] + " got his mighty " + wordsB[8] + " and " + wordsB[10] + " stapping it in its heart. After it's death. King " + wordsB[0] + " rewarded "
      + wordsB[11] + " to " + wordsB[4];
  console.log(story);
  document.getElementById("storyA").innerHTML = story;
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
