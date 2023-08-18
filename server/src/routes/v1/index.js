const app = require('express');
const authRoute = require('./auth.route');
const userRoute = require('./user.route');
const movieRoute = require('./movie.route');
const categoryRoute = require('./category.route');

const router = app.Router();

const defaultRoutes = [
  { path: '/auth', route: authRoute },
  {
    path: '/user',
    route: userRoute,
  },
  {
    path: '/movies',
    route: movieRoute,
  },
  {
    path: '/categories',
    route: categoryRoute,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
