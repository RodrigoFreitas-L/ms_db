const Monster = require('../models/schema');

const KEYS = [
  'JP_Name',
  'ENG_Name',
  'MON_ID',
  'Rarity',
  'Type',
  'Ability',
  'Gauge',
  'Sling',
  'HP',
  'ATK',
  'SPD',
  'Strike_Shot',
  'Bump_Combo',
  'Sub_Bump',
  'THUMB',
]

const getById = async (id) => {
  try {
    const id_n = Number(id);
    if (isNaN(id)) {
      return { error: 'ID must be a number' };
    }
    const monster = await Monster.find({ MON_ID: id });
    if (monster.length > 0) {
      return { monster };
    }
    return { error: 'Monster not found' };
  } catch (error) {
    console.log(error);
    return { error: 'You shouldn\'t be seeing this' };
  }
}

const getByKey = async (key, value, page) => {
  try {
    if (!KEYS.includes(key)) {
      return { error: `Monster with ${key} not found or ${key} is an invalid parameter` };
    }
    const monster = await Monster.find({ [key]: { $regex: value, $options: 'i' } }).limit(10).skip((page - 1) * 10);
    const count = await Monster.find({ [key]: { $regex: value, $options: 'i' } }).countDocuments()
    if (count > 0) {
      return {
        monster,
        totalPages: Math.ceil(count / 10),
        currentPage: page,
      };
    }
    return { error: `Monster with ${key} "${value}" not found` };
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { getById, getByKey };
