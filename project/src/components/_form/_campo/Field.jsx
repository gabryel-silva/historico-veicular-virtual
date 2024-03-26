import React, { useState } from "react";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  border: none;
  padding: 0;
`;

const InputContainer = styled.div`
  position: relative;
  display: inline-block;
  width: calc(100% - 1.5rem);
`;

export const InputStyle = styled.input`
  padding: 0 10px;
  height: 1.5rem;
  width: 100%;
  color: var(--blue-90);
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--blue-90);

  &&:focus{
    outline: 0;
    border-bottom: 2px solid var(--blue-50)
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  top: ${(props) => (props.active ? "-.8rem" : "0.1rem")};
  left: 10px;
  font-size: ${(props) => (props.active ? "12px" : "inherit")};
  transition: top 0.3s, font-size 0.3s;
`;

export const Field = (props) => {
  const [labelActive, setLabelActive] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const toggleLabel = () => {
    if (inputValue.trim() === "" || !inputValue) {
      setLabelActive((prevLabelActive) => !prevLabelActive);
    }
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const placeholder = !labelActive ? "" : "Este campo não pode estar vazio";

  return (
    <StyledFieldset>
      <InputContainer>
        <StyledLabel htmlFor="input" active={labelActive}>
          {props.label}
        </StyledLabel>
        <InputStyle
          id="input"
          type={props.type}
          value={inputValue}
          onChange={handleInputChange}
          onClick={toggleLabel}
          placeholder={placeholder}
        />
      </InputContainer>
    </StyledFieldset>
  );
};
