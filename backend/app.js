const express = require('express');


const itemsRouter = require('./routes/items');
const stocksRouter = require("./routes/stocks")

const cors = require('cors');
const app = express();

app.use(express.json());
const corsOptions = {
    origin: 'http://localhost:3000'
};
app.use(cors(corsOptions));

app.use('/favorites', itemsRouter);
app.use('/stocks', stocksRouter)

const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
