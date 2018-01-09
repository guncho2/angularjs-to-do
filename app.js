


//Register the app as a module using AngularJS's
//.module() method
angular
      .module('to-do', [])
      .controller('ToDoController', ToDoController);
//Register that controller as well and declare the
//controller's function.
function ToDoController(){
  //We stored an integer in our counter app, but our
  //to-do app will track a list of tasks. In programming,
  // we usually represent lists as arrays, so let's
  //initialize our tasks array. We'll add some dummy
  //content to it so that we have some starting tasks.
  this.tasks = ['Walk the cat', 'Eat second Breackfast', 'Watch Rocky cutscenes on youtube since too tired to workout'];
//In app.js, define an createTask() function inside the controller.
// Assign the function to .this. so that we can access it from our
//view.
  this.createTask = ()  => {
//The createTask() function should push a new task to our tasks
// array, but how do we get the value of the text field? Because
//we used ng-model and gave it a value of taskName, the property
// this.taskName in our controller is bound to the value of the
//input. Push the  taskName property to the tasks array.
    this.tasks.push( this.taskName );
//Any changes to the value of the text input will change the taskName
// property of the controller
//Clear the Text Field
    this.taskName = '';
};
this.deleteTask = (index) => {
     this.tasks.splice(index, 1);
   };
}
