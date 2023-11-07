import React from "react";
import CardProfile from "../component/CardProfile";
import "./Profile.css";

export default function Profile() {
  const members = [
  {  name: "Enrico Tobias",
    avatar: "https://o-cdf.sirclocdn.com/unsafe/o-cdn-cas.sirclocdn.com/parenting/images/Zee_JKT48.width-800.format-webp.webp",
    nim: "21120121140113",
  },
  {
    name: "Bagus Wijanarko ",
    avatar: "https://cdn.idntimes.com/content-images/community/2023/03/whatsapp-image-2023-03-25-at-112916-am-770cbc2889bb4c14bf5042be7b505d5d-3ac0338901e5c48cb8fb538d6995f983.jpeg",
    nim: "21120121120006",
  },
  {
    name: "Ferdinand Rockwell Sebastian Sinaga",
    avatar: "https://assets.ayobandung.com/crop/0x0:0x0/750x0/webp/photo/p1/273/2023/09/03/IMG_20230903_154337-3945755730.jpg",
    nim: "21120121140111",
  },
  {
    name: "Nixon Bryan Paruliyan Simanjuntak",
    avatar: "https://static.promediateknologi.id/crop/0x0:0x0/0x0/webp/photo/p2/01/2023/07/02/8F250E5E-5025-4B3D-83FC-FED8435F3C15-285036172.jpeg",
    nim: "21120121140143",
  },
  ]

  return (
    <div>
      <h1 className="profile-title">Profile Anggota Kelompok</h1>
      <div className="profile-container">
        {members.map((member, index) => (
          <CardProfile
            key={index}
            name={member.name}
            nim={member.nim}
            profilePicture={member.avatar}
          />
        ))}
      </div>
    </div>
  );
}
