
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('plans').del()
    .then(function () {
      // Inserts seed entries
      return knex('plans').insert([
        {
          id: 1, 
          annee: 2022, 
          date_plan: '04/11/22',
		  statut: 'Projet'
        }
      ]);
    });
};
