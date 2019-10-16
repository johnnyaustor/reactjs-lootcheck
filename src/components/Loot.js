import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchBitcoin } from "../actions/bitcoin";

class Loot extends Component {
    componentDidMount() {
        this.props.fetchBitcoin();
    }

    computeBitcoin() {
        const { bitcoin } = this.props;

        if (Object.keys(bitcoin).length === 0) return '';

        return this.props.balance / parseInt(bitcoin.bpi.USD.rate.replace(',', ''), 10);
    }

    render() {
        return (
            <div>
                <h3>Bitcoin balance: {this.computeBitcoin()}</h3>
            </div>
        )
    }
}


const mapStateToProps = (state) => state;

const mapDispatchToProps = {
    fetchBitcoin
}

export default connect(mapStateToProps, mapDispatchToProps)(Loot);
