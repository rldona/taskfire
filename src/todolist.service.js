import * as firebase from 'firebase';

let ref = null;

export let todoList = [];

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

  this.todosRef.off();

  this.listenersFirebase();

}

//
// PRIVATE
//

listenersFirebase = () => {

  // function addedEvent(data) {
  //     // self.add(data.val().description);
  // }

  // function removedEvent(event) {

  //     console.log(event);

  //     // for (var i = 0, size = this.todos.length; i < size; i++) {
  //     //   if (typeof event.detail.key !== 'undefined' && typeof this.todos[i] !== 'undefined') {
  //     //     if (event.detail.key === this.todos[i].key) {
  //     //       this.splice('todos', i, 1);
  //     //     }
  //     //   }
  //     // }

  //     // toast message
  //     // this.$.toast.open();
  // }

  // function removeTodo(data) {

  //     console.log('removeTodo: ', data);

  //     // var todoRemoved = {};

  //     // todoRemoved.key         = data.key;
  //     // todoRemoved.description = data.val().description;

  //     // self.borrarTodo(todoRemoved);
  // }

  // firebase listeners
  this.todosRef.on('child_added', (data) => {

    // console.log('child_added: ', data);

    // PASAR POR LOS EVENTOS PARA AÑADIR, BORRAR Y LISTAR LOS TODOS !!!

    // TODO: hacer push a un array de todos que conecte con la vista todo-list.js y pinte el listado
    // TODO: hacer lo mismo cuando se borra un todo

    // console.log('added: ', data.val());
    // console.log('todos: ', self.todos);

    // var todo = data.val();
    // todo.key = data.key;

    // if (self.todos) {
    //     // self.add(todo);
    //     self.todos.push({ key: todo.key, value: todo.description, completed: todo.completed });
    //     self.list();
    // }

  });

  // this.todosRef.on('child_removed', (todo) => {
  //   this.borrarTodo(todo);
  // });

}


// borrarTodo = (todo) => {

//   console.log('delete: ', todo.key);
//   console.log('delete: ', todo.val);

//   console.log('todos: ', todoList);

//   for (var i = 0, size = this.todoList.length; i < size; i++) {
//     if (todo.key === this.todoList[i].key) {
//       this.todoList.splice(i, 1);
//       // this.push('allRemoved', todo);
//       return true;
//     }
//   }

//   // return false;

// }

//
// PUBLIC
//

export const getTodoList = () => {
  return todoList;
}

export const setTodoList = (todo) => {
  todoList.push(todo);
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

// export const list = () => {
//   this.todosRef.once('value', (snap) => {

//     this.todos = [];

//     for(var key in snap.val()) {
//       var obj = {
//         id: key,
//         value: snap.val()[key].description,
//         completed: snap.val()[key].completed
//       };

//       this.todos.push(obj);
//     }

//   });
// }

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
