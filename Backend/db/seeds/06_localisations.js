
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('localisations').del()
    .then(function () {
      // Inserts seed entries
      return knex('localisations').insert([
        {id: 1, dr_no: 0,   sigle: 'SIEGE', libelle: 'Siège'},
        {id: 2, dr_no: 10,  sigle: 'DRO',   libelle: 'Direction Régionale de Ouagadougou'},
        {id: 3, dr_no: 30,  sigle: 'DRN',   libelle: 'Direction Régionale du Nord'},
        {id: 4, dr_no: 40,  sigle: 'DRF',   libelle: 'Direction Régionale de Fada N\'Gourma'},
        {id: 5, dr_no: 50,  sigle: 'DRD',   libelle: 'Direction Régionale de Dédougou'},
        {id: 6, dr_no: 20,  sigle: 'DRB',   libelle: 'Direction Régionale de Bobo-Dioulasso'}
      ]);
    });
};
