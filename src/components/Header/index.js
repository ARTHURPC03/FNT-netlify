/* eslint-disable react/prop-types */
import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Link } from 'react-router-dom'
import { MdPlayCircleOutline } from 'react-icons/md'
import { AiOutlineStock } from 'react-icons/ai'
import { Container, DivLogo, Nav } from './styles'

export default function Header({ toggleTheme }) {
  const { title } = useContext(ThemeContext)

  return (
    <Container>
      <Nav>
        <Link to="/">
          <h1>FNT</h1>
        </Link>

        <Link to="/statistics">
          <DivLogo>
            <AiOutlineStock size={25} />
            <strong>Estátisticas</strong>
          </DivLogo>
        </Link>
        <Link to="/entertainment">
          <DivLogo>
            <MdPlayCircleOutline size={25} />
            <strong>Entretenimento</strong>
          </DivLogo>
        </Link>
        <Switch
          onChange={toggleTheme}
          checked={title === 'dark'}
          checkedIcon={false}
          uncheckedIcon={false}
          height={10}
          width={40}
          handleDiameter={20}
          offColor="#717171"
          onColor="#999999"
          offHandleColor="#cfcfcf"
          onHandleColor="#cfcfcf"
        />
        <Link to="/profile">
          <h2>Perfil</h2>
        </Link>
      </Nav>
    </Container>
  )
}
