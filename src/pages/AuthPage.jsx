import React, {useState} from 'react';
import Auth from "../components/Auth";
import register from "../api/User";

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const onUserNameChange = (e) => { setUserName(e.target.value) }
  const onEmailChange = (e) => { setEmail(e.target.value) }
  const onPasswordChange = (e) => { setPassword(e.target.value) }

  const onSignInSubmit = async (e) => {
    e.preventDefault();
    const registerResponse = await register(email, password, userName);
    console.log(registerResponse);
  }

  return (
    <Auth
      onUserNameChange={onUserNameChange}
      onEmailChange={onEmailChange}
      onPasswordChange={onPasswordChange}
      onSignInSubmit={onSignInSubmit}
      userName={userName}
      email={email}
      password={password}
    />
  )
}

export default AuthPage;
