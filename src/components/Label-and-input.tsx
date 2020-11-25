import React from "react";

interface Props {
  inputId: string;
  inputClassName: string;
  inputOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  labelText: string;
}

const LabelAndInput = (props: Props) => {
  const { inputId, inputClassName, inputOnChange, labelText } = props;
  return (
    <div className="jokeContainer_labelAndInput">
      <label htmlFor={inputId}>{labelText}</label>
      <input
        id={inputId}
        className={inputClassName}
        onChange={(e) => {
          inputOnChange(e);
        }}
      ></input>
    </div>
  );
};

export default LabelAndInput;
