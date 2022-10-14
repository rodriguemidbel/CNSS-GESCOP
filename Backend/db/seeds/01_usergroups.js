
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('usergroups').del()
    .then(function () {
      // Inserts seed entries
      return knex('usergroups').insert([
        {id: 1, name: 'Super Administrateur', description: 'Groupe super admin'},
        {id: 2, name: 'Administrateur', description: 'Groupe admin'},
        {id: 3, name: 'Informaticien', description: 'Groupe Informaticien'}
      ]);
    });
};
