import React, {useState} from 'react'; // we need this to make JSX compile
import styled from "styled-components";
import BurgerButton from './BurgerButton';


function Navbar(){

    const [clicked, setClicked] = useState(false)
    const handleClick = () => {
        //cuando esta true lo pasa a false y vice versa
        setClicked(!clicked)
    }

    return (
        <>
            <NavContainer>
                <label className="titleNav"></label>
                <div className={`Links ${clicked ? 'Active' : ''}`}>
                    <a href="#">Inicio</a>
                    <a href="#publicate">Publícate</a>
                    <a href="#condiciones">Términos de Uso</a>
               
                </div>

                <div className="Burguer">
                    <BurgerButton clicked={clicked} handleClick={handleClick} />
                </div>

                <BgDiv className={`initial ${clicked ? ' active' : ''}`}></BgDiv>

            
            </NavContainer> 
        </>
    )
}


export default Navbar



const BgDiv = styled.div`
  background-color: #222;
  position: fixed;
  top: -600vh;
  left: -800vw;
  width: 100%;
  height: 100%;
  z-index: 10;

  transition: all .6s ease ;
  
  &.active{
    
    border-radius: 0 0 75% 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
  }
`

const NavContainer = styled.nav`
   
    z-index: 10000;
    color: white;
    padding-top: 2vh;
    padding-left: 3vh;
    font-size: 1.5em;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Raleway', sans-serif;

    a{
        color: white;
        text-decoration: none;
        margin-right: 5vh;
        position:relative;
        z-index: 100;

    }


    .Burguer{
        top: 1vh;
        position:fixed;
        right: 1vh;
            z-index: 100;

        @media(min-width: 1024px){
            display:none;
        }
    }

    .Links{
        position: absolute;
        top: -1000vh;
        left: -8000vw;
        margin-inline: auto;
        text-align: center;

        a{
            color: white;
            font-size: 2rem;
            display:block;
            &:hover{
            color: bisque;

            }
        }

       @media(min-width: 1024px){
        position: initial;
        margin: 0;
        
        a{
            font-size: 1.3rem;
            color:white;
            display: inline;
        }

       } 
    }

    .Links.Active{
        color: white;
        margin-left: auto;
        margin-right: auto;
        top: 31%;
        left: 0;
        right: 0;
        display:block;
        width: 100%;
        height: 100%;
        text-align:center;
        position:fixed;
        z-index: 10000;


        a{
        color: white;
        margin-left: 2vh;
        margin: 5vh;
        display: block;
        align-items: center;
        
        cursor: pointer;
        transition: all .9s ease ;

          &:hover{
                color: bisque;
        }
        }


    }


    

`
