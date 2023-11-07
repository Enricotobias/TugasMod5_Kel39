import React from 'react';
import {CardBig}  from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import "./Movie.css";

const Movie = () => {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const data = [
    {
      title: "The Shawshank Redemption (1994)",
      id: 1,
      rating: 5,
      genre: "criminal, drama",
      img: "https://m.media-amazon.com/images/I/61-vQDr7ecL._SL1000_.jpg",
      description: "Film drama kriminal yang mengikuti kisah Andy Dufresne, seorang pria yang dihukum atas pembunuhan istrinya dan kekasihnya, yang melarikan diri dari penjara Shawshank dan memulai hidup baru.",
    },
    {
      title: "Schindler's List",
      id: 2,
      rating: 4,
      genre: "comedy, crime, drama",
      img: "https://contentcafe2.btol.com/ContentCafe/Jacket.aspx?userID=TCM12213&password=CC49938&Value=191329072530&content=L&Return=1&Type=L",
      description: "Film drama perang yang menceritakan kisah Oskar Schindler, seorang pengusaha Jerman yang menyelamatkan nyawa lebih dari 1.000 orang Yahudi selama Holocaust.",
    },
    {
      title: "12 Angry Men",
      id: 3,
      rating: 4,
      genre: "crime, romance",
      img: "https://upload.wikimedia.org/wikipedia/commons/b/b5/12_Angry_Men_%281957_film_poster%29.jpg",
      description: "Film drama pengadilan yang mengikuti kisah 12 juri yang harus memutuskan nasib seorang pria yang dituduh membunuh ayahnya.",
    },
    {
      title: "Pulp Fiction",
      id: 4,
      rating: 4,
      genre: "drama, crime",
      img: "https://www.miramax.com/assets/Pulp-Fiction1.png",
      description: "Pulp Fiction adalah sebuah film kultus karya Quentin Tarantino yang dirilis pada tahun 1994. Film ini mengikuti serangkaian cerita yang saling terkait yang berpusat pada kehidupan kriminal, kekerasan, dan humor gelap. Dikenal karena penggunaan dialog tajam, pemain yang berbakat, dan gaya penyutradaraan yang unik, Pulp Fiction menjadi salah satu film paling ikonik dalam sejarah perfilman.",
    },
    {
      title: "Inception",
      id: 5,
      rating: 4,
      genre: "sci-fi, action, thriller",
      img: "https://wallpapercave.com/fWnWpHj.jpg",
      description: "Inception adalah sebuah film aksi ilmiah yang disutradarai oleh Christopher Nolan. Film ini mengisahkan tentang seorang pencuri profesional yang merancang rencana untuk mencuri informasi dari alam bawah sadar seseorang melalui mimpi. Dengan konsep dunia mimpi yang kompleks, film ini menggabungkan elemen cerita yang mendalam dengan aksi spektakuler dan efek visual yang mengagumkan.",
    },
  ];
  

  return (
    <>
      <p id="movies">Top Movies</p>
      <div className="containerTop">
        {data.map((item, index) => (
        <Link to={`/movie/detail/${item.id}`} key={item.id}>
          <CardBig key={item.id} title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
        </Link>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="movies">All Movies</p>
          {data.map((item, index) => (
            <Link to={`/movie/detail/${item.id}`} key={item.id}>
              <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Movie;
