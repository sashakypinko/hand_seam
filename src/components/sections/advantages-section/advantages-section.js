import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    color: #3b3b3b;
    font-size: 18px;
    font-family: 'Comfortaa', cursive;
    line-height: 1.55;
    font-weight: 400;
    background-position: center center;
    border-color: transparent;
    border-style: solid;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 50px;
`;

const Title = styled.div`
    padding-bottom: 30px;
`;

const List = styled.div`

`;

const AdvantagesSection = () => {
    return (
        <Container>
            <Title className="advantages-title">
                <h2>Наши преимущества</h2>
            </Title>
            <List>
                <p>01. Только натуральные и экологичные материалы</p>
                <p>02. Творческий подход, разработка индивидуальных принтов</p>
                <p>03. Цифровая печать</p>
                <p>04. У нас уже 100 довольных клиентов)</p>
            </List>
        </Container>
    );
};

export default AdvantagesSection;
