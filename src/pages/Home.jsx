// import { useEffect, useState } from "react";

import { useLoaderData } from "react-router";
import BookCard from "../components/BookCard";
import { useState } from "react";

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
const [search, setSearch]=useState("")
// console.log(search)
const [type, setType] = useState("all")


  const loadBooks = useLoaderData()
  console.log(loadBooks)

const filterBooks = loadBooks.filter((book)=>{
 const nameMatch = book.name.toLowerCase().includes(search.toLowerCase());
 const typeMatch = type=="all" || book.type==type;
 return nameMatch && typeMatch;
})

  return (

    <>
      <h1>Books Libary</h1>
      {
        // books.map((book)=> <li> {book.name}</li>  )
      }

{/* {
  loadBooks.map((book)=><li> {book.name} </li>)
} */}

<div className="row"> 
  <div className="col-full col"> 
    <input type="search" placeholder="Search by title" 
    onChange={(e)=>setSearch(e.target.value)} />
  </div>

  <div className="col">
    <select value={type} onChange={(e)=>setType(e.target.value)}>
      <option value="all">All Types</option>
      <option value="fiction">Fiction</option>
      <option value="non-fiction">Non fiction</option>
    </select>
  </div>

</div>
<div key={loadBooks.id} className="row">
  {
    filterBooks.length == 0 ? <p> Your Book Not found </p> : filterBooks.map((book)=>(
      <div> 
        <BookCard book={book} />
      </div>
    ))
  }

</div>

    </>
  );
};

export default Home;