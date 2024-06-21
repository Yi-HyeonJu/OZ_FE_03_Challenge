const express = require('express');
const { default: mongoose } = require('mongoose');
const User = require('./models/users.model');
const cors = require('cors')

const app = express();

require('dotenv').config();

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('mongodb connected')
    })
    .catch((err) => {
        console.log(err);
    })

app.use(cors());
app.use(express.json());

app.get('/users', async (req, res) => {
    try {
        const users = await User.find({});
        return res.json(users);
    } catch (error) {
        console.log(error);
    }
})

app.post('/users', async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        return res.send('유저 추가 성공');
    } catch (error) {
        console.log(error);
    }
})

const port = 4000;

app.listen(port, () => {
    console.log(`Listening on ${port}`);
})