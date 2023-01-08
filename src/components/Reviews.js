import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Reviews() {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=894ef72300682f1db325dae2afe3e7e2`
    )
      .then(response => response.json())
      .then(reviewsInfo => {
        return setReviewsInfo(reviewsInfo);
      })
      .catch(error => {
        return error;
      });
  }, [movieId]);

  return (
    <div>
      {reviewsInfo && (
        <div>
          <ul>
            {reviewsInfo.results.map(review => (
              <li key={review.author}>
                <div>
                  <p>Author: {review.author}</p>
                  <p>{review.content}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
