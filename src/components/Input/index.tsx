import React from "react";

import * as S from "./styles";

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<InputProps> = ({ ...rest }) => <S.Input {...rest} />;

export default Input;
