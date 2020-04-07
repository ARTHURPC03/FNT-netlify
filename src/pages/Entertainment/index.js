import React from 'react'

import { Container, Ul, Leatherboard, User } from './styles'
import userPlaceholder from '../../assets/images/pp.jpeg'


export default function Entertainment() {
  return (
    <Container>
      <Ul>
        <li>
          <strong>Assista Netflix com os amigos na quarentena</strong>
          <span>por ARTHUR PC, 1 hora atrás</span>
          <iframe width="476" height="267.75" src="https://www.youtube.com/embed/J3H8wdx66o8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br />
          <button type="button">Mais detalhes</button>
        </li>

        <li>
          <strong>Título</strong>
          <span>por Franco, 15 horas atrás</span>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ngVU74daJ8Y" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <br />
          <button type="button">Mais detalhes</button>
        </li>

        <li>
          <strong>Título</strong>
          <span>por Franco, 15 horas atrás</span>
          <iframe
            title="vvar3"
            width="476"
            height="267.75"
            src="https://www.youtube.com/embed/BS0s1jxzL1g"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <br />
          <button type="button">Mais detalhes</button>
        </li>

        <li>
          <strong>Título</strong>
          <span>por Franco, 15 horas atrás</span>
          <iframe
            title="MMs"
            width="476"
            height="267.75"
            src="https://www.youtube.com/embed/ndbvmYGb1ZI"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <br />
          <button type="button">Mais detalhes</button>
        </li>
      </Ul>
      <Leatherboard>
        <h1>Placar</h1>
        <small>Ranking da plataforma</small>

        {[...Array(1)].map((x,i) => (
          <User key={i}>
            <img src={userPlaceholder} alt="User profile"/>
            <div className="details">
              <h3>ARTHUR PC</h3>
              <span className="first">200</span>
            </div>
          </User>
        ))}
      </Leatherboard>
    </Container>
  )
}
