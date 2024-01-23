import React from 'react';
import { HeaderWrapper,
        Img,
        Title, 
        } from './styled';
import logo from '../../assets/icon.png'

export const Header = () => {
  return (
    <HeaderWrapper>
        <Img src={logo}/>
        <Title>Investment Calculator</Title>
    </HeaderWrapper>
  )
}
