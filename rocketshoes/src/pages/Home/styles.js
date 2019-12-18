import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #000;
  padding: 30px;
  border: 20px;
`;

export const ProductView = styled.View``;

export const ImageProduct = styled.Image`
  width: 200;
  height: 200;
`;

export const List = styled.FlatList`
  flex: 1;
  background: #fff;
  padding: 30px;
`;

export const Description = styled.Text`
  color: #fff;
`;
export const AddCartContainer = styled.View`
  margin-top: 10px;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: bold;
  padding: 10px 40px;
  color: #fff;
  border-radius: 4px;
  align-items: center;
`;

export const AddCart = styled.TouchableOpacity`
  flex-direction: row;
  align-content: center;
  align-items: center;
  background: #7159c1;
  border-radius: 4px;
`;

export const TextPrice = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;
