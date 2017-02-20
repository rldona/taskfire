import * as firebase from 'firebase';

let ref = null;

export let todoList = [];

let deleteAll = false;

export const fb = () => {
  const config = {
    apiKey: "AIzaSyBB8Cl3iMw-8w-QCbIUV0_uIqQeL6qKADU",
    authDomain: "tasksfire-ionic2.firebaseapp.com",
    databaseURL: "https://tasksfire-ionic2.firebaseio.com",
    storageBucket: "tasksfire-ionic2.appspot.com",
    messagingSenderId: "179114547975"
  };

  firebase.initializeApp(config);

  // init database firebase
  this.database = firebase.database();
  // database ref
  this.todosRef = this.database.ref('todos/');
  // prevent listeners
  this.todosRef.off();
}

//
// PUBLIC
//

export const getTodoList = () => {
  return todoList;
}

export const setTodoList = (todo) => {
  todoList.push(todo);
}

export const getDeleteAll = (state) => {
  return deleteAll;
}

export const setDeleteAll = (state) => {
  deleteAll = state;
}

export const getReference = () => {
  return this.todosRef;
}

export const add = (todo) => {
  this.todosRef.push({
    description: todo,
    completed: false
  });
}

// export const login = (email, password) => {
//   firebase.auth().signInWithEmailAndPassword(email,password)
//     .then((user) => {
//       currentUser = user;

//       userService.setCurrentUser(user);

//       userService.init();

//       themoviedb.getNavigator().push({index: 1, title: 'home'});
//     }).catch((error) => {
//       alert(error.message);
//     });
// }

// export const register = (name, email, password) => {

//   firebase.auth().createUserWithEmailAndPassword(email, password)
//     .then((user) => {
//       user.updateProfile({
//         displayName: name,
//         photoURL: ''
//       }).then((user) => {
//         currentUser = user;

//         userService.setCurrentUser(user);

//         themoviedb.getNavigator().resetTo({index: 1, title: 'home'});
//       }, (error) => {
//         alert(error);
//       });
//     }).catch(function(error) {
//       alert(error.message);
//     });

// }

// export const retrievePassword = (email) => {
//   const auth  = firebase.auth();

//   auth.sendPasswordResetEmail(email)
//     .then(function() {
//       themoviedb.getNavigator().replace({ index: 0.1, title: 'login'});
//     }, function(error) {
//       alert(error.message);
//     });
// }

// export const logout = (user) => {
//   firebase.auth().signOut().then(function() {
//     themoviedb.getNavigator().resetTo({ index: 0, route: 'login'});
//   }, function(error) {
//     alert(error.message);
//   });
// }

// export const setCurrentUser = (user) => {
//   currentUser = user;
// }

// export const getCurrentUser = () => {
//   return currentUser;
// }

// export const getUser = () => {
//   return firebase.auth().currentUser;
// }
