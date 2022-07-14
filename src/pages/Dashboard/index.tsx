import React from "react";

import ContentHeader from "src/components/ContentHeader";

import * as S from "./styles";

const Dashboard: React.FC = () => (
    <S.Container>
      <ContentHeader title="Dashboard" lineColor="#4E41F0" />
    </S.Container>
  );

export default Dashboard;
