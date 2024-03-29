import styled from 'styled-components/native';
import { global } from '../../globalStyle';

export const ContainerLogin = styled.View `
  flex: 1;
  background-color: ${global.colors.black};
  align-items: center;
  justify-content: center;
`;

export const ContainerLogin2 = styled.View `
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content:center;
  gap: 5px;
  margin-bottom: 48px;
  border-bottom-width:1px;
  border-bottom-color:${global.colors.gray};
`;

export const TextoVisitante = styled.Text`
  font-family:  'Chakra-Regular';
  font-size: 16px;
  color:#F1F1E6;
`;

export const Botao = styled.Pressable `
  background-color: ${global.colors.green};
  width: 276px;
  height: 42px;
  justify-content: center;
  align-items:center;
  border-radius: 15px;
  margin-bottom: 40px;
`;

export const BotaoTexto = styled.Text`
  color: ${global.colors.black};
  font-family: 'Chakra-Medium';
  font-size: 18px;
  font-style: normal;
`;
