import express from 'express';

export const app = express();

app.get('/', (req, res) => {
  res.send('Prêt à recevoir votre code!');
});