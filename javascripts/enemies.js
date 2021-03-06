"use strict";
var Gauntlet = (function(OrigGauntlet){

// Build for the opponent
  OrigGauntlet.Combatants.Orc = function() {
    this.name = null;
    this.health = this.health + 20;
    this.species = "Instructor";
    this.allowedClasses = ["Warrior", "Berserker", "Shaman"];
    this.allowedWeapons = ["WarAxe", "Wand", "Staff"];
    this.allowedNames = ["Joe", "Zoe", "Steve", "Greg", "Andrew Chalkley", "Nick Pettit"];

    // Enemy name picker
    this.pickName = function() {
      var random = Math.round(Math.random() * (this.allowedNames.length - 1));

      this.name = this.allowedNames[random]
    };
    this.generateClass = function() {
      // Get a random index from the allowed classes array
      var random = Math.round(Math.random() * (this.allowedClasses.length - 1));

      // Get the string at the index
      var randomClass = this.allowedClasses[random];

      // Composes the corresponding player class into the player object
      this.class = new OrigGauntlet.GuildHall[randomClass]();
      return this.class;
    };
  };

  OrigGauntlet.Combatants.Orc.prototype = new OrigGauntlet.Combatants.Monster();
  return OrigGauntlet;
})(Gauntlet || {});
