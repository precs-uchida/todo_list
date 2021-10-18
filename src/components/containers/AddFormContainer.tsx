import { connect } from "react-redux";
import { Dispatch } from "redux";
import AddForm, { Props } from "../AddForm";
import Actions from "../actions/AppAction";

type State = Pick<Props, "input_todo_text">;

type AddFormDispatch = Pick<Props, "handleAddTodo" | "handleChangeText">;

const mapStateToProps = (state: State) => {
  return state;
};

const mapDispatchToProps = (dispatch: Dispatch): AddFormDispatch => {
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
