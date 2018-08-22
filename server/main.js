Meteor.startup(async () => {
  const admin = Accounts.findUserByUsername('admin');
  const {ADMIN_PASSWORD = 'admin'} = process.env;

  if (admin) {
    await Accounts.setPassword(admin._id, ADMIN_PASSWORD);
  } else {
    await Accounts.createUser({username: 'admin', password: ADMIN_PASSWORD, email: 'admin@example.com', profile: {}});
  }
});
