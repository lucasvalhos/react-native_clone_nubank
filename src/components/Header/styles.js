import styled from 'styled-components/native';
import { Animated } from 'react-native';

export const Container = styled.View`
  align-items: center;
  padding: 40px 0 30px;
`;

export const IconContainer = styled(Animated.View)` `;

export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image``;

export const Title = styled.Text`
  font-size: 18px;
  color: #FFF;
  font-weight: bold;
  margin-left: 8px;
`;
