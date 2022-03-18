const app = new Vue({
  el: "#app",
  data: {
    newTodo: "",
    todos: [],
  },

  methods: {
    addTodo() {
      if (this.newTodo.trim() === "") {
        console.warn("Write something!");
      } else {
        const newTodoObject = {};
        newTodoObject.text = this.newTodo.trim();
        newTodoObject.done = false;
        this.todos.push(newTodoObject);
        this.newTodo = "";
      }
    },
  },
});
