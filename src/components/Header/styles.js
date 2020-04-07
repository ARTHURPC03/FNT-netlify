import styled from 'styled-components'

export const Container = styled.header`
  height: 60px;
  background: ${props => props.theme.colors.primary};
  transition: color, background 1s ease 0s, transform 1s ease 0s;
  color: ${props => props.theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    div {
      text-align: right;

      strong {
        display: inline;
        color: ${props => props.theme.colors.text};
      }

      svg {
        vertical-align: bottom;
      }
    }
  }
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 42px;
  color: rgb(153, 153, 153);
  max-width: 980px;
  font-size: 1.4rem;
  width: 100%;
`

export const DivLogo = styled.div`
  font-size: 2rem;
  strong {
    margin-left: 10px;
  }
`
