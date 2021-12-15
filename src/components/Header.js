import React from 'react'
import styled from 'styled-components';

const Head = styled.header`
    background-color: #3b5998;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    align-items: center;
`;
const H1 = styled.h1`
    font-weight: 500;
    color: white;
`;
const Select = styled.select`
    height: 30px;
    width: 140px;
    border-radius:10px;
    border: none;
`;

function Header() {
    return(
        <Head>
            <H1>COVID-19</H1>
            <Select>
                <option>국내</option>
                <option>세계</option>
            </Select>
        </Head>
    );
}

export default Header;