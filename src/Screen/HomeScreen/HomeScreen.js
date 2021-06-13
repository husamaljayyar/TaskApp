import styled from "styled-components"
import Button from "../../Components/Button/Button"
import IconHeader from '../../Components/IconHeader/IconHeader'
import SearchIcon from '@material-ui/icons/Search';


const IneerContainer = styled.section`
  width: 100vw;
 `
const Header = styled.header`
  height: 60px;
  max-height: 10vh;
  width: 100vw;
  background-color: #242424;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`
const ContainerTitleHeader = styled.section`
  width: 10%;
`
const TitleHeader = styled.h1`
  width: auto;
  color: #ffffff;
  padding-right: 20px;
`
const TitleSpane = styled.span`
  color: #FCDD06;
  width: auto;
`
const ContainerTitleSearch = styled.section`
  width: 500px;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  padding-left: 40px;
 
`
const TitleSearch = styled.input`
  width: 500px;
  height: 30px;
  border-radius: 5px;
  border: none;
  outline: none;
`
const ContainerIconHeader = styled.section`
  width: 20%;
`
const ContainerContent = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  margin: 50px;
` 
const HeroSection = styled.section`
  background: #F2F2F2;
  width: 50vw;
  height: 50vh;
 `
const AsideContent = styled.aside`
  background: #F2F2F2;
  width: 20vw;
  height: 50vh;
 `
const AsidList = styled.ul`
list-style: none;
margin-top:100px ;
`

const AsidListItem = styled.li``

const HomeScreen = () => {

  return (
    <IneerContainer>
      <Header>
        <ContainerTitleHeader>
          <TitleHeader><TitleSpane>Pro</TitleSpane>Shop</TitleHeader>
        </ContainerTitleHeader>


        <ContainerTitleSearch>
          <TitleSearch type="text" placeholder="Search..." />
          <Button
            text="Search"
            icon={<SearchIcon style={{ fontSize: '15px' }} />} />
        </ContainerTitleSearch>

        <ContainerIconHeader>
          <IconHeader />
        </ContainerIconHeader>


      </Header>

<ContainerContent>
<AsideContent>
<AsidList>
  <AsidListItem>My Orders</AsidListItem>
  <AsidListItem>Wishlist</AsidListItem>
  <AsidListItem>Notifcations</AsidListItem>
  <AsidListItem>Settings</AsidListItem>
</AsidList>
</AsideContent>
<HeroSection></HeroSection>
  


</ContainerContent>


    </IneerContainer>
  )
}

export default HomeScreen