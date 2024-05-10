import Register from './Register'
import axios from 'axios';

export default function App() {
  axios.defaults.baseURL = 'http://localhost:3001';
  axios.defaults.withCredentials = true;

  return (
   <Register />
  )
}