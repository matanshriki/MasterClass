import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            original_list: [],
            displayed_list: [],
            profile_data: {}
        }
    }
    // componentDidMount() {
    //     console.log('Browse - componentDidMount')
    //     fetch('/api/courses/')
    //         .then(response => {
    //             if (response.ok) {
    //                 return response.json();
    //             }
    //             throw new Error('Network response was not ok.');
    //         })
    //         .then(data => {
    //             // console.table(data);
    //             console.log(`${data.length} items loaded`);
    //             this.setState({
    //                 original_list: data,
    //                 displayed_list: data,
    //                 profile_data: data[0]
    //             });
    //         })
    //         .catch(error => {
    //             console.error(`fetch operation failed: ${error.message}`);
    //         });
    // }

    update_list(event) {
        //console.log('update_list')
        const { list_data, on_filter } = this.props;
        let txt = event.target.value;

        let filtered_list = list_data.filter(item =>
            item.first_name.toLowerCase().includes(txt.toLowerCase()) ||
            item.last_name.toLowerCase().includes(txt.toLowerCase()) ||
            item.country.toLowerCase().includes(txt.toLowerCase())
        )
        on_filter(filtered_list)
    }
    render() {
        //return <Filter list_data={original_list} on_filter={do_filter_list} />
        return <input type="text" className="filter" onChange={(e) => this.update_list(e)} />

    }
}
Filter.propTypes = {
    on_filter: PropTypes.func.isRequired,
    list_data: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        first_name: PropTypes.string.isRequired,
        last_name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
    })).isRequired
}
