import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './App.css'; 

function AnimeDetail() {
  const { title } = useParams();
  const [animeDetails, setAnimeDetails] = useState({});

  useEffect(() => {
    axios.post('https://anime-vec-backend.vercel.app/recommend', { title: decodeURIComponent(title) })
      .then(response => setAnimeDetails(response.data))
      .catch(error => console.log(error));
  }, [title]);

  const animeImages = [
    `${process.env.PUBLIC_URL}/assets/carts/img1.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img2.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img3.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img4.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img5.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img6.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img7.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img8.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img9.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img10.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img11.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img12.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img13.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img14.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img15.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img16.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img17.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img18.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img19.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img20.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img21.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img22.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img23.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img24.jpg`,
    `${process.env.PUBLIC_URL}/assets/carts/img25.jpg`,
  ];

  return (
    <div className="anime-detail">
      <div className="detail-header">
        <h1 className="anime-title">{animeDetails.title}</h1>
        <h3>Original Name: {animeDetails.japanese_name}</h3>
        <p className="anime-description"><b>Genres:</b> {animeDetails.genres}</p>
        <p className="anime-description"><b>Episodes:</b> {animeDetails.episodes}</p>
        <p className="anime-description"><b>About the title</b>:<br/>{animeDetails.description}</p>
      </div>
      <h2>Recommended Anime:</h2>
      <div className="recommendations-carousel">
        {animeDetails.recommendations && animeDetails.recommendations.map((anime, index) => {
          const randomImage = animeImages[Math.floor(Math.random() * animeImages.length)];
          return (
            <div className="recommendation-card" key={index}>
              <Link to={`/anime/${encodeURIComponent(anime.title)}`} className='with_no'>
                <img src={randomImage} alt={anime.title} className="recommendation-image" />
                <div className="recommendation-title">{anime.title}</div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AnimeDetail;
