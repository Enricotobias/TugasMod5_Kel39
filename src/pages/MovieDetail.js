import React from 'react';
import { useParams } from 'react-router-dom';
import "./MovieDetail.css";

const MovieDetail = () => {
  const { id } = useParams(); // Mengambil parameter id dari URL

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

  const detailData = data.find((item) => item.id === parseInt(id, 10));

  if (!detailData) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <div>
      <div className="movie-details">
        <div className="movie-image">
          <img src={detailData.img} alt={detailData.title} />
          
        </div>
        <div className="movie-info">
          <h1>{detailData.title}</h1>
          <p>Genre: {detailData.genre}</p>
          <p>Deskripsi: {detailData.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
