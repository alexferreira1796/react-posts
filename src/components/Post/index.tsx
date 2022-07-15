import React from "react";

import ContentHeader from "src/components/ContentHeader";

import * as S from "./styles";

const Post: React.FC = () => (
  <>
    <ContentHeader title="Título" lineColor="#4E41F0" />
    <S.Container></S.Container>
  </>
);

export default Post;
