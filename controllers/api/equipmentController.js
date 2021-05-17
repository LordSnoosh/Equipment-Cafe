const EquipmentModel = require('../../models/equipmentModel');

module.exports =  {create};

async function create(req, res) {
    try {
      const equipment = await EquipmentModel.create({name: req.body.name});
      res.status(201).json(equipment);
    } catch(err) {
      res.status(400).json(err);
    }
  }