import React from 'react';
import { useParams } from 'react-router-dom';
import "./BookDetail.css";

const BookDetail = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL

  //  mengambil data detail berdasarkan id dari Book.js
  const data = [
    {
        title: "1984", id: 1,
        rate: 4,
        genre: "Nonfictions", 
        img: "https://images.booksense.com/images/935/262/9780452262935.jpg",
        description: "Description of Movie 1",
    },
    {
        title: "The Diary of a Young Girl", id: 2,
        rate: 4,
        genre: "Historical", img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1560816565i/48855.jpg",
        description: "Description of Movie 1",
    },
    {
        title: "The Lord of the Rings", id: 3,
        rate: 3,
        genre: "Romance", img: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg",
        description: "Description of Movie 1",
    },
    {
        title: "The Hitchhiker's Guide to the Galaxy", id: 4,
        rate: 4,
        genre: "Romance, Mystery", 
        img: "https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-270/edition/9781529034578.jpg",
        description: "Description of Movie 1",
    },
    {
        title: "No Longer Human", id: 5,
        rate: 4,
        genre: "Semi-autobiographical ", 
        img:"https://cdn.sanity.io/images/p34gzxcg/production/7635c996b98d1762e7530fe157b599284de70123-750x1050.jpg?auto=format&w=1000&fit=scale",
        description: "Description of Movie 1",
    },
    {
        title: "Rashomon", id: 6,
        rate: 4,
        genre: "Mystery, Thriller", 
        img:"https://www.sequelbooks.com/assets/full/9784805314630.jpg?20211028145848",
        description: "Description of Movie 1",
},
];

  const detailData = data.find((item) => item.id === parseInt(id, 10));

  if (!detailData) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div>
      <div className="book-details">
        <div className="book-image">
          <img src={detailData.img} alt={detailData.title} />
          
        </div>
        <div className="book-info">
          <h1>{detailData.title}</h1>
          <p>Genre: {detailData.genre}</p>
          <p>Deskripsi: {detailData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
