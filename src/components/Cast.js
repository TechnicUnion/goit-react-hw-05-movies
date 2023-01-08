import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Cast() {
  const { movieId } = useParams();
  const [castInfo, setCastInfo] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=894ef72300682f1db325dae2afe3e7e2`
    )
      .then(response => response.json())
      .then(castInfo => {
        return setCastInfo(castInfo);
      })
      .catch(error => {
        return error;
      });
  }, [movieId]);

  return (
    <div>
      {castInfo && (
        <div>
          <ul>
            {castInfo.cast.map(actor => (
              <li key={actor.name}>
                <img
                  src={`https://www.themoviedb.org/t/p/w200/${actor.profile_path}`}
                  alt={actor.name}
                />
                <div>
                  <p>{actor.name}</p>
                  <p>Character: {actor.character}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
