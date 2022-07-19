import React from 'react';
import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import { Link } from 'gatsby';

const HeaderWrapper = styled.div`
    width: 100%;
    height: 4em;

    display: flex;
    align-items: center;
    
    border-bottom: 1px solid rgba(0,0,0,0.2);

    .link-tag {
        text-decoration: none;
        color: black;
    }
`;

const Header = () => {
    return(
        <HeaderWrapper>
            <Grid container justifyContent={"space-between"}>
                <Grid item xs={8}>
                    <Link to="/" className='link-tag'>Anchit Dhar</Link>
                </Grid>
                <Grid item xs={4}>
                    <Grid container justifyContent={"space-between"}>
                        <Grid item xs={4} style={{ textAlign: "center" }}>
                            <Link to='/blog' className='link-tag'><span>Blog</span></Link>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: "center" }}>
                            <Link to="/about" className='link-tag'><span>About</span></Link>
                        </Grid>
                        <Grid item xs={4} style={{ textAlign: "center" }}>
                            <Link to="/contact" className='link-tag'><span>Contact Me</span></Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </HeaderWrapper>
    );
}

export default Header;