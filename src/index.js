import express from 'express';
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import joi from 'joi';
import dayjs from 'dayjs';
dotenv.config();

const app = express();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
    await mongoClient.connect();
    console.log("MongoDB is connected!");
} catch (error) {
    console.log(error);
}

let db = mongoClient.db("bate-papo-uol");

const participantscoll = db.collection("participants");


//setInterval(() => {
//    try {
//        const limitTime = Date.now() - 10000;
//        for (const participant of participants) {
//    }, 1000);

const schemaParticipant = joi.object({
    name: joi.string().required()
});


app.listen(5000, () => {
    console.log("App is running in port: 5000");
});

app.post("/participants", async (req, res) => {
    const { name } = req.body;
    const validation = schemaParticipant.validate(req.body, { abortEarly: false });

    if (validation.error) {
        const error = validation.error.details.map(detail => detail.message);
        res.status(422).send(error);
        return;
    }

    try {
        await dbBatePapoUOL.collection('messages').insertOne({
          from: user,
          ...req.body,
          time: dayjs().locale('pt-br').format('HH:mm:ss'),
        });
      } catch (error) {
        res.status(500).send(error);
        mongoClient.close();
      }
});

app.get("/participants", async (req, res) => {
    try {

    }
});
