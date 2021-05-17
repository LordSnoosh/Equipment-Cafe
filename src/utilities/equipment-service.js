import * as equipmentAPI from './equipment-api';

export async function newEquipment(equipmentData) {
    try {
        const equipment = await equipmentAPI.newEquipment(equipmentData);
      return equipment;
    } catch {
      throw new Error('Invalid');
    }
  }