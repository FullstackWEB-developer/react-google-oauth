import "./App.css";

import { GoogleOAuthProvider } from "@react-oauth/google";

// Components
import Profile from "./components/Profile";

function App() {
	const clientId = process.env.REACT_APP_GCP_OAUTH_CLIENT_ID;

	return (
		<>
			<GoogleOAuthProvider clientId={clientId}>
				<div className="App">
					<h2>I love coding</h2>
				</div>
				<Profile />
			</GoogleOAuthProvider>
		</>
	);
}

export default App;
