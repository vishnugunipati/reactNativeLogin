import firebase from 'firebase';

export const authInputChange = ({field, value}) => {
  return {
    type: 'Auth_Input_Change',
    payload: {field, value}
  }
};

export const login = ({ email, password}) => {
  return(dispatch) =>
  {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => {
        dispatch({type: 'LOGIN_SUCCESS', payload: user})
      })
      .catch(function (error) {
        dispatch({type: 'LOGIN_FAILURE'})
    });
  }
};