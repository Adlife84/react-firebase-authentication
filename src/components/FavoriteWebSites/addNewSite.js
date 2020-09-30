import React, { Component } from 'react';

class AddNewWebSite extends Component {
    state = {
        value: ''
    };


    handleValueChange = (e) => {
        this.setState({ value: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSite(this.state.value);
        this.setState({ value: '' }); //Reset input after added it to state
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="Link for web site"
                    value={this.state.value}
                    onChange={this.handleValueChange}
                />
                <button type="submit">Add Site</button>
            </form>
        );
    }
}


export default AddNewWebSite;