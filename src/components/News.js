import React, { Component } from "react";
import Spinner from "./Spinner";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


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

  capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      model: "light",
      totalResults: 0,
    };
    document.title=`${this.capitalizeFirstLetter(this.props.category)} -  LoremNews`
  }

  async updateNews() {
    this.setState({page:this.state.page + 1})
    const url = `https://newsapi.org/v2/top-headlines?&category=${this.props.category}&apiKey=b5277cd8e7704dc49f23df2a8e3681ec&pageSize=${this.props.pageSize}&page=${this.state.page}`;
    console.log(url);
    this.setState({ loading: true });
    try {
      let data = await fetch(url);
      let passedData = await data.json();
      console.log("API Response:", passedData); // Log the API response

      this.setState({
        articles: this.state.articles.concat(passedData.articles),
        totalResults: passedData.totalResults,
        loading: false,
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  // country=de&category=business&
  async componentDidMount() {
    this.updateNews();
  }

  handlePrevClick = async () => {
    this.setState({page:this.state.page - 1});
    this.updateNews();
  };

  handleNextClick = async () => {
    this.setState({page: this.state.page + 1});
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({page:this.state.page + 1});
    this.updateNews();
  };



  render() {
    let { toggleMode, mode } = this.props;
    return (
      <div>
        <div
          className={` my-3 text-${
            mode === "dark" ? "light" : "black"
          }`}
        >
          <h2
            className={`text-center my-4 text-${
              mode === "dark" ? "light" : "black"
            }`}
          >LoremNews - Top {this.capitalizeFirstLetter(this.props.category)} HeadLines</h2>
          {/* {this.state.loading && <Spinner />} */}          
          <InfiniteScroll
              dataLength={this.state.articles.length}
              next={this.fetchMoreData}
              hasMore={this.state.articles.length != this.state.totalResults}
              loader={this.state.loading ? <h4><Spinner /></h4> : null}
        >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element) => {
                    return (
                      <div key={element.url} className="col-md-3">
                        <NewsItem
                          title={element.title ? element.title : ""}
                          source={element.source.name ? element.source.name : ""}
                          author={element.author ? element.author : ""}
                          date={element.publishedAt ? element.publishedAt : ""}
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
          </InfiniteScroll>
        </div>
        {/* <div
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
        </div> */}
      </div>
    );
  }
}

export default News;
