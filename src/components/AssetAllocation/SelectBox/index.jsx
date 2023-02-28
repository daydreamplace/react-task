import { useState } from "react";
import styled from "styled-components";

const SelectBox = ({ readOnly, icon, onClick, onChange, value }) => {
  const [isActive, setIsActive] = useState(false);

  const handleFocus = (e) => {
    setIsActive(true);
  };

  const handleBlur = (e) => {
    setIsActive(false);
  };

  return (
    <SelectBoxContainer>
      <input
        readOnly={readOnly}
        onClick={onClick}
        onFocus={() => {
          handleFocus();
        }}
        onBlur={() => {
          handleBlur();
        }}
        className={isActive ? "active" : ""}
        // value={isActive ? value : ""}
        // onChange={onChange}
      />
      <div className="icon" onClick={onClick}>
        {icon}
      </div>
    </SelectBoxContainer>
  );
};

const SelectBoxContainer = styled.div`
  position: relative;
  width: 640px;

  input {
    width: 640px;
    height: 46px;
    border: 1px solid ${({ theme }) => theme.lightGray};
    border-radius: 6px;
    background: ${({ theme }) => theme.backgroundColor};
    color: rgb(230, 230, 230);
    text-align: center;
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;
  }

  input:hover {
    border: 1px solid ${({ theme }) => theme.textColor};
  }

  .active {
    outline: none;
    border: 1px solid ${({ theme }) => theme.orange};
  }

  .icon {
    position: absolute;
    bottom: -1px;
    right: 20px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    height: 46px;
    background: transparent;

    svg {
      color: ${({ theme }) => theme.red};
    }
  }
`;

export default SelectBox;