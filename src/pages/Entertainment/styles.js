import styled from 'styled-components'
import { darken } from 'polished'

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
  display: flex;
  flex-direction: row;

  h1 {
    margin-top: 80px;
    margin-bottom: 24;
    transition: color 1s ease 0s, transform 1s ease 0s;
    color: ${(props) => props.theme.colors.text};
  }
`


export const Leatherboard = styled.div`
  width: 35%;
  padding: 3rem;
  margin: 0 2rem auto;
  background-color: #8c95f7;
  border-radius: 4px;
  box-shadow: 2px 2px 8px 0px rgba(0,0,0,0.2);
  color: #222;
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 0;
  }
  small {
    margin-bottom: 1.5rem;
    color: #343434;
  }
`

export const User = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: .75rem;

  img {
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
  }

  .details {
    margin-left: .75rem;
    display: flex;
    flex-direction: row;
    align-items: center;

    span {
      color: gold;
      margin-left: .5rem
    }
  }
`;


export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 24px;
  list-style: none;
  width: 65%;
  @media (max-width: 950px) {
    grid-template-columns: repeat(1, 1fr);
  }

  li {
    background: ${(props) => props.theme.colors.li};
    padding: 24px;
    border-radius: 8px;
    position: relative;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    transition: all 0.2s ease 0s;
    box-shadow: 1px 1px 5px 0px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: center;

    iframe {
      align-self: center;
    }

    &:hover {
      background: ${(props) => darken(.03, props.theme.colors.li)}
    }

    button {
      position: absolute;
      right: 24px;
      top: 24px;
      padding: .5rem .75rem;
      border: 0;
      background: ${(props) => props.theme.colors.button};
      display: flex;
      -webkit-box-pack: center;
      justify-content: center;
      border-radius: 8px;
      transition: border 0.2s ease 0s, transform 0.2s ease 0s;
      border-width: 3px;
      border-style: solid;
      border-color: transparent;
      border-image: initial;
      color: #000000;
      font-size: 1.5rem;
      font-weight: bold;
      svg {
        transition: border 0.2s ease 0s, transform 0.2s ease 0s;
        color: black;
      }
      &:hover {
        transform: translateY(-2px);
        border-color: transparent;
        svg {
          color: white;
        }
      }
    }
    strong {
      display: block;
      /* margin-bottom: 16px; */
      transition: color 1s ease 0s, transform 1s ease 0s;
      color: ${(props) => props.theme.colors.text};
      font-size: 2rem;
    }
    p + strong {
      margin-top: 32px;
    }
    p {
      color: ${(props) => props.theme.colors.text};
      line-height: 21px;
      font-size: 1.6rem;
      text-align: justify;
      margin-bottom: 10px;
    }
    span {
      color: ${(props) => props.theme.colors.text};
      font-size: 1rem;
      width: 100%;
      margin-bottom: 1rem;
      display: block;
    }
  }
`
