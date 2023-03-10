import { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setAlloc } from "../../../../store/modules/alloc";
import styled from "styled-components";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import SelectBox from "../../../SelectBox";
import DropDown from "../../../DropDown";
import { assetAllocationAlgorithmList } from "../../../../constant/assetallocationalgorithm";

const ALGORITHM = localStorage.getItem("algorithm");

const AssetAllocationAlgorithm = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const clickRef = useRef();
  const dispatch = useDispatch();
  const { algorithm } = useSelector((state) => state.alloc);

  useEffect(() => {
    if (!ALGORITHM)
      dispatch(
        setAlloc({
          type: "algorithm",
          value: assetAllocationAlgorithmList[0].name,
        })
      );
  }, [ALGORITHM]);

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
    dispatch(setAlloc({ type: "algorithm", value: menu }));
    localStorage.setItem("algorithm", menu);
    setIsDropDown(false);
  };

  return (
    <AssetAllocationAlgorithmContainer>
      <div className="sub-title">자산배분 알고리즘</div>
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
        value={algorithm}
      />
      <div ref={clickRef}>
        {isDropDown && (
          <DropDown
            setIsDropDown={setIsDropDown}
            dropDownList={assetAllocationAlgorithmList}
            onClick={selectMenu}
          />
        )}
      </div>
    </AssetAllocationAlgorithmContainer>
  );
};

const AssetAllocationAlgorithmContainer = styled.div``;

export default AssetAllocationAlgorithm;
