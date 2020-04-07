import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import Sidenav from 'sidenavjs'

import { MdMenu } from 'react-icons/md'

import { Container, Menu } from './styles'

export default function Example() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

    return (
      <Sidenav
        open={sidebarOpen}
        onSetOpen={setSidebarOpen}
        sidenav={
          <Container>
            <ul>
              <li><Link to="/profile" >Covid-19</Link></li>
              <br/>
              <li><Link to="/profile" >Economia</Link></li>
              <br/>
              <li><Link to="/profile" >Tecnologia</Link></li>
              <br/>
              <li><Link to="/profile"> Esportes </Link></li>
            </ul>
          </Container>
        }
      >
          <Menu
            type="button"
            onClick={() => {
            setSidebarOpen(true)
            }}
          >
            <MdMenu/>
          </Menu>
      </Sidenav>
    )
  }
