 ```javascript
 const express = require('express');
 const app = express();
 const port = process.env.PORT || 3000;

 // Middleware
 app.use(express.json());

 // Routes
 const exampleRoutes = require('./routes/example');
 app.use('/api', exampleRoutes);

 // Error handling middleware
 app.use((err, req, res, next) => {
   console.error(err.stack);
   res.status(500).send('Something broke!');
 });

 app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
 });
 ```
