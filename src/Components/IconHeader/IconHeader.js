import React from 'react'
import styled from 'styled-components'
import UserIcon from '@material-ui/icons/PersonRounded';
import FavoriteIcon from '@material-ui/icons/BookmarkRounded';
import ShoppingCart from '@material-ui/icons/ShoppingCartRounded';

const ContainerIcon = styled.section`
  width: 100%;


  color: #ffffff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin-left: 40px;
  text-align: center;

`


const IconHeader = () => {
    return (
        <ContainerIcon >
            <section>
                <UserIcon /><br />User
            </section>

            <section>
                <FavoriteIcon /><br /> Favorite
            </section>
            <section>
                <ShoppingCart /><br />Cart
            </section>

        </ContainerIcon>
    )
}
export default IconHeader
