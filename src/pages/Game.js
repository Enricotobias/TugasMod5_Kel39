import React from 'react';
import {CardBig}  from "../component/CardBig";
import CardSmall from "../component/CardSmall";
import { Link } from 'react-router-dom'; // Impor Link dari react-router-dom
import "./Game.css";

const Game = () => {
  const STAR_COLOR = "rgb(220, 117, 21)";
  const STAR_SIZE = 20;
  const data = [
    {
        title: "FIFA 23", id: 1,
        rate: 4,
        genre: "Olahraga, Sepak Bola",
        img:"https://upload.wikimedia.org/wikipedia/en/a/a6/FIFA_23_Cover.jpg",
        description: "FIFA Soccer adalah game sepak bola resmi dari FIFA, badan pengatur sepak bola dunia. Game ini menawarkan pengalaman bermain sepak bola yang realistis dan imersif, dengan grafik yang memukau dan gameplay yang responsif. Pemain dapat memilih untuk bermain sebagai salah satu tim dari lebih dari 30 liga dan 700 klub di seluruh dunia, atau membuat tim mereka sendiri.",

    },
    {
        title: "Madden NFL Overdrive Footbal", id: 2,
        rate: 4,
        genre: "Olahraga, Sepak Bola Amerika", 
        img: "https://m.media-amazon.com/images/I/611hiPuA+9L._AC_SX569_.jpg",
        description: "Madden NFL Overdrive Football adalah game sepak bola Amerika resmi dari NFL, liga sepak bola Amerika profesional. Game ini menawarkan pengalaman bermain sepak bola Amerika yang seru dan menantang, dengan gameplay yang cepat dan penuh aksi. Pemain dapat memilih untuk bermain sebagai salah satu tim dari lebih dari 32 tim NFL, atau membuat tim mereka sendiri.",
    },{
        title: "NBA 2K24", id: 3,
        rate: 3,
        genre: "Olahraga, Basket", 
        img: "https://assets.2k.com/1a6ngf98576c/5lvjCUPKs5vj2aVyzDobJh/ae2575e0e37c5e84d2e4b49978974384/N24-WEB-HOMEPAGE-RETAIL_CAROUSEL-KOBE_BRYANT_EDITION-MODULE_2-425x535-R2.jpg",
        description: "NBA LIVE Mobile Basketball adalah game bola basket resmi dari NBA, liga bola basket profesional Amerika. Game ini menawarkan pengalaman bermain bola basket yang realistis dan kompetitif, dengan grafik yang memukau dan gameplay yang responsif. Pemain dapat memilih untuk bermain sebagai salah satu tim dari lebih dari 30 tim NBA, atau membuat tim mereka sendiri.",
    },
    {
        title: "Yakuza 0", id: 4,
        rate: 4,
        genre: "Story Rich, Action", 
        img: "https://cdn.cloudflare.steamstatic.com/steam/apps/638970/capsule_616x353.jpg?t=1685702171",
        description: "Yakuza 0 adalah sebuah permainan video aksi petualangan yang mengikuti kisah dua protagonis, Kazuma Kiryu dan Goro Majima, dalam dunia kejahatan dan intrik Yakuza di Jepang pada tahun 1980-an. Pemain akan menjelajahi kota-kota besar, bertarung dalam pertarungan jalanan, dan terlibat dalam cerita yang kompleks dan penuh drama.",
    },
    {
        title: "League of Legends", id: 5,
        rate: 4,
        genre: "MOBA", 
        img: "https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-2935d0a3e332decb8e727fe56789b6ab",
        description: "League of Legends adalah permainan video daring berjenis Multiplayer Online Battle Arena (MOBA) yang dikembangkan oleh Riot Games. Pemain bergabung dalam tim untuk bertarung dalam pertempuran intens di arena 5 lawan 5, dengan tujuan menghancurkan basis musuh. Setiap pemain memilih karakter unik dengan kemampuan khusus untuk berkontribusi dalam pertandingan. Game ini memadukan strategi, keterampilan individu, dan kerja sama tim untuk mencapai kemenangan.",
    },
    {
        title: "PUBG", id: 6,
        rate: 4,
        genre: "Shooter, Battle Royale", 
        img: "https://wstatic-prod.pubg.com/web/live/static/og/img-og-pubg.jpg",
        description: "PUBG (PlayerUnknown's Battlegrounds) adalah game battle royale yang penuh aksi di mana pemain terjun dari pesawat dan berusaha menjadi yang terakhir bertahan hidup di pulau dengan berbagai senjata dan peralatan.",
    },

];

  return (
    <>
      <p id="games">Top Games</p>
      <div className="containerTop">
        {data.map((item, index) => (
        <Link to={`/game/detail/${item.id}`} key={item.id}>
          <CardBig key={item.id} title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
        </Link>
        ))}
      </div>
      <div className="rowcoba">
        <div className="column">
          <p id="game">All Games</p>
          {data.map((item, index) => (
            <Link to={`/game/detail/${item.id}`} key={item.id}>
              <CardSmall title={item.title} img={item.img} genre={item.genre} size={STAR_SIZE} color={STAR_COLOR} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Game;
