"use strict";

var Gauntlet = (function(OrigGauntlet){
  OrigGauntlet.SpellBook = {};

  /*
    Base spell function that defines name, damage, damage type
   */
  OrigGauntlet.SpellBook.Spell = function() {
    this.name = "";
    this.damage = 0;

    this.damageTypes = ["despair", "jQuery", "IIFE", "prototypes", "CSS", "promises"];
    this.type = "";

    this.toString = function() {
      return this.name + " of " + this.type + " for " + this.damage + " damage";
    };
  };

  /*
    An elemental sphere that can be cast by a magical class
   */
  OrigGauntlet.SpellBook.Sphere = function() {
    this.name = "sphere";
    this.damage = Math.floor(Math.random() * 10 + 10);

    var random = Math.round(Math.random() * (this.damageTypes.length - 1));
    this.type = this.damageTypes[random];
  };
  OrigGauntlet.SpellBook.Sphere.prototype = new OrigGauntlet.SpellBook.Spell();

  return OrigGauntlet;
})(Gauntlet || {});
