const express = require('express');

const app = express();

app.get('/', (req, res) => res.json({msg: 'Hello World'}));

//Defind Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contact'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server starting on port ${PORT}`));