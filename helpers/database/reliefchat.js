const { DataTypes } = require('sequelize');
const { database } = require('../database.js'); // Ensure the path is correct

const ReliefChat = database.define('ReliefChat', {
    whatsappId: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

ReliefChat.sync();

module.exports = {
  ReliefChat: ReliefChat,
  enableReliefChat: async (whatsappId) => {
    const [user, created] = await ReliefChat.findOrCreate({
        where: { whatsappId: whatsappId }
    });
    return created;
  },
  disableReliefChat: async (whatsappId) => {
    const deleted = await ReliefChat.destroy({
        where: { whatsappId: whatsappId }
    });
    return deleted;
  }
};
