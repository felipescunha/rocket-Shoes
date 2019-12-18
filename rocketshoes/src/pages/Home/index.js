import React from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ImageProduct,
  TextPrice,
  Description,
  TextButton,
  AddCartContainer,
  AddCart,
  ProductView,
} from './styles';

class Home extends React.Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const result = response.data.map(product => ({
      ...product,
      priceFormated: Number(product.price).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }),
    }));

    this.setState({ products: result });
  }

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => {
            return (
              <ProductView>
                <ImageProduct source={{ uri: item.image }} />
                <Description>{item.title}</Description>
                <TextPrice>{formatPrice(item.price)}</TextPrice>
                <AddCartContainer>
                  <AddCart>
                    <Icon
                      name="add-shopping-cart"
                      color="#FFF"
                      size={28}
                      padding={10}
                    />
                    <TextButton color="#fff">ADICIONAR</TextButton>
                  </AddCart>
                </AddCartContainer>
              </ProductView>
            );
          }}
        />
      </Container>
    );
  }
}

export default Home;
