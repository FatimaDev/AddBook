import React from 'react';

const BookForm = (props) => {
    return (
        
            <form onSubmit={props.addBook}>
                <input type="text" value={props.current} onChange={props.updateBook}/>
                <button type="submit">Add Book</button>
            </form>
    
    )
}
export default BookForm;