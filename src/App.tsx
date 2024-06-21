
import { Authenticator } from '@aws-amplify/ui-react'
import useIsSignedIn from './CustomHook'
import Todo from './Todo'
import '@aws-amplify/ui-react/styles.css'
//import OktaSignIn from './okta'
//import AuthComponents from './AuthComponents'

//const getRequest = "https://3a6882904e51fbc02fd1.auth.us-west-1.amazoncognito.com/login?redirect_uri=http%3A%2F%2Flocalhost%3A5173%2Fprofile&response_type=code&client_id=8lod9prhan9bevp0prmbvciko&identity_provider=DummyClient&scope=phone%20email%20openid%20profile%20aws.cognito.signin.user.admin&state=92nEVkumw8L0I5pTVNbpxSaQIc0bIY7b&code_challenge=4v5k9uPIQZmRFzx3dmySpTg_f1hAVkuQTKS_RVpMSp8&code_challenge_method=S256&errorMessage=Login+option+is+not+available.+Please+try+another+one"

function App() {

  console.log("calling useIsSignedIn")
  const signed = useIsSignedIn();
  console.log(signed)
  const auth = <Authenticator/>
  console.log(auth)

  return signed ? <Todo/> : <Authenticator/>
}

export default App;
