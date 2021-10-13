import React from "react";

interface Props {
  input_todo_text: string;
  addClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  changeText: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AddForm: React.FC<Props> = (props) => {
  const { input_todo_text, addClick, changeText } = props;
  return (
    <>
      <input value={input_todo_text} onChange={changeText} type="text" />
      <button className="btn btn-sm btn-primary ms-2" onClick={addClick}>
        追加
      </button>
    </>
  );
};

export default AddForm;
