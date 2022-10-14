exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('lots').del()
      .then(function () {
        // Inserts seed entries
        return knex('lots').insert([
          //***************************** PLAN DE PASSATION DES MARCHES DU SIEGE**********/
          {id: 1, 
           dossier_id: 1, 
		   num_lot: 'Lot 1',
           intitule_lot: 'Travaux de construction des infrastructure du 11 décembre 2021 à Ziniare', 
           montant_lot: 770200000
		 },
          {id: 2, 
           dossier_id: 2, 
		   num_lot: 'Lot 1',
           intitule_lot: 'Travaux de construction de deux villas F4 avec annexes',
		   montant_lot: 68100000
           },
           {id: 3, 
            dossier_id: 3, 
			num_lot: 'Lot 1',
            intitule_lot: 'Travaux de construction de deux villas F4 avec annexes',
			montant_lot: 770200000
            },
           {id: 4, 
            dossier_id: 4, 
			num_lot: 'Lot 1',
            intitule_lot: 'Entretien annuel du parc climatique du bâtiment A et B, du CFP, de la DPASS et du SPAS',
            montant_lot: 770200000
		  },
           {id: 5, 
           dossier_id: 5,
           num_lot: 'Lot 1',		   
           intitule_lot: 'Prestations de nettoyage et entretien des locaux',
           montant_lot: 770200000
		   },
           {id: 6, 
            dossier_id: 6, 
			num_lot: 'Lot 1',
            intitule_lot: 'Acquisition de matériels informatiques',
            montant_lot: 770200000
			},
        ]);
      });
  };