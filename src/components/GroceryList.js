import React from 'react';
import GroceryItem from   './GroceryItem';
import {ListGroup} from 'react-bootstrap';

const GroceryList = (props) => {

    const listItems = props.groceries && props.groceries.map((gr) =>
        <ListGroup.Item key={gr.id}>
            <GroceryItem key={gr.id} id={gr.id} name={gr.name} vote={gr.vote}></GroceryItem>
        </ListGroup.Item>
    );

    return (
        <ListGroup>
            {listItems}
        </ListGroup>
    )
}

export default GroceryList;