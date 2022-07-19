import { Container } from '@mui/system';
import React from 'react';
import Header from './header';

const Layout = ({ children }) => {
    return(
        <Container maxWidth="lg">
            <Header />
            <main style={{ paddingTop: '15px' }}>{ children }</main>
        </Container>
    );
}

export default Layout;