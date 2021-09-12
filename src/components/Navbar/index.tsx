// noinspection CssInvalidPropertyValue

import { AppBar, Button, Tooltip } from "@material-ui/core";
import Link from "../InheritLink";
import styled from "styled-components";

interface IProps {
  className?: string;
}

const NavbarComponent = ({ className }: IProps) => (
  <AppBar position={"sticky"} className={className}>
    <Tooltip title={"Title"} placement={"left"}>
      <>
        <Link to="/">
          <Button>Home page </Button>
        </Link>
        <Link to="/calculator">
          <Button>Calculator </Button>
        </Link>
      </>
    </Tooltip>
  </AppBar>
);

export const Navbar = styled(NavbarComponent)`
  display: inline-table;
  justify-content: center;
  padding-left: 20px;
`;
