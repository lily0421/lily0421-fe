import styled from 'styled-components';

const Error404 = () => {
  return <Container>존재하지 않는 페이지 입니다.</Container>;
};

export default Error404;

const Container = styled.div`
  position: fixed;
  top: calc(50% - 110px);
  left: 0px;
  width: 100%;
  text-align: center;
`;
