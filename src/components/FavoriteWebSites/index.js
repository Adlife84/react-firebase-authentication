import React, { Component } from 'react';
import AddNewWebSite from './addNewSite';
import SiteItem from './siteItem';


class FavoriteWebSites extends Component {


    state = {
      links: [
        {
          name: 'MyPortfolioSite',
          link: 'https://www.andreykomolov.com',
          id: 1,
          isFavorite: true
        },
        {
          name: 'Facebook',
          link: 'https://www.facebook.com',
          id: 2,
          isFavorite: false
        },
        {
          name: 'Instagram',
          link: 'https://www.instagram.com',
          id: 3,
          isFavorite: false
        },
        {
          name: 'Yandex',
          link: 'https://www.yandex.com',
          id: 4,
          isFavorite: true
        },
        {
          name: 'Google',
          link: 'https://www.google.com',
          id: 5,
          isFavorite: true
        }
      ]
    };
  

  idPlayer = this.state.links.length;
  
  onFavorite = (id) => {
    console.log(id);
    this.setState(prevState => {
      return {
        links: prevState.links.filter(link => link.id == id),
        isFavorite: true
      };
    });

  }

  onAddSite = (url) => {
    console.log('Hi from addSite');

    if (url === '') {
        console.log('empty')
    } else {
        let newSite = {
            name: '',
            link: url,
            id: this.idPlayer += 1,
            isFavorite: false
        };

        this.setState(prevState => ({
            links: prevState.links.concat(newSite)
        }));
    }
  };

  

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onRemove = (id) => {
    console.log('Hi from Remove!');
    console.log(id);

    this.setState(prevState => {
      return {
        links: prevState.links.filter(link => link.id !== id)
      };
    });


  };
  
  onEdit = (id) => {
    console.log('Hi from Edit!');
  };


  render() {
   
  

    return (
      <>
        <h3>My Favorite Web Sites</h3>

        { this.state.links.map(site =>
          <SiteItem
            key={site.id}
            id={site.id}
            link={site.link}
            isFavorite={site.isFavorite}
            onRemove={this.onRemove}
            onEdit={this.onEdit}
            onFavorite={this.onFavorite}
          />)}

        <br></br>
        <AddNewWebSite addSite={this.onAddSite}/>
      </>
    );
  }
}

export default FavoriteWebSites;