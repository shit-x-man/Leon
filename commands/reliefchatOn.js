const { enableReliefChat } = require('../helpers/database/reliefchat');

module.exports = {
  command: 'reliefchatOn',
  info: 'Enables relief chat for the user.',
  func: async (sock, msg, text) => {
    const success = await enableReliefChat(msg.sender);
    const responseText = success ? 'Relief chat enabled.' : 'Relief chat is already enabled.';
    await msg.reply({ text: responseText });
  }
};
