import styled from "@emotion/styled";
import LoadingButton from "@mui/lab/LoadingButton/LoadingButton";

interface PropsCustomButton {
  backgroundColor: string;
  widthIcon?: string;
  heightIcon?: string;
  padding?:string;
}

export const CustomButton = styled(LoadingButton)<PropsCustomButton>`
  position: relative;
  background-color: #444;
  color: #fff;
  font-size:14px;
  text-transform: uppercase;
  padding:${p=>p.padding ? p.padding : "10px 0"};
  transition: 0.5s;
  :hover {
    letter-spacing: 0.25em;
    background: ${(p) => p.backgroundColor};
    box-shadow: 0 0 35px ${(p) => p.backgroundColor};
    color: white;
    > i::before {
      left: 0%;
      transform: translateX(-50%) rotate(45deg);
      box-shadow: 40px 39px ${(p) => p.backgroundColor};
    }

    > i::after {
      left: 100%;
      transform: translateX(-50%) rotate(-45deg);
      box-shadow: 30px -32px ${(p) => p.backgroundColor};
    }
  }

  ::before {
    content: "";
    position: absolute;
    inset: 2px;
    background-color: #27282c;
  }

  > span {
    position: relative;
    z-index: 1;
  }

  > i {
    position: absolute;
    inset: 0;
    display: block;
  }

  > i::before {
    content: "";
    position: absolute;
    top: -6px;
    left: 100%;
    transform: translateX(-50%);
    width: ${(p) => p.widthIcon};
    height: ${(p) => p.heightIcon};
    background-color: #27282c;
    border: 2px solid ${(p) => p.backgroundColor};
    transition: 0.5s;
  }

  > i::after {
    content: "";
    position: absolute;
    bottom: -6px;
    left: 0%;
    transform: translateX(-50%);
    width: ${(p) => p.widthIcon};
    height: ${(p) => p.heightIcon};
    background-color: #27282c;
    border: 2px solid ${(p) => p.backgroundColor};
    transition: 0.5s;
  }
`;
