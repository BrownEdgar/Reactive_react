export default function StarsRating({ rate }) {
  const stars = Array.from({ length: Math.floor(rate) });
  const emptyStars = Array.from({ length: 5 - Math.ceil(rate) });
  let key = 1;

  return (
    <>
      {stars.map((star) => (
        <i className="bi bi-star-fill" key={key++}></i>
      ))}
      {rate - Math.floor(rate) > 0 ? <i className="bi bi-star-half"></i> : null}
      {emptyStars.map((star) => (
        <i className="bi bi-star" key={key++}></i>
      ))}
    </>
  );
}
