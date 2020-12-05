import articlesApiConstants from "src/constants/articles-api.constants.js";
import UrlService from "src/services/url.service.js";

export default class ApiService {
  urlService = null;

  constructor() {
    this.urlService = new UrlService();
  }

  async getNews() {
    const apiQueryParams = [
      articlesApiConstants.apiSourceQueryParam,
      articlesApiConstants.apiSortByParam,
      articlesApiConstants.apiKeyParam
    ];

    return fetch(
      this.urlService.buildUrl(
        articlesApiConstants.baseArticlesApiUrl,
        apiQueryParams
      )
    );
  }
}
