import { WallabagArticle } from 'wallabag/WallabagAPI';
import moment from 'moment';

export default class FolderTemplate {
  private template: string;
  private dateFormat: string;

  constructor(template: string, dateFormat: string) {
    this.template = template;
    this.dateFormat = dateFormat;
  }

  fill(article: WallabagArticle, baseFolder: string): string {
    let result = this.template;

    // Replace variables
    result = result.replace(/{{folder}}/g, baseFolder);
    result = result.replace(/{{tags}}/g, article.tags.join('/'));
    result = result.replace(/{{date}}/g, moment().format(this.dateFormat));
    result = result.replace(/{{title}}/g, article.title.replace(/[\\,#%&{}/*<>$"@.?:|]/g, ' '));

    // Remove any double slashes and trim
    return result.replace(/\/+/g, '/').replace(/^\/|\/$/g, '');
  }
}
