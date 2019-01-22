$(document).ready(function(){
  $("form#wordsInput").submit(function(event){
    event.preventDefault();
    var sentenceArray = $("#userInput").val().split(" ");

    sentenceArray.forEach(function(word){
      if (word.length >= 3) {
        var newArray = word.split("").reverse();
        var newString = newArray.join("");
        $("#result").append(" " + newString);
      };
    });
  })

});
