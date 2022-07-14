import React from "react";

import ContentHeader from "src/components/ContentHeader";
import TextArea from "src/components/Forms/TextArea";
import Button from "src/components/Forms/Button";

import * as S from "./styles";

const Dashboard: React.FC = () => (
  <S.Container>
    <ContentHeader title="Dashboard" lineColor="#4E41F0" />

    <TextArea label="Mensagem" placeholder="Sua mensagem..." />
    <Button>Enviar</Button>
  </S.Container>
);

export default Dashboard;
