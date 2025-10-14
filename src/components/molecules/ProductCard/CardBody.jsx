import React from 'react';
import Text from './atoms/molecules';

function CardBody({ title, content, price }) {
    return (
        <>
            <Text variant="h5">{title}</Text>
            <Text variant="p">{content}</Text>
            <Text variant="span">
                ${price}
            </Text>
        </>
    );
}

export default CardBody;