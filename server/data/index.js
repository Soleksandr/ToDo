const data = []

class Todo {
  constructor(caption) {
    this.caption = caption;
    this.isCompleted = false;
    this.id = Date.now();
  }

  toggleCompletion = () => {
    this.isCompleted = !this.isCompleted;
  }

  editCaption = caption => this.caption = caption;
}

export const getData = () => data;
export const addTodo = (caption) => {
  const newTodo = new Todo(caption);
  data.push(new Todo(caption));
  return newTodo;
};

export const removeTodo = (id) => {
  const removelIndex = data.findIndex(todo => todo.id === +id);
  data.splice(removelIndex, 1);
  return data;
};

export const toggleCompletion = (id) => {
  const todoToChange = data.find(todo => todo.id === +id);
  console.log(todoToChange);
  todoToChange.toggleCompletion();
  return todoToChange;
};

export const editCaption = (id, newCaption) => {
  data.forEach((todo) => {
    if (todo.id === id) {
      todo.editCaption(newCaption);
    }
  });
  return data;
};

data.push(new Todo('test todo'));
