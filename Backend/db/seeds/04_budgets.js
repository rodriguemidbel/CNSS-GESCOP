
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('budgets').del()
    .then(function () {
      // Inserts seed entries
      return knex('budgets').insert([
        {id: 1, libelle: 'Budget CNSS'}
      ]);
    });
};
