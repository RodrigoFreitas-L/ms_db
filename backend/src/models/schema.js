const { Schema, model } = require('mongoose');

const monsterSchema = new Schema({
  JP_Name: { type: String, required: true },
  ENG_Name: { type: String, required: true },
  MON_ID: { type: String, required: true },
  Rarity: { type: String, required: true },
  THUMB: { type: String, required: true },
  Type: { type: String, required: true },
  Ability: { type: String, required: true },
  Gauge: { type: String, required: true },
  Sling: { type: String, required: true },
  HP: { type: String || Number, required: true },
  ATK: { type: String || Number, required: true },
  SPD: { type: String || Number, required: true },
  Strike_Shot: { type: String, required: true },
  Bump_Combo: { type: String, required: true },
  Sub_Bump: { type: [String], required: true },
  Element: { type: String, required: true },
}, { strict: false });

const Monster = model("monsters", monsterSchema);

module.exports = Monster;