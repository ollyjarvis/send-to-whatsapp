const { React } = require('powercord/webpack'); // We have to import React
const { TextInput } = require('powercord/components/settings'); // Here we Import the TextInput Component for later use

//This section is the Page the user sees
module.exports = class settings extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <TextInput
          onChange={val => this.props.updateSetting('APIKey', val)}
          defaultValue={this.props.getSetting('APIKey', '')}
          required={false}
          note='https://www.callmebot.com/blog/free-api-whatsapp-messages/'
         >
          API Key
        </TextInput>
        <TextInput
          onChange={val => this.props.updateSetting('PhoneNumber', val)}
          defaultValue={this.props.getSetting('PhoneNumber', '')}
          required={false}
          note='Phone number inc country code i.e. "+44 12345 12345"'
         >
          Phone Number
        </TextInput>
        <TextInput
          onChange={val => this.props.updateSetting('Name', val)}
          defaultValue={this.props.getSetting('Name', '')}
          required={false}
          note='Name that text message will be sent under'
         >
          Name
        </TextInput>
      </div>
    )
  }
}
