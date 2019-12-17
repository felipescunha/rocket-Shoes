import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #000;
  padding: 30px;
  border: 20px;
`;

export const ImageProduct = styled.Image``;

export const List = styled.FlatList`
  flex: 1;
  background: #c1c1c1;
  padding: 30px;
`;

export const Description = styled.Text`
  color: #fff;
`;
export const AddCartContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  margin-top: 10px;
`;

export const TextPrice = styled.Text`
  margin-top: 5px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
`;

export const TextButton = styled.Text`
  margin-top: 15px;
  padding: 10px 40px;
  color: #fff;
  background: #7159c1;
  border-radius: 4px;
`;
