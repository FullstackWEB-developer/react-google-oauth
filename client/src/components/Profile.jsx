import { GoogleLogin, googleLogout } from "@react-oauth/google";

const Profile = () => {
	const logout = () => {
		console.log("Logging out");
		googleLogout();
	};

	return (
		<>
			<GoogleLogin
				onSuccess={(credentialResponse) => {
					console.log("Login succeeded", credentialResponse);
				}}
				onError={() => {
					console.log("Login Failed");
				}}
				useOneTap
			/>

			<button onClick={logout}>Log Out</button>
		</>
	);
};

export default Profile;
