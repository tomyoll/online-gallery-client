import React, {useState} from 'react';
import Auth from "../components/Auth";

const AuthPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userName, setUserName] = useState('');

  const onUserNameChange = (e) => { setUserName(e.target.value) }
  const onEmailChange = (e) => { setEmail(e.target.value) }
  const onPasswordChange = (e) => { setPassword(e.target.value) }
  const onSignInSubmit = (e) => {
    e.preventDefault();
    console.log('email: ' + email + ', password: ' + password);
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
