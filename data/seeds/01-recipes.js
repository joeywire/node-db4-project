
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    { name: "Boiled Chicken" },
    { name: "Worlds Best Sandwich"}
  ]);
};
