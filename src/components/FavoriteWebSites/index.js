import React from 'react';

class FavoriteWebSites extends Component {
  constructor(props) {
    super(props);
 
    this.state = {

    };
  }
 
  onSubmit = event => {
   
  };
 
  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
 
  render() {
 
    return (
      <> 
      <h3>My Favorite Web Sites</h3>
      <form onSubmit={this.onSubmit}>
        
      </form>
      </>
    );
  }
}
 
export default withFirebase(PasswordChangeForm);