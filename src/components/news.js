import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './spinner'
import InfiniteScroll from "react-infinite-scroll-component";


export default class News extends Component {
  constructor(){
    super();
    this.state ={
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      hasMore: true,
    }
  }

  async updateNews(){
    try{
    this.props.setprogress(10)
    let url = ` https://api.thenewsapi.com/v1/news/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70b1607c16e84ebea978baa76761495e&page=${this.state.page}&pagesize=${this.props.pagesize}`
    let data = await fetch(url)
    this.props.setprogress(30)
    let parsedata = await data.json();
    this.setState({articles: parsedata.articles,
      loading: false})
    this.props.setprogress(100)
  }catch(error){
    console.log(error)
  }
}
  

  async componentDidMount(){
    this.updateNews();
    
  }


   fetchMoreData = async() =>{
    try{
     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=70b1607c16e84ebea978baa76761495e&page=${this.state.page+1}&pagesize=${this.props.pagesize}`
     this.setState({page: this.state.page+1})
    let data = await fetch(url)
    let parsedata = await data.json();
    this.setState({articles: this.state.articles.concat(parsedata.articles),
    totalResults: parsedata.totalResults,
     loading: false})
     if (this.state.articles && this.state.articles.length === this.state.totalResults) {
      // Disable infinite scroll if all data is loaded
      this.setState({ hasMore: false });
    }
  }catch(error){
    console.log(error)
  }

  }
  
  render() {
    return (
      < >
      <div className='container   mt-4 '>

        <InfiniteScroll
        
          dataLength={this.state.articles ? this.state.articles.length : 0}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<h4><Spinner/> </h4>}
        >
        <div className="container">
        <div className="row">
        <h2 className='container text-centre my-5'>News top headlines</h2>    
          {this.state.articles.map((element) => {   
            return(
              <div className="col-md-4" key={element.url}>       
              <Newsitem title = {element.title} description = {element.description} imageurl = {element.urlToImage?element.urlToImage: "https://images.frandroid.com/wp-content/uploads/2022/10/samsung-logo.jpg"} url ={element.url} author ={element.author} publishedAt = {element.publishedAt} name = {element.source.name} /> 
              </div>
            )
          })}
          </div>
          </div>
          </InfiniteScroll>
        </div>
          </>
         
    )
  }
}
