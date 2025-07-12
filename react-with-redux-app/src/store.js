import { legacy_createStore as createStore} from 'redux';
import reducer from './reducer';

let storeRef= createStore(reducer);

export default storeRef;
