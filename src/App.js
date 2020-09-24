import React, { Component } from 'react';
import BookForm from './components/BookForm';
import BookList from './components/BookList'
import './index.css'


class App extends Component{
  state = {
    books : [
      {name : "Why We Sleep"},
      {name : "Start With Why"},
      {name : "The Ego Is The Enemy"},
      {name : "The Compound Effect"},

    ],
    current : ''
  }
  //updateBook
        updateBook = (e) => {
this.setState({
  current:  e.target.value
})        
      
        }
  //AddBook
  addBook = (e) => {
    e.preventDefault();
    let current = this.state.current ;
     let books = this.state.books;
     books.push({name : current});
     this.setState({
      books,
       current:''
     });
  }
  deleteBook = (index) => {
    let books = this.state.books;
    books.splice(index,1);
    this.setState({
      books
    })
  }
  //editBook
  editBook = (index,value) => {
    let books = this.state.books;
     let course = books[index];
      course['name'] = value;
      this.setState({
        books
      })
  }
  render(){
    const {books} = this.state;
    const bookList = books.map((book , index) => {
      return <BookList details={book} key={index} index={index} deleteBook={this.deleteBook} editBook={this.editBook}/>
    })
    return(
      <section className="App">
         <h2>Add Book</h2>
               <BookForm current={this.state.current} updateBook={this.updateBook} addBook={this.addBook}/>
              <ul>{bookList}</ul> 

      </section>
    )
  }
}
export default App;