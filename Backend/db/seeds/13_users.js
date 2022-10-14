
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, usergroup_id: 1, name: 'Rondouba Rodrigue', username: 'U202101', password: 'admin2021', telephone: '66484220', email: 'rodrigue.midbel@gmail.com', adresse: 'Secteur 24', statut: 1},
        {id: 2, usergroup_id: 1, name: 'Nikiema Laurent', username: 'U202102', password: 'admin', telephone: '77505873', email: 'lnikiema@gmail.com', adresse: 'Samandin', statut: 1},
        {id: 3, usergroup_id: 2, name: 'Topan Zakaria', username: 'U202103', password: 'admin', telephone: '76403214', email: 'ztopan@logo_services.com', adresse: 'Somgandé, secteur 13', statut: 1},
        {id: 4, usergroup_id: 1, name: 'CNSS', username: 'cnss', password: 'cnss', telephone: '25369874', email: 'cnss@cnss.bf', adresse: 'Centre ville, secteur 03', statut: 1}
	  ]);
    });
};
