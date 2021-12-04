import { BaseController } from "../..//common/base.controller.js";

export class ArticleController extends BaseController{
  constructor(articleServiceInstance) {
    super();
    this.articleService = articleServiceInstance;
    this.router.get("/:id", this.getArticle.bind(this));
    this.router.post("/create", this.createArticle.bind(this));
    this.router.post("/update", this.updateArticle.bind(this));
    this.router.post("/delete", this.deleteArticle.bind(this));
  }

async getArticle({params}, res, next){
    const result = await this.articleService.findById(params.id);
    if(!result){
      return this.err(res, null, null);
    }
    this.ok(res, result);
  };

  async createArticle({body}, res, next){
    const {error, result} = await this.articleService.create(body);
    if(error ||!result){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.created(res, result);
  };

  async updateArticle({body}, res, next){
    const {error, result} = await this.articleService.update(body);
    if(error){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.ok(res, result);
  };

  async deleteArticle({body}, res, next){
    const {error, result} = await this.articleService.delete(body);
    if(error){
      return this.err(res, 422, 'Не удалось обработать запрос')
    }
    this.ok(res, result);
  };
}
