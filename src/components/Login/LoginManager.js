import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';

export const initalizeLoginFrameWork = () => {
    if(firebase.apps.length === 0) {
      firebase.initializeApp(firebaseConfig);
    }
}

// HANDLE SIGN IN
export const handleSignIn = ()=>{
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
  .then(res =>{
    const {displayName, email, photoURL} = res.user;
    const signedInUser = {
      isSignedIn: true,                       
      name: displayName,
      email: email,
      photoURL: photoURL,
      success: true 
    }
    return signedInUser;
  })
  .catch(error => {
    console.log(error);
    console.log(error.message);
  })
}

export const handleFbSignIn = () => {
    var fbProvider = new firebase.auth.FacebookAuthProvider();
   return firebase.auth().signInWithPopup(fbProvider)
    .then((res) => {
      var credential = res.credential;
      var user = res.user;
      user.success = true;
      return user;
      var accessToken = credential.accessToken;
  
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
  
      // ...
    });
  }

  // HANDLE SIGN OUT
  export const handleSignOut =()=>{
    return firebase.auth().signOut()
    .then(res =>{
      const signedOutUser = {
        isSignedIn: false,
        name: '',                         
        email: '',
        password: '',
        photoURL:'',
        
      }
      return signedOutUser;
    })
    .catch(error => {
      console.log(error);
      console.log(error.message);
    })
  }

  export const createUserWithEmailAndPassword = (name, email, password) =>{
  //  return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(res => {
      // const newUserInfo ={...user};
      const newUserInfo = res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
      return newUserInfo;
      updateUserName(name); 
  })
.catch(error => {
  const newUserInfo ={};
  newUserInfo.error = error.message
  newUserInfo.success = false;
  return newUserInfo;
  });
  }

  export const signInWithEmailAndPassword = (email, password) => {
   return firebase.auth().signInWithEmailAndPassword(email, password)
    .then(res => {
      const newUserInfo =res.user;
      newUserInfo.error = '';
      newUserInfo.success = true;
     return newUserInfo;
      
})
.catch((error) => {
const newUserInfo ={};
newUserInfo.error = error.message
newUserInfo.success = false;
});
}

const updateUserName = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(()=> {
      console.log('Update name successfully.');
    }).catch(error => {
      console.log(error);
    });
   }