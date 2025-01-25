const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... some database operation to fetch the user with userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user); 
});

app.get('/users', (req, res) => {
  // ... some database operation to fetch all users ...
  res.send(users || []); // Return empty array if users is null or undefined
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});