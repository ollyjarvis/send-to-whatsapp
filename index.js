const { Plugin } = require("powercord/entities");
const { React } = require("powercord/webpack");

const Settings = require("./components/settings.jsx");


module.exports = class SendtoWhatsapp extends Plugin {
  startPlugin() {
    // Initializing Here
    const phone = this.settings.get('PhoneNumber', '');
    const api = this.settings.get('APIKey', '');
    powercord.api.settings.registerSettings(this.entityID, {
      category: this.entityID,
      label: 'SendToWhatsapp',
      render: Settings
    })

    
    powercord.api.commands.registerCommand({
        command: 'sendToWhatsapp',
        description: 'Sends messages from this chat to your phone',
        usage: '{c} [ ...arguments ]',
        executor: (args) => ({
          send: false,
          notused: 'Sending message to Whatsapp',
          result : 'https://api.callmebot.com/whatsapp.php?phone='+phone+'&text='+args.join('+')+'&apikey='+api
        }),
        
      })
  

  }
  pluginWillUnload() {
    // Unloading Here
    powercord.api.settings.unregisterSettings(this.entityID);
    powercord.api.commands.unregisterCommand('sendToWhatsapp');
  }
}