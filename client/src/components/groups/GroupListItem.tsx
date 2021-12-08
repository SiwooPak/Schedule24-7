import { FC, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThreeDot from "../ThreeDot";

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 9rem;
  height: 9rem;
  border: 1px solid #cfcdcd;
  /* box-shadow: 1px 1px 1px #a7a7a75c; */
  border-radius: 0.4rem;
  background-color: white;
  margin: 0.5rem;

  a {
    text-decoration: none;
  }
  a:visited {
    text-decoration: none;
  }
`;

export const Div1 = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SubDiv1 = styled.div`
  margin-left: 0.5rem;
`;
export const SubDiv2 = styled.div`
  margin-right: 0.55rem;
  margin-top: 0.35rem;
`;

export const Div2 = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-left: 0.7rem;
  margin-top: 1.8rem;
  color: black;
`;

export const Div3 = styled.div`
  font-size: 14px;
  font-weight: 300;
  margin-left: 0.7rem;
`;

const ToggleMenu = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  > div {
    border-radius: 50%;
    width: 4px;
    height: 4px;
    background-color: #000000;
  }
  > div + div {
    margin-top: 2px;
  }
`;

interface Props {
  emoji: string;
  desc: string;
  name: string;
  id: string;
}
const GroupListItem: FC<Props> = ({ emoji, desc, name, id }) => {
  const [openThreeDot, setOpenThreeDot] = useState(false);
  const handleOpenThreeDot = () => {
    setOpenThreeDot(true);
  };
  const handleCloseThreeDot = () => {
    return openThreeDot ? setOpenThreeDot(false) : null;
  };

  return (
    <MainDiv onClick={handleCloseThreeDot}>
      <Div1>
        <SubDiv1>{emoji}</SubDiv1>
        <SubDiv2>
          <ToggleMenu onClick={handleOpenThreeDot}>
            <div />
            <div />
            <div />
          </ToggleMenu>
        </SubDiv2>
        {openThreeDot ? <ThreeDot id={id}/> : ""}
      </Div1>
      <Link to={`/group/${id}/member`}>
        <Div2>{name}</Div2>
      </Link>
      <Div3>{desc}</Div3>
    </MainDiv>
  );
};

export default GroupListItem;
