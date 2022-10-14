
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('typordres').del()
    .then(function () {
      // Inserts seed entries
      return knex('typordres').insert([
        {id: 1, libelle: 'Ordre de service'},
		{id: 2, libelle: 'Ordre de suspension'},
		{id: 3, libelle: 'Ordre de reprise'}
      ]);
    });
};
