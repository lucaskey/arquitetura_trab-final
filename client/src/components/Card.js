import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLaptop,
    faShirt,
    faGamepad,
} from "@fortawesome/free-solid-svg-icons";

const Card = ({ produto, vendedor, tipoProduto, status, date }) => {

    const correspondingIcon = (type) => {
        if (type === "Eletrônicos") {
            return faLaptop;
        } else if (type === "Roupas") {
            return faShirt;
        } else if (type === "Brinquedos") {
            return faGamepad;
        }
    };

    return (
        <div className='card-container'>
            <p>{status}</p>
            <FontAwesomeIcon icon={correspondingIcon(tipoProduto)} color={'#FFB74D'} size='3x' />
            <h3><strong>Produto:</strong> {produto}</h3>
            <p><strong>Tipo:</strong> {tipoProduto}</p>
            <p><strong>Usuário:</strong> {vendedor}</p>
            <p><strong>Pedido feito em: </strong>{date}</p>
        </div>
    );
};

export default Card;