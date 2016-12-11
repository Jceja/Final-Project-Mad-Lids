function storyCreator(){
 var newButton = document.getElementById("buttonB");
 var result = newButton.link("Story.html");

}
function setStory(){
  var words=[];
  var inputs = document.getElementsByTagName("input");
  for(i=0; i<inputs.length;i++){
    words[i] = inputs[i].value}
    var groups = JSON.stringify(words);
    setCookie('wordsofLids', groups )
   alert("Your words have been saved");
  }
 function storySetting(){
     var fullstory =  getCookie('wordsofLids');
     var wordsB = JSON.parse(fullstory);
   var story = wordsB[0] + "is the ruler of" + wordsB[1] + "he has been a ruller after he pulled"
    + wordsB[2] + "out of a " + wordsB[3] + "stone." + wordsB[0] + ", had to find " + wordsB[4] +
    "and had found them at " + wordsB[5] + ",Then" + wordsB[4]+ "went out an got ready the mighty"
    + wordsB[5] + "and it's trusty" + wordsB[6]+ "He was set off to kill off" + wordsB[7] +
     "as you get close to " + wordsB[8]+ ",Where it lives. As the monster gets up to you get the mighty weapon and" +
      wordsB[9] + "stapping it in its heart. After it's death you were treated to a reward of"
      + wordsB[10] + "When you go to the King, he gives you " + wordsB[11];
console.log("work please"+ story);
  var onestory = document.getElementById("storyA");
  onestory.innerHTML = story;
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
