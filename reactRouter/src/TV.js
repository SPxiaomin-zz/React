import React, { Component } from 'react';
import { Link } from 'react-router';

class TV extends Component {
    constructor(props) {
        super(props);

        let { query } = this.props.location;

        console.log(query);
    }

    componentDidMount() {
        console.log('TV did mount');
    }

    render() {
        return (
            <div>
                <p>电视节目列表</p>
                <hr />
                { /* <div>
                    <Link to="/tv/show/2">show 2</Link>
                </div> */ }
                {this.props.children}
            </div>
        );
    }
}

export default TV;
