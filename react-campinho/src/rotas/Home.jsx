import axios from "axios";
import {useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {
    const [usuarios, setUsers] = useState([]);

  const getUser = async () => {

    try {
        const resposta = await axios.get("https://jsonplaceholder.typicode.com/users");

        const data = resposta.data;
        
        setUsers(data)

    } catch (erro) {
        console.error("Erro: " + erro)
    }
  };

  useEffect(() => {
    getUser()
  }, []);



  return <div>
    <h1>Usuários</h1>
    {usuarios.length === 0 ? (<p>Carregando...</p>) : (
        usuarios.map((usuario) => (
            <div className="usuario" key={usuario.id}>
                <div className="info">
                  
                <h2><p>Nome:</p>{usuario.name}</h2>
                <h2><p>Usuário:</p>{usuario.username}</h2>
                <h2><p>Email:</p>{usuario.email}</h2>
              
                </div>
            </div>
        ))
    )}
  </div>;
};

export default Home;