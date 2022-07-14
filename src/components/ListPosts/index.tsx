import React from 'react';
import { Link } from "react-router-dom";

import * as S from './styles';

const ListPosts: React.FC = () => <S.Container><Link to={"#"}><S.List><S.Title>aaaaa</S.Title><S.Subtitle>aaaaa</S.Subtitle></S.List></Link></S.Container>

export default ListPosts;
