import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "../css/UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const {pathname} = location;
    switch(pathname){
        case '/conta/postar':
             setTitle('Adicionar Foto');
             break;

        case '/conta/estatisticas':
            setTitle('Estatísticas');
            break;

        case '/conta':
            setTitle('Perfil');
            break;
        default:
            setTitle('Minha Conta');
    }
 
  }, [location]);

  console.log(location);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
