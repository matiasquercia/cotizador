import React from 'react';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition } from 'react-transition-group';

const Mensaje = styled.p `
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center;
`;

const ResultadoCotizacion = styled.div `
    background-color: rgb(127, 224, 237);
    text-align: center;
    padding: .5rem;
    border: 1px solid #26C6DA;
    margin-top: 1rem;
    position: relative;
`;

const TextoCotizacion = styled.p `
    color: #000;
    padding: 1rem;
    font-weight: bold;
    text-align: center;
`;

const Resultado = ({cotizacion}) => {

    return (
        (cotizacion === 0) 
        ? 
        <Mensaje>Elige marca, año y tipo de seguro</Mensaje> 
        : (
            <ResultadoCotizacion>
                <TransitionGroup
                    component="p"
                    className="resultado"
                >
                    <CSSTransition
                        classNames="resultado"
                        key={cotizacion}
                        timeout={{enter:500, exit: 500}}
                    >
                    <TextoCotizacion>Total a pagar: $ {cotizacion}</TextoCotizacion>
                    </CSSTransition>
                </TransitionGroup>
               
            </ResultadoCotizacion>
        )
    )
}
 
export default Resultado;