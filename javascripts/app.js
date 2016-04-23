"use strict";
var playerName = ""
var Gauntlet = (function(OrigGauntlet){
  /*
    Test code to generate a human player and an orc player
   */
  // var warrior = new OrigGauntlet.Combatants.Human();
  // warrior.setWeapon(new OrigGauntlet.Armory.WarAxe());
  // warrior.setName("Susan");
  // warrior.generateClass();  // This will be used for "Surprise me" option
  // console.log(warrior.toString());
  // console.log("warrior", warrior);

  // var orc = new OrigGauntlet.Combatants.Orc();
  // orc.generateClass();
  // orc.setWeapon(new OrigGauntlet.Armory.BroadSword());
  // console.log(orc.toString());

  /*
    Test code to generate a spell
   */
  var spell = new OrigGauntlet.SpellBook.Sphere();
  console.log("spell: ", spell.toString());


  $(document).ready(function() {
    // generate player object
    var warrior = new OrigGauntlet.Combatants.Human();



    /*
      Show the initial view that accepts player name
     */
    $("#player-setup").show();

    /*
      When any button with card__link class is clicked,
      move on to the next view.
     */
    $(".card__link").click(function(e) {
      var nextCard = $(this).attr("next");
      var moveAlong = false;

      switch (nextCard) {
        case "card--class":
          moveAlong = ($("#player-name").val() !== "");
          break;
        case "card--weapon":
          moveAlong = ($("#player-name").val() !== "");
          break;
      }

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
    });

    /*
      When the back button clicked, move back a view
     */
    $(".card__back").click(function(e) {
      var previousCard = $(this).attr("previous");
      $(".card").hide();
      $("." + previousCard).show();
    });

    // when player clicks "choose weapon", player name is set to text input value
    $("#name_selected").click(function(){
      playerName = $("#player-name").val();
      console.log("name", playerName ); // 'PlayerObject.setName(playerName);'
    });

    //when player clicks a class, store the value and set the class on the warrior object
    $("")

  });
return OrigGauntlet;
})(Gauntlet || {});