import 'dotenv/config';

export const swaggerConfiguration = {
  failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'E-commerce API',
      description: 'Documentação da API do projeto de E-commerce',
      version: '1.0.0',
    },
  },
  host: `localhost:${process.env.SERVER_PORT}`,
  apis: ['src/controllers/*.ts', 'controllers/*.js']
};
