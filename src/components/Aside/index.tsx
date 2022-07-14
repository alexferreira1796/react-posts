import React, { useState } from "react";
import { Link } from "react-router-dom";

import MenuLinks from "src/config/menu";

import Toggle from "src/components/Toggle";

import { MdClose, MdMenu } from "react-icons/md";
import { DiReact } from "react-icons/di";

import {
  Container,
  Header,
  Title,
  MenuContainer,
  MenuItemLink,
  ToggleMenu,
  ThemeToggleFooter,
} from "./styles";

type Links = {
  name: string;
  path: string;
  icon: React.ReactNode;
};

const Aside: React.FC = () => {
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenuIsOpened(!toggleMenuIsOpened);
  };

  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu onClick={handleToggleMenu}>
          {toggleMenuIsOpened ? <MdClose /> : <MdMenu />}
        </ToggleMenu>
        <DiReact size={45} />
        <Title>React Posts</Title>
      </Header>

      <MenuContainer>
        {MenuLinks &&
          MenuLinks.map(({ name, path, icon }: Links, index) => (
              <MenuItemLink key={index}>
                <Link to={path}>
                  <>
                    {icon}
                    {name}
                  </>
                </Link>
              </MenuItemLink>
            ))}
      </MenuContainer>

      <ThemeToggleFooter menuIsOpen={toggleMenuIsOpened}>
        <Toggle />
      </ThemeToggleFooter>
    </Container>
  );
};

export default Aside;
