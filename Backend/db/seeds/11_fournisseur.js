
exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('fournisseurs').del()
      .then(function () {
        // Inserts seed entries
        return knex('fournisseurs').insert([
          {id: 1, raison_sociale: 'LOGO Services', type: 'Entreprise'},
          {id: 2, raison_sociale: 'CETELCOM', type: 'Entreprise'},
          {id: 3, raison_sociale: 'SOCOGIB', type: 'Entreprise'},
		  {id: 4, raison_sociale: 'CITE BRANCHEE', type: 'Entreprise'},
		  {id: 5, raison_sociale: 'YENTECH', type: 'Entreprise'}
        ]);
      });
  };