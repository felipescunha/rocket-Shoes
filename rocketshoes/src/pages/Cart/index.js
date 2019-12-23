import React from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import cart from '../../store/modules/rootReducer';

// import * as CartActions from '../../store/modules/cart/actions';
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
  StyleBox,
  DescriptionBox,
  BoxAmountSubTotal,
  NumberAmountView,
  ProductView,
} from './styles';

function Cart({ product }) {
  return (
    <Container>
      <StyleBox>
        <ProductList
          data={product}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => {
            return (
              <ProductView>
                <ProductBox>
                  <ProductImage source={{ uri: item.image }} />
                  <DescriptionBox>
                    <ProductTitle>{item.title}</ProductTitle>
                    <ProductPrice>R$198,90</ProductPrice>
                  </DescriptionBox>
                </ProductBox>
                <BoxAmountSubTotal>
                  <AmountNumberBox>
                    <Icon name="add-circle-outline" size={25} />
                    <NumberAmountView>
                      <NumberAmount>{item.amount}</NumberAmount>
                    </NumberAmountView>
                    <Icon name="remove-circle-outline" size={25} />
                  </AmountNumberBox>
                  <SubTotal>R$198,90</SubTotal>
                </BoxAmountSubTotal>
              </ProductView>
            );
          }}
        />
        <TextTotal>TOTAL</TextTotal>
        <ProductTotal>R$1469,10</ProductTotal>
        <OrderButton>
          <TextOrderButton>FINALIZAR PEDIDO</TextOrderButton>
        </OrderButton>
      </StyleBox>
    </Container>
  );
}

export default connect(state => ({
  product: state.cart,
}))(Cart);
