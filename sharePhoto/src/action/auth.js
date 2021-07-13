/* eslint-disable prettier/prettier */
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import Snackbar from 'react-native-snackbar';

export const signup = data => async dispatch => {
    console.log(data);

  const {name, instaUserName, email, bio, password, country, image} = data;
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(res => {
      console.log(res);
      console.log('user created successfullt');
      database()
        .ref('/users/' + data.user.uid)
        .set({
          name,
          instaUserName,
          country,
          bio,
          image,
          uid: data.user.uid,
        })
        .then(() => {
          console.log('data set succes');
        });
      Snackbar.show({
        text: 'Account created',
        textColor: 'white',
        backgroundColor: '#1b262c',
      });
    })
    .catch(error => {
      console.log(error);
      Snackbar.show({
        text: 'Signup failed',
        textColor: '#FFFFFF',
        backgroundColor: 'red',
      });
    });
};


export const signin = data => async dispatch => {
    console.log(data);
    const {email,password} = data;
    auth().signInWithEmailAndPassword(email,password)
    .then(() => {
        console.log('signin succes');
        Snackbar.show({
            text: 'signin to account',
            textColor: 'white',
            backgroundColor: '#1b262c',
          });
    })
    .catch(error=> {
        console.log(error);
        Snackbar.show({
            text:'Sigin failed',
            textColor:'white',
            backgroundColor:'red',
        });
    });
};


export const signout  = () => async dispatch => {
auth().signOut()
.then(() => {
    console.log('signout succes');
    Snackbar.show({
        text: 'signout from account',
        textColor: 'white',
        backgroundColor: '#1b262c',
      });
})
.catch(error=> {
    console.log(error);
    Snackbar.show({
        text:'Signout failed',
        textColor:'white',
        backgroundColor:'red',
    });
});
};
