import React from 'react'

function Books(props) {
    return(
        <div>
            <h2> These books are from the API</h2>
            {props.books.map((book) => {
                return (<div key={book.id}>
                    <h3>{book.title}</h3>
                    <p>{book.body}</p>
                    </div>
                );
            })}
        </div>
    )
}

export default Books