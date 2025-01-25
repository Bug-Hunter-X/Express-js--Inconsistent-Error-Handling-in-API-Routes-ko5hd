const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch the user with userId ...
  if (!user) {
    return res.status(404).send('User not found'); // This is correct
  }
  res.send(user); 
});

app.get('/users', (req, res) => {
  // ... some database operation to fetch all users ...
  if (!users) { // This is the potential bug
    return res.status(500).send('Internal Server Error'); //Incorrect error handling
  }
  res.send(users);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});