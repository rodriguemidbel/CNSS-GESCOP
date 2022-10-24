
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, usergroup_id: 1, name: 'Rondouba Rodrigue', username: 'U202101', password: 'admin2021', fonction: 'Consultant', localisation_id : 1, telephone: '66484220', email: 'rodrigue.midbel@gmail.com', adresse: 'Secteur 24', statut: 1},
        {id: 2, usergroup_id: 1, name: 'Nikiema Laurent', username: 'U202102', password: 'admin', fonction: 'Consultant', localisation_id : 2, telephone: '77505873', email: 'lnikiema@gmail.com', adresse: 'Samandin', statut: 1},
        {id: 3, usergroup_id: 2, name: 'Topan Zakaria', username: 'U202103', password: 'admin', fonction: 'Consultant', localisation_id : 3, telephone: '76403214', email: 'ztopan@logo_services.com', adresse: 'Somgandé, secteur 13', statut: 1},
        {id: 4, usergroup_id: 1, name: 'CNSS', username: 'cnss', password: 'cnss', telephone: '25369874', fonction: 'CNSS', localisation_id : 4, email: 'cnss@cnss.bf', adresse: 'Centre ville, secteur 03', statut: 1},
	    {id: 5, usergroup_id: 4, name: 'Fatim Bance', username: 'caissier1', password: 'caissier1', telephone: '78977879', fonction: 'Caissier', localisation_id : 1, email: 'caissier1@yahoo.fr', adresse: 'Secteur 30', statut: 1},
        {id: 6, usergroup_id: 4, name: 'Fatim Tassembedo', username: 'caissier2', password: 'caissier2', telephone: '65789654', fonction: 'Caissier', localisation_id : 2, email: 'caissier2@gmail.com', adresse: 'Secteur 24', statut: 1}

	  ]);
    });
};
