const app = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');

const router = app.Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  {
    path: '/user',
    route: userRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
