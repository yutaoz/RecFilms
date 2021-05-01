import React from 'react';


class GridItem extends React.Component {
    static get propTypes() {
        return {
            index: React.PropTypes.number
        };
    }

    render () {
        return (
            <div className="itembox">
                Watch {this.props.index}
            </div>
        );
    }
}

export default GridItem;