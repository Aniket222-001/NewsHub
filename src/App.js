import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/news'
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  state = {
    progress: 10
  }
  setprogress=(progress)=>{
    this.setState({
      progress: progress
    })
  }
  render() {
    
    return (
      <div>
        <Router>
        <Navbar/>
        
        <LoadingBar
          color="#f11946"
          width='5px'
          progress={this.state.progress}
          // onLoaderFinished={() => this.setprogress(0)}
        />
        <Routes>   
          <Route path="/general" element={<News setprogress = {this.setprogress} key={'general'} pagesize = '9' country ='in' category = 'general'/>} />
          <Route path="/business" element={<News setprogress = {this.setprogress} key={'business'} pagesize ='9' country ='in' category = 'business'/>} />
          <Route path="/entertainment" element={<News setprogress = {this.setprogress} key={'entertainment'} pagesize ='9' country ='in' category = 'entertainment'/>} />
          <Route path="/sports" element={<News setprogress = {this.setprogress} key={'sports'} pagesize ='9' country ='in' category = 'sports'/>} />
          <Route path="/health" element={<News setprogress = {this.setprogress} key={'health'} pagesize ='9' country ='in' category = 'health'/>} />
          <Route path="/Science" element={<News setprogress = {this.setprogress} key={'Science'} pagesize ='9' country ='in' category = 'Science'/>} />  
          <Route path="/" element={<News setprogress = {this.setprogress} key={'Science'} pagesize ='9' country ='in' category = 'Science'/>} />  
        </Routes>
        
        </Router>
      </div>
    )
  }
}
