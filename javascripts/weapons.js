"use strict";

var Gauntlet = (function(OrigGauntlet){

  // Our weapon selection
  OrigGauntlet.Armory = {};
  OrigGauntlet.Armory.Weapon = function() {
    this.name = "bare hands";
    this.damage = 1;
    this.hands = 2;

    this.toString = function() {
      return this.name;
    };
  };

  OrigGauntlet.Armory.Dagger = function() {
    this.name = "dagger";
    this.damage = 4;
    this.hands = 1;
  };
  OrigGauntlet.Armory.Dagger.prototype = new OrigGauntlet.Armory.Weapon();

  OrigGauntlet.Armory.BroadSword = function() {
    this.name = "broad sword";
    this.damage = 14;
    this.hands = 2;
  };
  OrigGauntlet.Armory.BroadSword.prototype = new OrigGauntlet.Armory.Weapon();

  OrigGauntlet.Armory.WarAxe = function() {
    this.name = "war axe";
    this.damage = 18;
    this.hands = 2;
  };
  OrigGauntlet.Armory.WarAxe.prototype = new OrigGauntlet.Armory.Weapon();

    OrigGauntlet.Armory.Mace = function() {
    this.name = "mace";
    this.damage = 10;
    this.hands = 1;
  };
  OrigGauntlet.Armory.Mace.prototype = new OrigGauntlet.Armory.Weapon();

    OrigGauntlet.Armory.Staff = function() {
    this.name = "staff";
    this.damage = 10;
    this.hands = 2;
  };
  OrigGauntlet.Armory.Staff.prototype = new OrigGauntlet.Armory.Weapon();

    OrigGauntlet.Armory.Book = function() {
    this.name = "spell book";
    this.damage = 3;
    this.hands = 1;
  };
  OrigGauntlet.Armory.Book.prototype = new OrigGauntlet.Armory.Weapon();

    OrigGauntlet.Armory.Wand = function() {
    this.name = "wand";
    this.damage = 1;
    this.hands = 1;
  };
  OrigGauntlet.Armory.Wand.prototype = new OrigGauntlet.Armory.Weapon();

    OrigGauntlet.Armory.Katana = function() {
    this.name = "katana";
    this.damage = 13;
    this.hands = 2;
  };
  OrigGauntlet.Armory.Katana.prototype = new OrigGauntlet.Armory.Weapon();

    OrigGauntlet.Armory.Longbow = function() {
    this.name = "longbow";
    this.damage = 12;
    this.hands = 2;
  };
  OrigGauntlet.Armory.Longbow.prototype = new OrigGauntlet.Armory.Weapon();

  return OrigGauntlet;
})(Gauntlet || {});
