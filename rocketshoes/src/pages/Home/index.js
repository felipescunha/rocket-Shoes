import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import api from '../../services/api';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductImage,
  ProductPrice,
  ProductTitle,
  ProductButton,
  BoxAmount,
  ProductAmountText,
  ProductList,
  ProductView,
  TextButton,
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
    // const { amount } = this.props;
    return (
      <Container>
        <ProductList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => {
            return (
              <ProductView>
                <ProductImage source={{ uri: item.image }} />
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{formatPrice(item.price)}</ProductPrice>
                <ProductButton onPress={() => this.handleAddProduct(item.id)}>
                  <BoxAmount>
                    <Icon
                      name="add-shopping-cart"
                      color="#FFF"
                      size={20}
                      padding={10}
                    />
                    <ProductAmountText>
                      0{/* {amount[item.id] || 0} */}
                    </ProductAmountText>
                  </BoxAmount>
                  <TextButton color="#fff">ADICIONAR</TextButton>
                </ProductButton>
              </ProductView>
            );
          }}
        />
      </Container>
    );
  }
}

export default Home;
