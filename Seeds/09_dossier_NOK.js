exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('dossiers').del()
      .then(function () {
        // Inserts seed entries
        return knex('dossiers').insert([
          //***************************** PLAN DE PASSATION DES MARCHES DU SIEGE**********/
          {id: 1, 
		  planitem_id: 1, 
		  numero_doss: '123/2022/CNSS', 
		  intitule_doss: 'Travaux de construction des infrastructure du 11 décembre 2021 à Ziniare', 
		  dossier:'',
		  statut: 'Créer'
          },
          {id: 2, 
            planitem_id: 6, 
            numero_doss: '124/2022/CNSS', 
            intitule_doss: 'Travaux de construction de deux villas F4 avec annexes', 
            dossier:'',
            statut: 'Créer'
           },
           {id: 3, 
            planitem_id: 2, 
            numero_doss: '0003/2021/CNSS', 
            intitule_doss: 'Travaux de construction de deux villas F4 avec annexes', 
            dossier:'',
            statut: 'Créer'
           },
           {id: 4, 
            planitem_id: 26,
            numero_doss: '125/2022/CNSS', 
            intitule_doss: 'Entretien annuel du parc climatique du bâtiment A et B, du CFP, de la DPASS et du SPAS', 
            dossier:' ',
            statut: 'Créer'
           },
           {id: 5, 
            planitem_id: 60,
            numero_doss: '126/2022/CNSS/DRO', 
            intitule_doss: 'Prestations de nettoyage et entretien des locaux ', 
            dossier:' ',
            statut: 'Créer'
           },
		   {id: 6, 
            planitem_id: 85,
            numero_doss: '127/2022/CNSS/DRN', 
            intitule_doss: 'Acquisition de matériels informatiques', 
            dossier:' ',
            statut: 'Créer'
           },
		   {id: 7, 
            planitem_id: 94,
            numero_doss: '128/2022/CNSS/DRN', 
            intitule_doss: 'Entretien des groupes électrogène de la DRF', 
            dossier:' ',
            statut: 'Créer'
           },
		   {id: 8, 
            planitem_id: 100,
            numero_doss: '129/2022/CNSS/DRN', 
            intitule_doss: 'Acquisition de consommables informatiques', 
            dossier:' ',
            statut: 'Créer'
           },
		   {id: 9, 
            planitem_id: 113,
            numero_doss: '130/2022/CNSS/DRN', 
            intitule_doss: 'Entretien des groupes électrogène de la DRB', 
            dossier:' ',
            statut: 'Créer'
           },
           
        ]);
      });
  };