import { Link } from "react-router";

const BookCard = ({book}) => {
  const typeBadge=book.type === 'fiction' ? "success" : "secondary";
   
    return (
    <div className="card">
        <div className="card-body">
            <h4 className="card-title">
                {book.name}
            </h4>
            <p>
                <span className="{`badge ${typeBadge}}"> { book.type}</span>
            </p>
            <Link to={`/books/${book.id}`}> View Book</Link>

        </div>




    </div>
  );
};

export default BookCard;