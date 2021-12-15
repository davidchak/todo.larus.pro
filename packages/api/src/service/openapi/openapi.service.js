import { Router } from "express";
import swaggerUI from "swagger-ui-express";

export class OpenApiService{
  constructor(){
    this.router = Router();
    this.doc = {
      "swagger": "2.0",
      // openapi: "3.0.0",
      info: {
        "title": "Toda API",
        "version": "1.0",
        "description": "openapi"
      },
      "host": "localhost",
      "basePath": "/api/",
      "tags": [
        {
          "name": "api v1",
        }
      ],
      "schemes": [
        "http"
      ],
      "consumes": [
        "application/json"
      ],
      "produces": [
        "application/json"
      ],
      "paths": {
        "/user/get": {
          "get": {
            "summary": "GET /api/user/get/",
            "responses": {
              "200": {
                "description": "Запрос выполнен успешно",
                "schema": {
                  "$ref": "#/definitions/User"
                }
              }
            },

          }
        },
      },

      "definitions": {
        "User": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "integer"
            },
            "name": {
              "type": "string",
              "format": "object",
              "description": "Имя пользователя из AD"
            },
            "email": {
              "type": "string",
              "format": "object",
              "description": "Адрес электронной почты"
            },
          }
        }
      }
    },
    this.options = {
      explorer: true,
      customCss: '.swagger-ui .topbar { display: none }'
    },
    this.router.use('/', swaggerUI.serveFiles(this.doc, this.options), swaggerUI.setup(this.doc));
  }
}
