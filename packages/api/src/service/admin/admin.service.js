import { createSSRApp } from "vue";
import { renderToString } from "@vue/server-renderer";
import { Router } from "express";

// TODO: Доработать структуру сервиса до MVP

function createApp() {
  return createSSRApp({
    data() {
      return {
        user: 'Василий Пупкин'
      }
    },
    template: `<div>Текущий пользователь: {{ user }}</div>`
  })
}


export class AdminLkService{
  constructor(){
    this.router = Router();
    this.router.get('*', async (req, res) => {

      const app = createApp();
      const appContent = await renderToString(app);

      const html = `
        <html>
          <body>
            <h1>Админка</h1>
            <div id="app">${appContent}</div>
          </body>
        </html>
        `
        res.end(html)
    })
  }
}
