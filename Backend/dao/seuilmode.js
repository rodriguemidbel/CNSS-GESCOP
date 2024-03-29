const db = require('../db/db');

class SeuilmodeDAO {
  async createSeuilmode(type_id,mode,min,max) {
    const [id] = await db('seuilmodes')
      .insert({
        type_id,
        mode,
        min,
        max
      })
      .returning('id');

    return id;
  };

 /* async getAllDossier() {
    return await db('seuilmodes');
  };*/
  async getAllSeuilmode() {
    return await db('seuilmodes')
      .join('types', 'types.id', 'seuilmodes.type_id')
      .join('modes', 'modes.id', 'seuilmodes.mode')
      .select(
        'seuilmodes.id as id',
        'seuilmodes.type_id as type_id',
        'seuilmodes.mode as mode_id',
        'seuilmodes.min as min',
        'seuilmodes.max as max',
        'types.libelle as type',
        'modes.libelle  as mode',
      )
  };

  async getOneSeuilmode(id) {
    return await db('seuilmodes').where({id}).first();
  };

  async removeSeuilmode(id) {
    return await db('seuilmodes').where({id}).del();
  };

  async updateSeuilmode(id,changes) {
    return await db('seuilmodes').where({id}).update(changes)
    .then(() =>{
      return db('seuilmodes').where({id}).first();
    });
  };

  async findSeuilmode(type_id,mode) {
    return await db('seuilmodes')
    .join('types', 'types.id', 'seuilmodes.type_id')
    .select(
      'seuilmodes.id as id',
      'seuilmodes.type_id as type_id',
      'seuilmodes.mode as mode',
      'seuilmodes.min as min',
      'seuilmodes.max as max',
      'types.libelle as type'
      
    )
    .where({type_id,mode})
  };

  async findModeByType(type_id) {
    return await db('seuilmodes')
    .join('types', 'types.id', 'seuilmodes.type_id')
    .join('modes', 'modes.id', 'seuilmodes.mode')
    .select(
      'seuilmodes.id as id',
      'seuilmodes.type_id as type_id',
      'seuilmodes.mode as mode_id',
      'types.libelle as type',
      'modes.libelle as mode',    
    )
    .where({type_id})
  };

 
}

module.exports = new SeuilmodeDAO();