export const ActionNames = {
  addTodo: "ADD_TODO",
  removeTodo: "REMOVE_TODO",
  switchDone: "SWITCH_DONE",
  changeText: "CHANGE_TEXT",
};

const Actions = {
  addTodo: (title: string) => {
    return {
      type: ActionNames.addTodo,
      payload: title,
    };
  },
  removeTodo: (index: number) => {
    return {
      type: ActionNames.removeTodo,
      payload: index,
    };
  },
  switchDone: (index: number) => {
    return {
      type: ActionNames.switchDone,
      payload: index,
    };
  },
  changeText: (input_text: string) => {
    return {
      type: ActionNames.changeText,
      payload: input_text,
    };
  },
};

export default Actions;
