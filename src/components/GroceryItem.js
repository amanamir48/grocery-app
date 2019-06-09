import React from 'react';
import {connect} from 'react-redux';
import { upvote, downvote} from '../actions/actions';
import {Row, Col, Button} from 'react-bootstrap';
import '../css/styles.css';


class GroceryItem extends React.Component {
    render() {
        return (
            <Row>
                <Col>
                    <span className="name">Name: {this.props.name}</span>
                    <br />
                    <span className="vote">Vote: {this.props.vote}</span> 
                </Col>
                <Col>
                    <Button className="voting-button" variant="primary" size="sm" onClick={() => this.props.upvote(this.props.id)}>Upvote</Button>
                    <Button className="voting-button" variant="secondary" size="sm" onClick={() => this.props.downvote(this.props.id)}>Downvote</Button>
                </Col>
            </Row>
        )
    }
}



export default connect(undefined, {upvote , downvote})(GroceryItem);

