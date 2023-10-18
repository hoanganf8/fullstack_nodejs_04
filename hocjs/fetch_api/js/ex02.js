import { client } from "./client.js";
import { config } from "./config.js";
const { PAGE_LIMIT } = config;

const app = {
  rootEl: document.querySelector(".posts"),
  query: {
    _sort: "id",
    _order: "desc",
    _limit: PAGE_LIMIT,
    _page: 1,
  },
  render: function (posts) {
    const stripHtml = (html) => html.replace(/(<([^>]+)>)/gi, "");
    this.rootEl.innerHTML = `<div class="row g-3">
    ${posts
      .map(
        ({ title, excerpt }) => `<div class="col-6 col-md-4">
    <div class="post-item border p-3">
      <h3><a href="#">${stripHtml(title)}</a></h3>
      <p>
        ${stripHtml(excerpt)}
      </p>
    </div>
  </div>`,
      )
      .join("")}
  </div>`;
  },

  //Call API
  getPosts: async function (query = {}) {
    console.log(query);
    // let queryString = new URLSearchParams(query).toString();
    let queryString = Object.entries(query)
      .map((item) => {
        return item.join("=");
      })
      .join("&")
      .replaceAll(" ", "+");

    queryString = queryString ? "?" + queryString : "";

    const { data: posts } = await client.get(`/posts${queryString}`);
    this.render(posts);
  },

  handleSearch: function () {
    const searchForm = document.querySelector(".search");
    searchForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const keywordEl = e.target.querySelector(".keyword");
      const keyword = keywordEl.value;

      this.query.q = keyword;
      this.getPosts(this.query);
    });
  },

  handleSort: function () {
    const sortBy = document.querySelector(".sort-by");
    sortBy.addEventListener("change", (e) => {
      const value = e.target.value;
      this.query._order = value;

      this.getPosts(this.query);
    });
  },

  //Khởi động app
  start: function () {
    this.getPosts(this.query);
    this.handleSearch();
    this.handleSort();
  },
};

//Chạy app
app.start();
