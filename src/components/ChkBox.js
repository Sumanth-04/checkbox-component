import React from "react";
import CheckBox from "rc-checkbox";

function ChkBox(props) {
  return (
    <div>
    
      <CheckBox
        name={props.name}
        className={props.className}
        onChange={props.onChange}
        onBlur={props.onBlur}
        onFocus={props.onFocus}
        style={props.style}
        defaultChecked = {props.defaultChecked}
      />
      {props.value}
    </div>
  );
}

ChkBox.defaultProps = {
  name: "Empty Prop Name",
  className: "ChkBox",
  checked : false,
  defaultChecked : false,
  value: "Empty Prop value",
  onChange: () => {},
  onBlur: () => {},
  onFocus: () => {},
  style: {},
};

export default ChkBox;
