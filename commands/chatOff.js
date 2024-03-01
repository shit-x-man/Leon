const { disableReliefChat } = require('../helpers/database/reliefchat'); // Adjust path as necessary

module.exports = {
  command: 'chatOff',
  info: 'Disables relief chat for the user.',
  func: async (sock, msg, text) => {
    const success = await disableReliefChat(msg.sender);
    const responseText = success ? 'Relief chat disabled.' : 'Relief chat was not enabled.';
    await msg.reply({ text: responseText });
  }
};
