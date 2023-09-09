import * as React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as LogoImage } from '../../assets/pictures/logo.svg'

const Logo = () => {
    return (
        
            <Link to="/">
                <LogoImage></LogoImage>
            </Link>
        
    )
}

export default Logo;