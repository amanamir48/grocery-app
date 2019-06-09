import React from 'react';
import {connect} from 'react-redux';

import {loadList} from '../actions/actions';
import GroceryList from './GroceryList';
import {Container, Row, Col} from 'react-bootstrap';

class App extends React.Component {
    
    componentDidMount() {
        this.props.loadList();
    }

    render() {
        return (
            <Container> 
                <Row>
                    <Col><center><h1>Grocery App</h1></center></Col>
                </Row>
                <Row>
                    <Col>
                        <GroceryList groceries={this.props.groceryList}></GroceryList>
                    </Col>
                </Row>
            </Container>
        ) 
    }
}

const mapStateToProps = state => {
    return {
        groceryList: state.grocery.list
    };
}

export default connect(mapStateToProps, {loadList: loadList})(App);
