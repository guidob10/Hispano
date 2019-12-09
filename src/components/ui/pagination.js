import React, { Component } from 'react';
import Pagination from "react-js-pagination";

//const Paginator =     React.createClass({
class Paginator extends Component {


// const PlayerCard = (props) =>
/*
    getInitialState() {
        return {
            currentPageNumber: 1,
            totalItems: 1
        }
    },
*/ 
    state = {
        currentPageNumber: 1,
        totalElements: 1      
    }

    componentWillReceiveProps(newProps) {
        this.setState({
            currentPageNumber: newProps.currentPageNumber,
            totalItems: newProps.totalElements
        });
    }

    handleSelect(eventKey) {
        this.props.pageChangeHandler(eventKey);
    }

    render() {
        return (
            <Pagination
            size="sm"
                    items={this.state.totalElements}
              //       activePage={this.state.currentPageNumber}
                    onSelect={this.handleSelect}> 
                    </Pagination>
        );
    }
};

export default Paginator;