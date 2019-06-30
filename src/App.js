import { withAuthenticator, ChatBot, AmplifyTheme} from 'aws-amplify-react';
import awsconfig from './aws-exports';
import logo from './logo_90.png';
import './App.css';
import React, { Component }  from 'react';
import Amplify from 'aws-amplify';;



Amplify.configure(awsconfig);

const myTheme = {
  ...AmplifyTheme,
  sectionHeader: {
    ...AmplifyTheme.sectionHeader,
    backgroundColor: '#ff6600'
  }
};


class App extends Component {
	
  handleComplete(err, confirmation) {
    if (err) {
      alert('Bot conversation failed')
      return;
    }

    //alert('Success: ' + JSON.stringify(confirmation, null, 2));
    return 'Trip booked. Thank you! what would you like to do next?';
  }
  render() {
	  return (
		<div className="App">
		  <header className="App-header">
			
			<p>
			  Welcome to AWS Bookworm Chatbot!.
			</p>
			
			
			<ChatBot
				title="Retailer Bot"
				theme={myTheme}
				botName="retailersupport"
				welcomeMessage="Welcome, how can I help you today?"
				onComplete={this.handleComplete.bind(this)}
				clearOnComplete={false}
				conversationModeOn={false}
				voiceEnabled={true}
			/>
			<a
			  className="App-link"
			  href="https://testerpro.org/deepdata"
			  target="_blank"
			  rel="noopener noreferrer"
			>
			  More with Bookworm.
			</a>
		  </header>
		</div>
	  );
	}
}

export default withAuthenticator(App, true);