import React from 'react'
import { Link } from 'react-router-dom'
import { FaExternalLinkAlt } from 'react-icons/fa'
import { IoIosStarHalf, IoIosStarOutline, IoIosStar } from 'react-icons/io'

import Example from '../../components/Menu/index'

import { Container, Ul, Stars, Leatherboard, User } from './styles'

import userPlaceholder from '../../assets/images/pp.jpeg'
import shawee from '../../assets/images/shawee.jpg'

export default function Main() {
  return (
    <Container>
      <Example />
      <Ul>
        {[...Array(6)].map((x, i) => {
          return (
            <li key={i}>
              <div className="top-line">
                <strong>FNT, a plataforma para conectar as pessoas</strong>

                <Stars>
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStar />
                  <IoIosStarHalf />
                  <IoIosStarOutline />
                </Stars>
              </div>
              <small>
                por <Link to="/profile">ARTHUR PC</Link>, 15 horas atrás
              </small>
              <p><img src={shawee} alt="hack for good"/></p>
              <p className="description">
                Grupo de amigos criam uma plataforma incrível para o Hack for Good da Shawee, a plataforma tem uma página onde as pessoas podem avaliar se a notícia parece verdadeira ou falsa, conta com uma página de entretenimento onde as pessoas podem compartilhar algum contéudo interessante como: filmes, séries, vídeos, etc. Em breve teremos novidades!
              </p>
              <div className="more-info">
                <button type="button">Mais informações</button>

                <button type="button">
                  Ver noticia completa <FaExternalLinkAlt color="#000" />{' '}
                </button>
              </div>
            </li>
          )
        })}
      </Ul>
      <Leatherboard>
        <h1>Placar</h1>
        <small>
          Ranking da plataforma
        </small>

        {[...Array(1)].map((x, i) => (
          <User key={i}>
            <img src={userPlaceholder} alt="User profile" />
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
