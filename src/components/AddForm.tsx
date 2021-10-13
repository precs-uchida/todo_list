import React from "react";

interface Props {
  input_todo_text: string;
  addClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  changeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

class AddForm extends React.Component<Props> {
  render() {
    const { input_todo_text, changeText, addClick } = this.props;
    return (
      <>
        <input value={input_todo_text} onChange={changeText} type="text" />
        <button className="btn btn-sm btn-primary ms-2" onClick={addClick}>
          追加
        </button>
      </>
    );
  }
}

export default AddForm;
