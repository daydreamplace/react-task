import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlloc } from "../../../../store/modules/alloc";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import SelectBox from "../../../SelectBox";
import DropDown from "../../../DropDown";
import { periodicRebalancingList } from "../../../../constant/periodicrebalancing";

const PERIODIC = localStorage.getItem("periodic");

const PeriodicRebalancing = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const clickRef = useRef();
  const dispatch = useDispatch();
  const { periodic } = useSelector((state) => state.alloc);

  useEffect(() => {
    if (!PERIODIC)
      dispatch(
        setAlloc({ type: "periodic", value: periodicRebalancingList[0].name })
      );
  }, [PERIODIC]);

  useEffect(() => {
    const clickOutside = (e) => {
      if (
        isDropDown &&
        clickRef.current &&
        !clickRef.current.contains(e.target)
      ) {
        setIsDropDown(false);
      }
    };
    window.addEventListener("mousedown", clickOutside);
    return () => {
      window.removeEventListener("mousedown", clickOutside);
    };
  }, [isDropDown]);

  const handleDropDown = () => {
    setIsDropDown(!isDropDown);
  };

  const selectMenu = (e) => {
    let menu = e.target.value;
    dispatch(setAlloc({ type: "periodic", value: menu }));
    localStorage.setItem("periodic", menu);
    setIsDropDown(false);
  };

  return (
    <PeriodicRebalancingContainer>
      <div className="sub-title">주기 리밸런싱</div>
      <SelectBox
        readOnly={true}
        icon={
          isDropDown ? (
            <IoIosArrowUp onClick={handleDropDown} />
          ) : (
            <IoIosArrowDown onClick={handleDropDown} />
          )
        }
        onClick={handleDropDown}
        setIsDropDown={setIsDropDown}
        value={periodic}
      />
      <div ref={clickRef}>
        {isDropDown && (
          <DropDown
            setIsDropDown={setIsDropDown}
            dropDownList={periodicRebalancingList}
            onClick={selectMenu}
          />
        )}
      </div>
    </PeriodicRebalancingContainer>
  );
};

const PeriodicRebalancingContainer = styled.div``;

export default PeriodicRebalancing;
