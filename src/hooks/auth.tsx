import React from "react";

type AuthContextProps = {
  logged: boolean;
  sigin(email: string, pass: string): void;
  sigout: () => void;
};

const AuthContext = React.createContext<AuthContextProps>({} as AuthContextProps);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = React.useState(() => {
    const isLogged = localStorage.getItem("@reactposts:login");
    return !!isLogged;
  });

  const sigin = (email: string, pass: string): void => {
    if (email === "admin@reactposts.com" && pass === "@reactposts") {
      localStorage.setItem("@reactposts:login", "true");
      setLogged(true);
    } else {
      alert("Usuário não encontrado");
    }
  };

  const sigout = () => {
    localStorage.removeItem("@reactposts:login");
    setLogged(false);
  };

  return (
    <AuthContext.Provider value={{ logged, sigin, sigout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
