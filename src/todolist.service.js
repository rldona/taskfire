import * as firebase from 'firebase';

// Firebase

export const init = () => {
  const config = {
    apiKey: "AIzaSyBB8Cl3iMw-8w-QCbIUV0_uIqQeL6qKADU",
    authDomain: "tasksfire-ionic2.firebaseapp.com",
    databaseURL: "https://tasksfire-ionic2.firebaseio.com",
    storageBucket: "tasksfire-ionic2.appspot.com",
    messagingSenderId: "179114547975"
  };

  firebase.initializeApp(config);
}

// Taskfire

export let todoList = [];

let removeAll = false;

export const setTodo = (todo) => {
  todoList.push(todo);
}

export const setTodoArray = (arr) => {
  todoList = arr;
}

export const getTodos = () => {
  return todoList;
}

export const changeProperty = (todo, prop) => {
  for (let i = 0; i < todoList.length; i++) {
    if (todo.id === todoList[i].id) {
      todoList[i][prop] = todo.completed;
    }
  }
}

export const removeTodo = (id) => {
  for (let i = 0; i < todoList.length; i++) {
    if (id === todoList[i].id) {
      todoList.splice(i, 1);
    }
  }
}

export const removeAllTodos = (id) => {
  todoList = [];
}

export const getRemoveAll = () => {
  return removeAll;
}

export const setRemoveAll = (opt) => {
  removeAll = opt;
}

export const getTodoId = (description) => {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].description === description) {
      return i;
    }
  }
}

export const updateProperty = (description, prop, value) => {
  for (let i = 0; i < todoList.length; i++) {
    if (todoList[i].description === description) {
      todoList[i][prop] = value;
      return true;
    }
  }
  return false;
}

export const findTodo = (todo) => {
  for (let i = 0; i < todoList.length; i++) {
    if (todo === todoList[i].description) {
      return true
    }
  }
  return false;
}
// OAuth

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
