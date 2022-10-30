
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usergroups').del()
    .then(function () {
      // Inserts seed entries
      return knex('usergroups').insert([
        {id: 1, name: 'Super Administrateur', description: 'Groupe super admin'},
        {id: 2, name: 'PRM', description: 'Personne Responsable des marchés au Siège'},
        {id: 3, name: 'DR', description: 'Direction Régionale'},
		{id: 4, name: 'Informaticien', description: 'Informaticien'},
		{id: 5, name: 'Caisse', description: 'Groupe des caissiers'},
      ]);
    });
};
