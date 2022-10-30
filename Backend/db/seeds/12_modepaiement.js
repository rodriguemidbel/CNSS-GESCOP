
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('modepaiements').del()
      .then(function () {
        // Inserts seed entries
        return knex('modepaiements').insert([
          {id: 1, libelle: 'Espèce'},
          {id: 2, libelle: 'Chèque'},
          {id: 3, libelle: 'Virement'}
        ]);
      });
  };