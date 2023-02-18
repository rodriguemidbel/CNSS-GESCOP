
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('typreceptions').del()
    .then(function () {
      // Inserts seed entries
      return knex('typreceptions').insert([
        {id: 1, libelle: 'Reception technique'},
		{id: 2, libelle: 'Reception provisoire'},
		{id: 3, libelle: 'Reception définitif'}
      ]);
    });
};
