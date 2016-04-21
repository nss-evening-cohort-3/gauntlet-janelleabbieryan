"use strict";
var Gauntlet = (function(OrigGauntlet){
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
  return OrigGauntlet;
})(Gauntlet || {});