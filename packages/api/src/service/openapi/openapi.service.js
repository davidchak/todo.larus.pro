import { Router } from "express";
import swaggerUI from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

export class OpenApiService{
  constructor(){
    this.router = Router();
    this.options = swaggerJSDoc({
      definition: {
        openapi: '3.0.0',
        info: {
          title: 'Toda API',
          version: '1.0.0',
        },
        servers: [
          {
            url: 'http://localhost:3000/api',
            description: 'Development server',
          },
        ],
      },
      apis: ['**/*.controller.js'],
    }),
    this.router.use('/', swaggerUI.serve, swaggerUI.setup(this.options));
  }
}
