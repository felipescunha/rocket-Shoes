import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, SafeArea, Logo, BasketContainer } from './styles';

function Header() {
  return (
    <SafeArea>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon name="shopping-basket" color="#FFF" size={26} />
        </BasketContainer>
      </Container>
    </SafeArea>
  );
}

export default Header;
