import { swaggerConfiguration } from './config/swagger';
import express from 'express';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUI from 'swagger-ui-express'
import routes from './routes/index';
import cors from 'cors';
import 'dotenv/config';


const app = express();

// Initialize swagger-jsdoc -> returns validated swagger spec in json format
const swaggerSpec = swaggerJSDoc(swaggerConfiguration);

app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
app.get('/swagger.json', (_req, res) => res.send(swaggerSpec));

console.log(`Add swagger on /swagger`);

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server listening on port ${process.env.SERVER_PORT}`);
});


app.use(express.json);
app.use(cors({ origin: true }));
app.use(routes);

