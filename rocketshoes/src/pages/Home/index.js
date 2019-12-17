import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  ImageProduct,
  TextPrice,
  Description,
  TextButton,
  AddCartContainer,
} from './styles';

export default class Home extends Component {
  static navigationOptions = () => ({
    title: 'Rockertshoes | Home',
  });

  render() {
    return (
      <Container>
        <ImageProduct
          style={{ width: 250, height: 250 }}
          source={{
            uri:
              'https://static.netshoes.com.br/produtos/tenis-olympikus-intense/12/D22-1310-012/D22-1310-012_zoom1.jpg',
          }}
        />
        <Description>Tênis de caminhada leve e confortável</Description>
        <TextPrice>R$179,90</TextPrice>
        <AddCartContainer>
          <Icon name="add-shopping-cart" color="#FFF" size={28} />
          <TouchableOpacity>
            <TextButton color="#fff">ADICIONAR</TextButton>
          </TouchableOpacity>
        </AddCartContainer>
      </Container>
    );
  }
}
