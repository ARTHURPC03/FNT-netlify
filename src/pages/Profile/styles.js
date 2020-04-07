import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  padding: 0 30px;
  margin: 32px auto;
  display: flex;
  flex-direction: row;
  transition: color 1s ease 0s, transform 1s ease 0s;
  display: block;
  h1 {
    margin-top: 10px;
    margin-bottom: 24;
    transition: color 1s ease 0s, transform 1s ease 0s;
    color: ${(props) => props.theme.colors.text};
  }

  img{
    width: 200px;
    height: 200px;
    border-radius: 50%;
  }
`
