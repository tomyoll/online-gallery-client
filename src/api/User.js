import axios from 'axios';

export default async function register(email, password, username) {
  try {
    console.log({email, password, user: username })
    const result = await axios.post('http://localhost:5054/Register', {email, password, username })
    return result
  } catch (e) {
    return e.response
  }
}
