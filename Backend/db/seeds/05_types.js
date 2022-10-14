
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {id: 1, libelle: 'Travaux'},
        {id: 2, libelle: 'Fournitures, équipements et service courants'},
        {id: 3, libelle: 'Prestations intellectuelles'}
      ]);
    });
};
