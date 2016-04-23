"use strict";

/*
  TODO: Modularize this code with IIFE or Browserify
 */
var Gauntlet = (function(OrigGauntlet){
  OrigGauntlet.GuildHall = {};

  /*
    Base function for a player, or enemy, class (profession)
   */
  OrigGauntlet.GuildHall.PlayerClass = function() {
    this.name = "Beggar";
    this.healthBonus = 0;
    this.strengthBonus = 0;
    this.intelligenceBonus = 0;
    this.magical = false;

    this.toString = function() {
      return this.name;
    };
  };

  /*
      FIGHTER CLASSES
        - Warrior
        - Valkyrie
        - Berserker
        - Monk
   */
  OrigGauntlet.GuildHall.Fighter = function() {
    this.healthBonus = 20;
    this.strengthBonus = 10;
  };
  OrigGauntlet.GuildHall.Fighter.prototype = new OrigGauntlet.GuildHall.PlayerClass();


  OrigGauntlet.GuildHall.Warrior = function() {
    this.name = "Warrior";
    this.healthBonus = this.healthBonus + 25;
    this.strengthBonus = this.strengthBonus + 30;
  OrigGauntlet.GuildHall.Warrior.prototype = new OrigGauntlet.GuildHall.Fighter();


  OrigGauntlet.GuildHall.Valkyrie = function() {
    this.name = "Valkyrie";
    this.healthBonus = this.healthBonus + 20;
    this.strengthBonus = this.strengthBonus + 10;
  };
  OrigGauntlet.GuildHall.Valkyrie.prototype = new OrigGauntlet.GuildHall.Fighter();


  OrigGauntlet.GuildHall.Berserker = function() {
    this.name = "Berserker";
    this.healthBonus = this.healthBonus + 35;
    this.strengthBonus = this.strengthBonus + 20;
  };
  OrigGauntlet.GuildHall.Berserker.prototype = new OrigGauntlet.GuildHall.Fighter();


  OrigGauntlet.GuildHall.Monk = function() {
    this.name = "Monk";
    this.healthBonus = this.healthBonus + 10;
    this.strengthBonus = this.strengthBonus + 40;
  };
  OrigGauntlet.GuildHall.Monk.prototype = new OrigGauntlet.GuildHall.Fighter();


  /*
      MAGICAL CLASSES
        - Shaman
        - Wizard
        - Conjurer
        - Sorcerer
   */
  OrigGauntlet.GuildHall.Mage = function() {
    this.name = "Mage";
    this.magical = true;
    this.healthBonus = this.healthBonus - 10;
    this.strengthBonus = this.strengthBonus - 20;
    this.intelligenceBonus = this.intelligenceBonus + 20;
  };
  OrigGauntlet.GuildHall.Mage.prototype = new OrigGauntlet.GuildHall.PlayerClass();


  OrigGauntlet.GuildHall.Shaman = function() {
    this.name = "Shaman";
    this.healthBonus = this.healthBonus + 5;
    this.strengthBonus = this.strengthBonus - 10;
    this.intelligenceBonus = this.intelligenceBonus + 20;
  };
  OrigGauntlet.GuildHall.Shaman.prototype = new OrigGauntlet.GuildHall.Mage();


  OrigGauntlet.GuildHall.Wizard = function() {
    this.name = "Wizard";
    this.healthBonus = this.healthBonus - 15;
    this.strengthBonus = this.strengthBonus - 25;
    this.intelligenceBonus = this.intelligenceBonus + 40;
  };
  OrigGauntlet.GuildHall.Wizard.prototype = new OrigGauntlet.GuildHall.Mage();


  OrigGauntlet.GuildHall.Conjurer = function() {
    this.name = "Conjurer";
    this.strengthBonus = this.strengthBonus - 10;
    this.intelligenceBonus = this.intelligenceBonus + 10;
  };
  OrigGauntlet.GuildHall.Conjurer.prototype = new OrigGauntlet.GuildHall.Mage();


  OrigGauntlet.GuildHall.Sorcerer = function() {
    this.name = "Sorcerer";
    this.healthBonus = this.healthBonus - 5;
    this.strengthBonus = this.strengthBonus - 20;
    this.intelligenceBonus = this.intelligenceBonus + 30;
  };
  OrigGauntlet.GuildHall.Sorcerer.prototype = new OrigGauntlet.GuildHall.Mage();


  /*
      STEALTH CLASSES
        - Thief
        - Ninja
        - Assassin
   */

  OrigGauntlet.GuildHall.Shadow = function() {
    this.name = "Shadow";
    this.magical = false;
    this.healthBonus = this.healthBonus + 10;
    this.strengthBonus = this.strengthBonus - 20;
    this.intelligenceBonus = this.intelligenceBonus + 20;
  };
  OrigGauntlet.GuildHall.Shadow.prototype = new OrigGauntlet.GuildHall.PlayerClass();

  OrigGauntlet.GuildHall.Thief = function() {
    this.name = "Thief";
    this.healthBonus = this.healthBonus + 5;
    this.strengthBonus = this.strengthBonus + 15;
  };
  OrigGauntlet.GuildHall.Thief.prototype = new OrigGauntlet.GuildHall.Shadow();

  OrigGauntlet.GuildHall.Ninja = function() {
    this.name = "Ninja";
    this.healthBonus = this.healthBonus + 10;
    this.strengthBonus = this.strengthBonus + 10;
  };
  OrigGauntlet.GuildHall.Ninja.prototype = new OrigGauntlet.GuildHall.Shadow();

  OrigGauntlet.GuildHall.Assassin = function() {
    this.name = "Assassin";
    this.healthBonus = this.healthBonus + 5;
    this.strengthBonus = this.strengthBonus + 20;
  };
  OrigGauntlet.GuildHall.Assassin.prototype = new OrigGauntlet.GuildHall.Shadow();

  return OrigGauntlet;
})(Gauntlet || {});
