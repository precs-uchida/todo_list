import { connect } from "react-redux";
import { Dispatch } from "redux";
import { Todo } from "../types/Todo";
import AddForm from "../AddForm";
import Actions from "../actions/AppAction";

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
    handleChangeText: (input_text: string) => {
      dispatch(Actions.changeText(input_text));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
