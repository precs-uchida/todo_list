import {
  AddAction,
  ChangeTextAction,
  InitAction,
  RemoveAction,
  SwitchDoneAction,
} from "../reducers/AppReducer";

export type ActionType =
  | "INIT"
  | "SET_TODOS"
  | "ADD_TODO"
  | "REMOVE_TODO"
  | "SWITCH_DONE"
  | "CHANGE_TEXT";

const Actions = {
  init: (): InitAction => {
    return {
      type: "INIT",
    };
  },
  addTodo: (title: string): AddAction => {
    return {
      type: "ADD_TODO",
      payload: title,
    };
  },
  removeTodo: (index: number): RemoveAction => {
    return {
      type: "REMOVE_TODO",
      payload: index,
    };
  },
  switchDone: (index: number): SwitchDoneAction => {
    return {
      type: "SWITCH_DONE",
      payload: index,
    };
  },
  changeText: (input_text: string): ChangeTextAction => {
    return {
      type: "CHANGE_TEXT",
      payload: input_text,
    };
  },
};

export default Actions;
