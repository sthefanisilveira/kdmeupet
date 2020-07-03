import React, {useState} from 'react';
import {Container, Button, Title} from './styles'
import {useHistory} from 'react-router-dom';

export default function Home() {

  return (
   <Container> 
     <Title> Pronto para encontrar o seu Pet! </Title>
      <Button> Começar! </Button>
   </Container>   
  );
}