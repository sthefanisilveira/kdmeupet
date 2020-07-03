import React, { useState } from 'react';
import { Container, Input, Button, Title } from './styles';
import { useHistory } from 'react-router-dom';


export default function Login() {
  
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const history = useHistory();

  // const login = () => {
  
  // }
  
  const cadastro = () => {

    let cadastro = [];
    


    cadastro.push({
        email: email,
        pass: pass,
    })

    localStorage.setItem('cadastro', cadastro);
  }

  return (
   <Container> 
     <Title>Seja bem vindo! <br></br> Faça login para continuar </Title>
      <Input type="email" placeholder="Informe seu email"
      value={email} onChange={e=> setEmail(e.target.value)}
      />
      <Input type="password" placeholder="Informe sua senha"
      value={pass} onChange={e=> setPass(e.target.value)}
      />
      <Button> Entrar com e-mail agora </Button>
      <Button primary onClick={cadastro}> Cadastre com e-mail agora </Button>
   </Container>   
  );
}