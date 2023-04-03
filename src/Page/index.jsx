import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Cart from '../assets/images/icon-cart.svg';
import Avatar from '../assets/images/image-avatar.png';

const ContainerMainPage = styled(Container)`
  min-width: 100vw;
`;

const HeaderRow = styled(Row)`
  position: relative;
  top: 0;
  left: 0;
  height: 10vh;
  padding: 1rem 5rem;
  display: flex;
  justify-content: ;
  align-items: center;
`;

const Logo = styled.a`
  color: hsl(220, 13%, 13%);
  font-weight: 700;
  text-decoration: none;
  font-size: 2rem;
  text-transform: lowercase;
`;

const UlList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;

  li {
    list-style: none;
    margin-left: 0.75rem;
  }

  li a {
    color: hsl(219, 9%, 45%);
    text-decoration: none;
    padding: 0.375rem;
  }
`;

const UserInfo = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ImgCart = styled.img`
  padding-right: 3rem;
  cursor: pointer;
`;

const ImgAvatar = styled.img`
  width: 45px;
  border: 3px solid #fff;
  border-radius: 30px;
  transition: 0.3s ease-out;

  &:hover {
    border: 3px solid hsl(26, 100%, 55%);
    border-radius: 30px;
    transition: 0.3s ease;
    cursor: pointer;
  }
`;

export default function MainPage() {
  return (
    <ContainerMainPage>
      <HeaderRow>
        <Logo href="#" className="logo">
          sneakers
        </Logo>
        <UlList>
          <li>
            <a href="#">Collections</a>
          </li>
          <li>
            <a href="#">Men</a>
          </li>
          <li>
            <a href="#">Women</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </UlList>
        <UserInfo className="userInfo">
          <ImgCart className="cart" src={Cart} alt="cart" />
          <ImgAvatar className="avatar" src={Avatar} alt="avatar" />
        </UserInfo>
      </HeaderRow>
    </ContainerMainPage>
  );
}
