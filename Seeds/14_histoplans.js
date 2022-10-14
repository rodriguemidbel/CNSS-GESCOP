
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('histoplans').del()
    .then(function () {
      // Inserts seed entries
      return knex('histoplans').insert([
        {
          id: 1, 
          plan_id: 1, 
          statut: 'Valider'
        },
		{
          id: 2, 
          plan_id: 2, 
          statut: 'Valider'
        },
		{
          id: 3, 
          plan_id: 3, 
          statut: 'Projet'
        }
      ]);
    });
};
