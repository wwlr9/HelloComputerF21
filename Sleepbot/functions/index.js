// libraries
const functions = require("firebase-functions");
const { dialogflow } = require("actions-on-google");
const Sentiment = require('sentiment');


const sentiment = new Sentiment();
const app = dialogflow();

app.intent("Default Welcome Intent", (conv) => {
  conv.ask("Yes I am always here to help you.");
  // turning text to dialogflow as responses
});


app.intent("sleepissues",(conv, params) => {
  conv.ask(`oh, ${params.noisegenerator},that is so annoying. Do you want to try to tell me how you feel now. I believe in this way we could comfort your stress.`);
});

app.intent("feeling",(conv) => {
  let feeling = conv.query;
  let feelingSentiment = sentiment.analyze(feeling);

  let result = "";
  if (feelingSentiment.score <-2){
    result = "Those people are too unconsiderate. I really wish you feel better. I am always here to support you. I wish my existance could make you feel better. Could I play a peaceful sound for you? Do you like the ocean?"
  }
  else{
    result = "I really wish you feel better. I am always here to support you. I wish my existance could make you feel better. Could I play a peaceful music for you?"
  }
  conv.ask(result);
});

app.intent("feelingyes",(conv, params) => {
  conv.ask(`<speak><audio src="https://storage.googleapis.com/mysleepbot/ocean.flac">works</audio></speak>`);
});

exports.sleep = functions.https.onRequest(app);
