const rp = require("request-promise");

class HackerNews {
  constructor() {
    this.baseUrl = "https://hacker-news.firebaseio.com/v0/";
  }

  async getPopular() {
    const { baseUrl } = this;

    try {
      const response = rp({
        baseUrl,
        url: "/topstories.json",
        json: true
      });

      return response;
    } catch (err) {
      throw err;
    }
  }

  async getItem(itemID) {
    const { baseUrl } = this;

    try {
      const response = rp({
        baseUrl,
        url: `/item/${itemID}.json`,
        json: true
      });

      return response;
    } catch (err) {
      throw err;
    }
  }

  async getMaxItem() {
    const { baseUrl } = this;

    try {
      const response = rp({
        baseUrl,
        url: "/maxitem.json",
        json: true
      });

      return response;
    } catch (err) {
      throw err;
    }
  }

  async getAskStories() {
    const { baseUrl } = this;

    try {
      const response = rp({
        baseUrl,
        url: "/askstories.json",
        json: true
      });

      return response;
    } catch (err) {
      throw err;
    }
  }

  async getShowStories() {
    const { baseUrl } = this;

    try {
      const response = rp({
        baseUrl,
        url: "/showstories.json",
        json: true
      });

      return response;
    } catch (err) {
      throw err;
    }
  }

  async getJobStories() {
    const { baseUrl } = this;

    try {
      const response = rp({
        baseUrl,
        url: "/jobstories.json",
        json: true
      });

      return response;
    } catch (err) {
      throw err;
    }
  }

  async getUpdates() {
    const { baseUrl } = this;

    try {
      const response = rp({
        baseUrl,
        url: "/updates.json",
        json: true
      });

      return response;
    } catch (err) {
      throw err;
    }
  }

  async getNewStories() {
    const { baseUrl } = this;

    try {
      const response = rp({
        baseUrl,
        url: "/newstories.json",
        json: true
      });

      return response;
    } catch (err) {
      throw err;
    }
  }

  async getTopStories() {
    const { baseUrl } = this;

    try {
      const response = rp({
        baseUrl,
        url: "/topstories.json",
        json: true
      });

      return response;
    } catch (err) {
      throw err;
    }
  }

  async getBestStories() {
    const { baseUrl } = this;

    try {
      const response = rp({
        baseUrl,
        url: "/beststories.json",
        json: true
      });

      return response;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = HackerNews;
