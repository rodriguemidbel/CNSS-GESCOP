
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('modes').del()
    .then(function () {
      // Inserts seed entries
      return knex('modes').insert([
        {id: 1, libelle: 'AOO', description: 'Appel d\' Offre Ouvert Directe'},
        {id: 2, libelle: 'DPX', description: 'Appel d\' Offre Ouvert Directe'},
        {id: 3, libelle: 'DC-F', description: 'Demande de Cotation Formelle'},
        {id: 4, libelle: 'DC-NF', description: 'Demande de Cotation Non Formelle'},
        {id: 5, libelle: 'MI', description: 'Demande de propositions précédée d\'une manifestation d\'interet'},
        {id: 6, libelle: 'DDP-A', description: 'Demande de Proposition Allégée'},
        {id: 7, libelle: 'CC', description: 'Consultation de consultants'},
        {id: 8, libelle: 'DDP', description: 'Demande de Proposition'},
		{id: 9, libelle: 'ED', description: 'Entente Directe'},
      ]);
    });
};
