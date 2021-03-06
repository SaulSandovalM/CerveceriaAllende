import firebase from '../components/firebase/Firebase';
import {LISTA_FETCH_SUCCESS} from './types';

export const listaFetch = () => {
    return(dispatch) => {
        firebase.database().ref('orders').on('value', snapshot => {
            dispatch({type: LISTA_FETCH_SUCCESS, payload: snapshot.val()})
        });
    }
};
