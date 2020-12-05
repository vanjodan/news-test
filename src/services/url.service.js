import urlConstants from "src/constants/url.constants.js";
import StringService from "src/services/string.service.js";

export default class UrlService {
  constructor() {
    this.stringService = new StringService();
  }

  buildUrl(baseurl, parameterKeyValuePairs) {
    let resultUrl = baseurl + urlConstants.urlQueryParamStart;

    for (let parameterKeyValuePair of parameterKeyValuePairs) {
      resultUrl +=
        parameterKeyValuePair.key +
        urlConstants.urlQueryParamAssignment +
        parameterKeyValuePair.value +
        urlConstants.urlQueryParamSeparator;
    }

    console.log(resultUrl);

    resultUrl = this.stringService.trim(
      resultUrl,
      urlConstants.urlQueryParamSeparator
    );

    return resultUrl;
  }
}
