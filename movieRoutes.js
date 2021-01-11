// load up our shiny new route for users
const movieRoutes = require('./movies');


const appRouter = (app, fs) => {
  // we've added in a default route here that handles empty routes
  // at the base API url
  app.get('/', (req, res) => {
    res.send('welcome to the development api-server');
  });

  app.post('/movies', (req, res) => {
      res.status(200).send('new movie added');
      });

  app.put('/movies/:id', (req, res) => {
      res.status(200).send(`movies updated`);
      });
    
  app.delete('/movies/:id', (req, res) => {
      res.status(200).send(`movie removed`);
      });
      
  // run our movie route module here to complete the wire up
  // other routes
  movieRoutes(app, fs);
 
};


module.exports = appRouter;