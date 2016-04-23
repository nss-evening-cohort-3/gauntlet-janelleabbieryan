"use strict";

/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = (function(OrigGauntlet){
  OrigGauntlet.Combatants = {};

  /*
    Define the base object for any player of Gauntlet,
    whether a human player or a monster.
   */
  OrigGauntlet.Combatants.Player = function(name) {
    this.species = null;
    this.class = null;
    this.weapon = null;

    this.playerName = name || "unknown adventurer";
    this.health = Math.floor(Math.random() * 40 + 50);
    this.limbs = ["head", "neck", "arm", "leg", "torso"];
    this.skinColor = "gray";
    this.skinColors = [this.skinColor];
    this.strength = 90;
    this.intelligence = 90;

    this.toString = function() {
      var output = [
        "A ",
        this.skinColor,
        "-skinned ",
        this.species,
        " ",
        this.class,
        " with ",
        this.health,
        " health, ",
        (this.class.magical) ? "Able to cast " : " wielding a ",
        this.weapon.toString(),
        "!"
      ].join("");
      return output;
    };
  };

  OrigGauntlet.Combatants.Player.prototype.setClass = function(chosenClass) {
    this.class = chosenClass;
  };

  OrigGauntlet.Combatants.Player.prototype.setWeapon = function(newWeapon) {
    this.weapon = newWeapon;
  };

  OrigGauntlet.Combatants.Player.prototype.setName = function(name) {
    this.playerName = name;
  };

//generate random weapon
  OrigGauntlet.Combatants.Player.prototype.generateWeapon = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedWeapons.length - 1));

    // Get the string at the index
    var randomWeapon = this.allowedWeapons[random];

    // Composes the corresponding player class into the player object
    this.weapon = new OrigGauntlet.Armory[randomWeapon]();

    return this.weapon;
  };

//generate random class
  OrigGauntlet.Combatants.Player.prototype.generateClass = function() {
    // Get a random index from the allowed classes array
    var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

    // Get the string at the index
    var randomClass = this.allowedClasses[random];

    // Composes the corresponding player class into the player object
    this.class = new OrigGauntlet.GuildHall[randomClass]();

    // Add the health bonus
    this.health += this.class.healthBonus;
    return this.class;
  };

  /*
    Define the base properties for a human in a 
    constructor function.
   */
  OrigGauntlet.Combatants.Human = function() {
    var randomSkin;

    this.species = "Human";
    this.intelligence = this.intelligence + 20;

    this.skinColors.push("brown", "red", "white", "disease");
    randomSkin = Math.round(Math.random() * (this.skinColors.length-1));
    this.skinColor = this.skinColors[randomSkin];

    this.allowedClasses = ["Warrior", "Berserker", "Valkyrie", "Monk", "Thief", "Ninja", "Assassin", "Shaman", "Wizard", "Conjurer", "Sorcerer"];
    this.allowedWeapons = ["BroadSword", "WarAxe", "Mace"];
  };
  OrigGauntlet.Combatants.Human.prototype = new OrigGauntlet.Combatants.Player();


  /*
    Define the base properties for a monster in a 
    constructor function.
   */
  OrigGauntlet.Combatants.Monster = function() {
    this.health = this.health - 30;
    this.intelligence = this.intelligence -20;
    this.strength = this.strength + 30;
  };

  OrigGauntlet.Combatants.Monster.prototype = new OrigGauntlet.Combatants.Player();
return OrigGauntlet;
})(Gauntlet || {});
