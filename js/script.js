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

    removeTodo(indexTodo) {
      this.todos.splice(indexTodo, 1);
    },

    AddLineThrough(todoIndex) {
      this.todos[todoIndex].done = !this.todos[todoIndex].done;
    },

    switchTheme() {
      if (document.documentElement.getAttribute("data-theme") === "blue") {
        document.documentElement.setAttribute("data-theme", "red");
      } else {
        document.documentElement.setAttribute("data-theme", "blue");
      }
    },
  },
});
