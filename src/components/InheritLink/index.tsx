import { Link } from "react-router-dom";
import { ReactNode } from "react";
import styled from "styled-components";

interface IProps {
  className?: string;
  to: string;
  children: ReactNode;
}

const CustomLink = ({ className, to, children }: IProps) => (
  <Link className={className} to={to}>
    {children}
  </Link>
);

const StyledCustomLink = styled(CustomLink)`
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;

export default StyledCustomLink;
