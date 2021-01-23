import './App.css';
import books from "./data.js"

function App() {
  return (
    <div className="App">
      <BookList />
    </div>
  );
}

function BookList() {
  return (
    <div className="booklist">
      {books.map((book) => {
        return (
          <Book book={book}/>
        )
      })}
    </div>
  )
}

function Book(props) {
  const {image, title, author, year} = props.book;
  return (
    <article className="book">
      <img src={image} alt="book cover"/>
      <div className="description-container">
        <h4 className="title">{title}</h4>
        <h5 className="author">{author}</h5>
        <h5 className="year">{year}</h5>
      </div>
    </article>
  )
}

export default App;
