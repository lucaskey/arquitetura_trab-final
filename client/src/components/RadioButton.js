import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RadioButton = ({ icon, selected, onSelect}) => {
    return (
        <div
            className={`radio-button ${selected ? 'selected' : ''}`}
            name="tipoProduto"
            onClick={onSelect}
        >
            <FontAwesomeIcon icon={icon} color={selected ? '#FFB74D' : '#748194'} size='xl' />
        </div>
    );
};

export default RadioButton;