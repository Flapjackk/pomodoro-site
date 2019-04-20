import React from 'react'
import styled from 'styled-components'
import background from './../assets/img/4.jpg'

const Styles = styled.div`
    img {
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%;
        min-height: auto;
        background-size: cover;
    }

    .overlay {
        background-color: #000;
        background-size: cover;
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        opacity: 0.5;
}
`

const Background = () => (
    <Styles>
        <div className='overlay'></div>
        <img src={background} alt={background} />
    </Styles>
)


export default Background;