import React, { Fragment } from 'react'
import { Navbar } from 'react-bootstrap'
import styled from 'styled-components'
import logo from './../assets/img/3.png'

const Styles = styled.div`
.background-img {
    background-image:url{logo}
}
`

const Logo = () => (
    <Styles>
        <div className='background-img'></div>
    </Styles>
)


export default Logo;