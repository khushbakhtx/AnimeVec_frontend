import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css'; 

const LIMIT = 1000; 

function AnimeList() {
  const [animeTitles, setAnimeTitles] = useState([]);
  const [page, setPage] = useState(0); 
  const [loading, setLoading] = useState(false); 
  const [hasMore, setHasMore] = useState(true); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [titleImages, setTitleImages] = useState({}); 

  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  const fullText = "Choose Your Favorite Anime Titles";

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 50; 
    const delayBetweenCycles = 2000;

    if (index < fullText.length && !isDeleting) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index + 1));
        setIndex((prevIndex) => prevIndex + 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (index === fullText.length && !isDeleting) {
      const timeout = setTimeout(() => setIsDeleting(true), delayBetweenCycles);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index > 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, index - 1));
        setIndex((prevIndex) => prevIndex - 1);
      }, typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }
  }, [index, isDeleting]);


  const fetchAnimeTitles = useCallback(async () => {
    if (loading || !hasMore) return; 

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
    

    setLoading(true);
    try {
      const response = await axios.get(`http://127.0.0.1:8000/titles?skip=${page * LIMIT}&limit=${LIMIT}`);
      const newTitles = response.data;

      setAnimeTitles(prevTitles => {
        const existingTitlesSet = new Set(prevTitles.map(t => t.toLowerCase().trim()));
        const filteredNewTitles = newTitles.filter(title => !existingTitlesSet.has(title.toLowerCase().trim()));
        return [...prevTitles, ...filteredNewTitles];
      });

      setTitleImages(prevImages => {
        const newImages = { ...prevImages };
        newTitles.forEach(title => {
          if (!newImages[title]) {
            const randomImage = animeImages[Math.floor(Math.random() * animeImages.length)];
            newImages[title] = randomImage;
          }
        });
        return newImages;
      });

      setHasMore(newTitles.length === LIMIT); 
    } catch (error) {
      console.error('Error fetching titles:', error);
    } finally {
      setLoading(false);
    }
  }, [page, loading, hasMore]);

  useEffect(() => {
    fetchAnimeTitles();
  }, [fetchAnimeTitles]);

  const handleScroll = () => {
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 1) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const filteredTitles = animeTitles.filter(title =>
    title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <h1>{displayedText}</h1>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for an anime..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>
      <div className="carousel">
        {(searchTerm ? filteredTitles : animeTitles).map((title, index) => (
          <div className="card" key={index}>
            <Link to={`/anime/${encodeURIComponent(title)}`} className='with_no'>
              <img 
                src={titleImages[title]} 
                alt={title} 
              />
              <div className="card-title">{title}</div>
            </Link>
          </div>
        ))}
      </div>
      {loading && <p>Loading...</p>}
    </div>
  );
}

export default AnimeList;
