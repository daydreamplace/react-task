import styled from "styled-components";

const Button = ({ color, title, onClick, disabled, className, icon }) => {
  return (
    <ButtonContainer
      color={color}
      onClick={onClick}
      disabled={disabled}
      className={className}
    >
      <div className="button">
        {title} {icon}
      </div>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  position: relative;
  display: inline-flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 120px;
  height: 46px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 6px;
  background-color: ${(props) =>
    props.color === "orange" && (({ theme }) => theme.orange)};
  background-color: ${(props) =>
    props.color === "dark-gray" && "rgb(62, 62, 62)"};
  background-color: ${(props) =>
    props.color === "black" && (({ theme }) => theme.black)};
  font-weight: 500;
  cursor: pointer;
  cursor: ${(props) => props.disabled === false && "not-allowed"};

  .button {
    background: transparent;
    color: ${({ theme }) => theme.black};
    color: ${(props) =>
      props.color === "black" && (({ theme }) => theme.textColor)};
    color: ${(props) =>
      props.color === "reset" && (({ theme }) => theme.textColor)};
    text-align: center;
    font-size: 16px;
    font-weight: 400;
  }
`;

export default Button;
