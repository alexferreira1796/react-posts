import React from "react";

import emojis from "src/utils/emojis";

import Toggle from "src/components/Forms/Toggle";

import * as S from "./styles";

const MainHeader: React.FC = () => {
  const emoji = React.useMemo(() => emojis[Math.floor(Math.random() * emojis.length)], []);
  return (
    <S.Container>
      <Toggle />
      <S.Profile>
        <S.Welcome>Olá, {emoji}</S.Welcome>
        <S.UserName>Visitante</S.UserName>
      </S.Profile>
    </S.Container>
  );
};

export default MainHeader;
