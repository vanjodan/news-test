//в этом файле централизированы состояние и логика проекта
import ValueCheckerService from "src/services/value-checker.service.js";
import ApiService from "src/services/api.service.js";

const actions = {
  // в екшинах мы асинхронно получаем все данные которые приходят с апи, я все это разбил на множество сервисов и констант
  // (их можно посмотреть в папках services и constants), в даном проектре это может и не имеет особого смысла, но в случае когда
  //проект будет разростаться так будет намного удобнее,  у нас на проекте используется энтерпрайзный подход
  // и эти идеи с сервисами я позаимствовал  оттуда
  async getNews(ctx) {
    const apiService = new ApiService();

    const res = await apiService.getNews();

    const news = await res.json();

    ctx.commit("updateNews", news);
  }
};

const mutations = {
  updateNews(state, news) {
    state.news = news;
  }
};
const state = {
  news: []
};

const getters = {
  // тут мы получаем все новости, в проекте на даный момент не используются, можно удалить
  news: state => {
    return state.news;
  },
  // тут отфильтрованые статьи  с проверкой на null и undefined с помощью ValueCheckerService, на даном этапе этот сервис так же
  // не обязателен, но будет полезен в случае разростания проекта.
  //именно этот масив передается дальше в компонент NewsList
  filteredArticles: state => {
    const valueCheckerService = new ValueCheckerService();

    if (
      //проверка
      valueCheckerService.isNullOrUndefined(state) ||
      valueCheckerService.isNullOrUndefined(state.news) ||
      valueCheckerService.isNullOrUndefined(state.news.articles)
    ) {
      return [];
    }
    //фильтрация
    return state.news.articles.filter(a => {
      return a.author && a.description;
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
