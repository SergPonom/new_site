import { AccountsServer } from 'meteor/accounts-base';
import { Roles } from 'meteor/alanning:roles';
import lodash from 'lodash';

Accounts.onCreateUser((options, user) => {
  options = lodash.omit(options, ['password']);
  return lodash.extend(user, options);
});

const origRemove = Roles.removeUsersFromRoles;
Roles.removeUsersFromRoles = function(userId, roles, group) {
  origRemove.call(this, userId, roles, group);

  let unset = {$unset: {}};
  if (Roles.getRolesForUser(userId, group).length === 0) {
    unset.$unset['roles.' + group] = '';
    Meteor.users.update({_id: userId}, unset);
  }
}