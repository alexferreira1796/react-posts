import React from "react";
import { DiReact } from "react-icons/di";

import { AuthContext } from "src/hooks/auth";

import Input from "src/components/Forms/Input";
import Button from "src/components/Forms/Button";

import * as S from "./styles";

const SignIn: React.FC = () => {
  const { sigin } = React.useContext(AuthContext);

  const [email, setEmail] = React.useState<string>("");
  const [pass, setPass] = React.useState<string>("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email !== "" && pass !== "") {
      sigin(email, pass);
    }
  };

  return (
    <S.Container>
      <S.Logo>
        <DiReact size={45} />
        <h2>React Posts</h2>
      </S.Logo>

      <S.Form onSubmit={handleSubmit}>
        <S.FormTitle>Entrar</S.FormTitle>

        <Input
          type="email"
          placeholder="email@email.com"
          required
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
        <Input
          type="password"
          placeholder="****"
          required
          value={pass}
          onChange={({ target }) => setPass(target.value)}
        />

        <Button type="submit">Acessar</Button>
      </S.Form>
    </S.Container>
  );
};

export default SignIn;
