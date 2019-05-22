import React from 'react';
import { Container, Top, Logo, Title, IconContainer } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import logo from '~/assets/Nubank_Logo.png';

export default function Header({ translateY }) {
    
    let rotateProp = translateY.interpolate({
        inputRange: [0, 380],
        outputRange: ["0deg", "180deg"]
    });

    return (
        <Container>
            <Top>
                <Logo source={logo} />
                <Title>Lucas</Title>
            </Top>
            <IconContainer style={{
                transform: [
                    {
                        rotate: rotateProp
                    }
                ]
            }}>
                <Icon 
                    name="keyboard-arrow-down" 
                    size={20} 
                    color="#FFF" />
            </IconContainer>
        </Container>
    );
}