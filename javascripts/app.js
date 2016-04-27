"use strict";
var playerName = "";
var Gauntlet = (function(OrigGauntlet){

  $(document).ready(function() {
    // generate player object
    var PlayerCharacter = new OrigGauntlet.Combatants.Human();

    var Enemy = new OrigGauntlet.Combatants.Orc();
    Enemy.generateClass();
    Enemy.generateWeapon();
    Enemy.pickName();
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
          moveAlong = (PlayerCharacter.class !== null);
          break;
        case "card--battleground":
          moveAlong = (PlayerCharacter.weapon !== null);
          break;
      }

      if (moveAlong) {
        $(".card").hide();
        $("." + nextCard).show();
      }
    });


    /*
      Populate cards with stats
    */
    $("#defeatBtn").click(function(){
      $(".playerStats").html(PlayerCharacter.toString());
      $(".playerName").html(PlayerCharacter.playerName);
      $(".enemyStats").html(Enemy.toString());
      $(".enemyName").html(Enemy.name);
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
      PlayerCharacter.setName(playerName);
    });

    //when player clicks a class, store the value and set the class on the player object
    $(".class__link").click(function(e){
      if ($(this).attr('player') === "surprise") {
        PlayerCharacter.generateClass();
      } else {
      var chosenClass = $(this).attr('player');
      PlayerCharacter.setClass(new OrigGauntlet.GuildHall[chosenClass]());
      }
    });

    //when player clicks a weapon, store the value and set the weapon on the player object
    $(".weapon__link").click(function(e){
      if ($(this).attr('player') === "surprise") {
        PlayerCharacter.generateWeapon();
      } else {
        var chosenWeapon = $(this).attr('player');
        PlayerCharacter.setWeapon(new OrigGauntlet.Armory[chosenWeapon]());
      }
    });

    $(".battleDiv").hide();
    $(".overlayWin").hide();
    $(".overlayLose").hide();

    $("#attackBtn").click(function(){
      $(".battleDiv").show();
      PlayerCharacter.health = PlayerCharacter.health - Enemy.weapon.damage;
      var playerDamage = 0;
      var enemyDamage = 0;

      if (PlayerCharacter.class.magical) {
        playerDamage = PlayerCharacter.spell.damage;
      } else {
        playerDamage = PlayerCharacter.weapon.damage;
      };

      if (Enemy.class.magical) {
        enemyDamage = Enemy.spell.damage;
      } else {
        enemyDamage = Enemy.weapon.damage;
      }

      PlayerCharacter.health = PlayerCharacter.health - enemyDamage;
      PlayerCharacter.health = Math.max(0, PlayerCharacter.health);
      Enemy.health = Enemy.health - playerDamage;
      Enemy.health = Math.max(0, Enemy.health);
      $(".battleDiv").html(`<p>You hit ${Enemy.name} for ${playerDamage}! ${Enemy.name} hit you for ${enemyDamage}!</p> 
          <p>Your health is now: ${PlayerCharacter.health}</p><p>${Enemy.name}'s health is now: ${Enemy.health}</p>`);


      if (PlayerCharacter.health <= 0) {
        $("#attackBtn").prop("disabled", true);
        $(".overlayLose").show()
      } else if (Enemy.health <= 0) {
        $("#attackBtn").prop("disabled", true);
        $(".overlayWin").show();
      }


    });

  });
return OrigGauntlet;
})(Gauntlet || {});
