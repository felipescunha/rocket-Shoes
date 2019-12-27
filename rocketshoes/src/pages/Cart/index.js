import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/MaterialIcons';

import * as CartActions from '../../store/modules/cart/actions';
import { formatPrice } from '../../util/format';

import {
  Container,
  ProductList,
  ProductBox,
  ProductImage,
  ProductTitle,
  ProductPrice,
  AmountNumberBox,
  NumberAmount,
  SubTotal,
  TextTotal,
  ProductTotal,
  OrderButton,
  TextOrderButton,
  DescriptionBox,
  BoxAmountSubTotal,
  NumberAmountView,
  ProductView,
  Product,
  Footer,
} from './styles';

function Cart({ navigation, products, total }) {
  return (
    <Container>
      <ProductList>
        {products.map(product => (
          <Product key={product.id}>
            <ProductView>
              <ProductBox>
                <ProductImage source={{ uri: product.image }} />
                <DescriptionBox>
                  <ProductTitle>{product.title}</ProductTitle>
                  <ProductPrice>{product.priceFormatted}</ProductPrice>
                </DescriptionBox>
              </ProductBox>
              <BoxAmountSubTotal>
                <AmountNumberBox>
                  <Icon name="add-circle-outline" size={25} />
                  <NumberAmountView>
                    <NumberAmount>{product.amount}</NumberAmount>
                  </NumberAmountView>
                  <Icon name="remove-circle-outline" size={25} />
                </AmountNumberBox>
                <SubTotal>{product.subTotal}</SubTotal>
              </BoxAmountSubTotal>
            </ProductView>
          </Product>
        ))}
      </ProductList>
      <Footer>
        <TextTotal>TOTAL</TextTotal>
        <ProductTotal>{total}</ProductTotal>
        <OrderButton>
          <TextOrderButton>FINALIZAR PEDIDO</TextOrderButton>
        </OrderButton>
      </Footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce(
      (total, product) => total + product.price * product.amount,
      0
    )
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
