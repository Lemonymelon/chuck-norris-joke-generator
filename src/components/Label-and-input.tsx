import React from "react";

interface Props {
  inputId: string;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
}

const LabelAndInput = (props: Props) => {
  const { inputId, inputOnChange, labelText } = props;
  return (
    <div className="jokeContainer__labelAndInput">
      <label htmlFor={inputId}>{labelText}</label>
      <input
        id={inputId}
        onChange={(e) => {
          inputOnChange(e);
        }}
      ></input>
    </div>
  );
};

export default LabelAndInput;
