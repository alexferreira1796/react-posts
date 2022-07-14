import React from "react";

import ContentHeader from "src/components/ContentHeader";
import ListPosts from 'src/components/ListPosts';

import * as S from "./styles";

const Posts: React.FC = () => (
    <S.Container>
    <ContentHeader title="Posts" lineColor="#4E41F0" />
      <ListPosts />
  </S.Container>
  )

export default Posts;
