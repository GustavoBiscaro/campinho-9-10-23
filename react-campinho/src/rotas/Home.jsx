import axios from "axios";
import {useState, useEffect } from "react";

import { Link } from "react-router-dom";

import "./Home.css";

const Home = () => {

  const getUser = async () => {

    try {
        const resposta = await axios.get("https://jsonplaceholder.typicode.com/users");

        const data = resposta.data;
        console.log(data);
        
    } catch (erro) {
        console.error("Erro: " + erro)
    }
  };

  useEffect(() => {
    getUser()
  }, [])



  return <div>Home</div>;
};

export default Home;