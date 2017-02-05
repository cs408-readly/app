var User = sequelize.define('user', {
  email: Sequelize.STRING,
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING
});
