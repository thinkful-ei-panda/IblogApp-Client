const express = require('express');
const AuthService = require('./auth-service');

const authRouter = express.Router();
const bodyParser = express.json();

authRouter.route('/login').post(bodyParser, (req, res, next) => {
  const { user_name, password } = req.body;
  const loginUser = { user_name, password };

  for (const [key, value] of Object.entries(loginUser))
    if (value == null)
      return res
        .status(400)
        .json({ error: `Missing '${key}' in request body` });

  AuthService.getUserWithUserName(req.app.get('db'), loginUser.user_name)
    .then((dbUser) => {
      if (!dbUser)
        return res
          .status(400)
          .json({ error: 'Incorrect Username or Password' });
      return AuthService.comparePasswords(
        loginUser.password,
        dbUser.password
      ).then((compareMatch) => {
        if (!compareMatch)
          return res
            .status(400)
            .json({ error: 'Incorrect Username or Password' });
        const sub = dbUser.user_name;
        const payload = { user_id: dbUser.id };
        res.send({
          authToken: AuthService.createJwt(sub, payload),
          user_id: payload.user_id,
        });
      });
    })
    .catch(next);
});

module.exports = authRouter;
