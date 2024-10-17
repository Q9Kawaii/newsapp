import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProp = {
    country: "in",
    pageSize: 8,
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      model: "light",
    };
  }
  // country=de&category=business&
  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=6a75f12ddcd044c7b33b537c3e84c732&page=1&pageSize=${this.props.pageSize}&page=1`;
    console.log(url);
    this.setState({ loading: true });
    try {
      let data = await fetch(url);
      let passedData = await data.json();
      console.log("API Response:", passedData);  // Log the API response
  
      this.setState({
        articles: passedData.articles,
        totalResults: passedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  handlePrevClick = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${      this.props.country    }&apiKey=6a75f12ddcd044c7b33b537c3e84c732&page=${      this.state.page - 1    }&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let passedData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: passedData.articles,
      loading: false,
    });
  };

  handleNextClick = async () => {
    if (
      !(
        this.state.page + 1 >
        Math.ceil(this.state.totalResults / this.props.pageSize)
      )
    ) {
      let url = `https://newsapi.org/v2/top-headlines?country=${
        this.props.country
      }&apiKey=6a75f12ddcd044c7b33b537c3e84c732&page=${
        this.state.page + 1
      }&pageSize=${this.props.pageSize}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let passedData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: passedData.articles,
        loading: false,
      });
    }
  };

  render() {
    let { toggleMode, mode } = this.props;
    return (
      <div>
        <div
          className={`container my-3 text-${
            mode === "dark" ? "light" : "black"
          }`}
        >
          <h2
            className={`text-center my-4 text-${
              mode === "dark" ? "light" : "black"
            }`}
          >
            NewsMonkey - Top HeadLines
          </h2>
          {this.state.loading && <Spinner />}

          <div className="row">
            {!this.state.loading &&
              this.state.articles.map((element) => {
                return (
                  <div key={element.url} className="col-md-3">
                    <NewsItem
                      title={element.title ? element.title : ""}
                      description={
                        element.description ? element.description : ""
                      }
                      imageUrl={element.urlToImage}
                      newsUrl={element.url}
                      mode={this.props.mode}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div
          className="d-flex justify-content-around"
          style={{ marginBottom: "20px" }}
        >
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              this.state.page + 1 >
              Math.ceil(this.state.totalResults / this.props.pageSize)
            }
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
