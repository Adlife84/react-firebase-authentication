import React from 'react';

import { withAuthorization } from '../Session';

import FavoriteWebSites from '../FavoriteWebSites'

const HomePage = () => (
  <div>
    <h1>Home</h1>
    <p>The Home Page is accessible by every signed in user.</p>
    <FavoriteWebSites />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);