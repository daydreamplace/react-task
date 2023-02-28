import { useState } from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import styled from "styled-components";
import SelectBox from "../../SelectBox";

const PeriodicRebalancing = () => {
  const [isDropDown, setIsDropDown] = useState(false);

  const onClick = () => {
    setIsDropDown(!isDropDown);
  };

  return (
    <PeriodicRebalancingContainer>
      <div className="sub-title">주기 리밸런싱</div>
      <SelectBox
        readOnly={true}
        icon={
          isDropDown ? (
            <IoIosArrowUp onClick={onClick} />
          ) : (
            <IoIosArrowDown onClick={onClick} />
          )
        }
        onClick={onClick}
      />
    </PeriodicRebalancingContainer>
  );
};

const PeriodicRebalancingContainer = styled.div``;

export default PeriodicRebalancing;
