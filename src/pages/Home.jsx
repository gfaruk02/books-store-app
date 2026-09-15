// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router";

const Home = () => {
  // const [ books, setBooks] = useState([]);

  // useEffect(()=>{
  //   fetch("https://simple-books-api.click/books")
  //   .then(res=>res.json())
  //   .then((data)=>{
  //     setBooks(data)
  //   })
  // },[])
  // console.log(books)

  const loadBooks = useLoaderData()
  console.log(loadBooks)
  return (

    <>
      <h1>Books Libary</h1>
      {
        // books.map((book)=> <li> {book.name}</li>  )
      }

{
  loadBooks.map((book)=><li> {book.name} </li>)
}
    </>
  );
};

export default Home;