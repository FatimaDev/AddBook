import React, { Component } from 'react';



class BookList extends Component {
    state = {
        isEdit : false
    }
//render book item
renderBook = () =>{
    return(
        <li> 
             <span>{this.props.details.name}</span>
             <button onClick={() => this.toggleState()} >Edit</button>
             <button  onClick={(index) => this.props.deleteBook(this.props.index)}>Delete
                 </button>
        </li>
    )
}
//toggleState
toggleState = () => {
    let {isEdit} = this.state;
   this.setState({
    isEdit : !isEdit
   })
}
updateBookItem = (e) => {
e.preventDefault();
this.props.editBook(this.props.index , this.input.value);
this.toggleState();
}

//render update form
renderUpdateForm = () => {
    return(
        <form onSubmit={this.updateBookItem}>
            <input type="text"ref={(v) => {this.input = v }}  defaultValue={this.props.details.name}/>
            <button>Update</button>
        </form>
    )
}



    render(){
      let {isEdit} = this.state;
        return(
            <React.Fragment>
               {isEdit ? this.renderUpdateForm() : this.renderBook()}

            </React.Fragment>
        )
    }
}
export default BookList;