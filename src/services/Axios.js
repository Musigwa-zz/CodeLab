import Axios from 'axios';
import { baseURL } from '../helpers/constants';

export default Axios.create({
  responseType: 'json',
  baseURL,
  validateStatus: status => status >= 200 < 500,
});
