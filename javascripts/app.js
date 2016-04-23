"use strict";
var playerName = "";
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
    var PlayerCharacter = new OrigGauntlet.Combatants.Human();
    PlayerCharacter.setWeapon(new OrigGauntlet.Armory.Wand());

    var Enemy = new OrigGauntlet.Combatants.Orc();
    Enemy.generateClass();
    Enemy.generateWeapon();
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
        case "card--battleground":
          moveAlong = ($("#player-name").val() !== "");
          console.log("battleground");
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
      PlayerCharacter.setName(playerName); // 'PlayerObject.setName(playerName);'
    });

    //when player clicks a class, store the value and set the class on the player object
    $(".class__link").click(function(e){
      if ($(this).attr('player') === "surprise") {
        PlayerCharacter.generateClass();
        console.log(PlayerCharacter.toString());
      } else {
      var chosenClass = "new OrigGauntlet.GuildHall."+$(this).attr('player')+"()";
      PlayerCharacter.setClass(eval(chosenClass));
      console.log(chosenClass);
      }
    });

    //when player clicks a weapon, store the value and set the weapon on the player object
    $(".weapon__link").click(function(e){
      if ($(this).attr('player') === "surprise") {
        PlayerCharacter.generateWeapon();
        console.log(PlayerCharacter.toString());
      } else {
        var chosenWeapon = "new OrigGauntlet.Armory."+$(this).attr('player')+"()";
        PlayerCharacter.setWeapon(eval(chosenWeapon));
        console.log("player", PlayerCharacter );
      }
    });

    $("#attack_button").click(function(){
      PlayerCharacter.health = PlayerCharacter.health - Enemy.weapon.damage;
      Enemy.health = Enemy.health - PlayerCharacter.weapon.damage;
      console.log(`You hit the enemy for ${PlayerCharacter.weapon.damage}!`);
      console.log(`The enemy hit you for ${Enemy.weapon.damage}!`);
      console.log(`Your health is now: ${PlayerCharacter.health} His health is now: ${Enemy.health}`);



      if (PlayerCharacter.health <= 0) {
        alert("You is dead now.")
      } else if (Enemy.health <= 0) {
        alert("Way to go, Badass.")
      };

    });

  });
return OrigGauntlet;
})(Gauntlet || {});
