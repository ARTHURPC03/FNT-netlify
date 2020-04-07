import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles';

import arthurpc from '../../assets/images/pp.jpeg'

export default function Profile() {
  return (
    <Container>
      <h1>ARTHUR PC</h1>
      <h2>Desenvolvedor Full Stack | Node.js, ReactJS e React Native</h2>
      <img src={arthurpc} alt="ARTHUR PC" />
      <h3>GitHub: ARTHURPC03</h3>
    </Container>
  )
}
