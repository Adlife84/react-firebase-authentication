import React from 'react';

import { AuthUserContext, withAuthorization } from '../Session';
import { PasswordForgetForm } from '../PasswordForget';
import PasswordChangeForm from '../PasswordChange';
import ZipCode from '../ZipCode';

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div>
        <h1>Account: {authUser.email}</h1>
        <PasswordForgetForm />
        <PasswordChangeForm />
        <ZipCode />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(AccountPage);