import styled from "styled-components";
import Logo from "./Logo";

const H = styled.h1`
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  text-align: center;
  margin: 4.8rem auto;
`;

function NotEnoughWidth() {
  return (
    <div>
      <Logo />
      <H>
        This Device width screen is not enough, to view the whole application
        please switch to desktop aur laptop.
      </H>
    </div>
  );
}

export default NotEnoughWidth;
