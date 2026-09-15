import { Link, useLoaderData } from "react-router";
const BookDetail = () => {
  const book = useLoaderData();

  return (
    <section className="page">
      <Link to="/">Back to all books</Link>

      <h2>{book.name}</h2>

      <div className="card">
        <div className="card-body">
          <h5>
            {book.type}{" "}
            {book.available ? (
              <span className="badge success">In stock</span>
            ) : (
              <span className="badge danger">Sold out</span>
            )}
          </h5>

          <ul>
            <li>
              <strong>Author:</strong> {book.author}
            </li>
            <li>
              <strong>Price:</strong>{" "}
              <span style={{ fontStyle: "italic" }}>
                ${Number(book.price).toFixed(2)}
              </span>
            </li>
            <li>
              <strong>Copies in stock:</strong> {book["current-stock"]}
            </li>
            <li>
              <strong>Added:</strong>{" "}
              {new Date(book.created).toLocaleDateString()}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default BookDetail;