import { connect } from "react-redux";
import App from "../App";
import Actions from "../actions/AppAction";
import { Todo } from "../types/Todo";
import { Dispatch } from "redux";

interface State {
  input_todo_text: string;
  todos: Todo[];
}

const mapStateToProps = (state: State) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    handleAddTodo: (title: string) => {
      dispatch(Actions.addTodo(title));
    },
    handleRemoveTodo: (index: number) => {
      dispatch(Actions.removeTodo(index));
    },
    handleSwitchDone: (index: number) => {
      dispatch(Actions.switchDone(index));
    },
    handleChangeText: (input_text: string) => {
      dispatch(Actions.changeText(input_text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
