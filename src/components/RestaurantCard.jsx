import { Star, MapPin, Clock } from 'lucide-react';
import './RestaurantCard.css';

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisine, rating, reviews, price, distance, image, gradient, tags, openNow } = restaurant;

  return (
    <div className="restaurant-card">
      {/* Image area */}
      <div className="restaurant-card__image" style={{ background: gradient }}>
        <span className="restaurant-card__emoji">{image}</span>
        <div className={`restaurant-card__status ${openNow ? 'restaurant-card__status--open' : 'restaurant-card__status--closed'}`}>
          {openNow ? 'Open Now' : 'Closed'}
        </div>
      </div>

      {/* Content */}
      <div className="restaurant-card__content">
        <div className="restaurant-card__header">
          <h3 className="restaurant-card__name">{name}</h3>
          <div className="restaurant-card__rating">
            <Star size={13} fill="#FFD166" color="#FFD166" />
            <span>{rating}</span>
            <span className="restaurant-card__reviews">({reviews})</span>
          </div>
        </div>

        <p className="restaurant-card__cuisine">{cuisine}</p>

        <div className="restaurant-card__meta">
          <span className="restaurant-card__price">{price}</span>
          <div className="restaurant-card__distance">
            <MapPin size={11} />
            {distance}
          </div>
        </div>

        <div className="restaurant-card__tags">
          {tags.slice(0, 2).map((tag) => (
            <span key={tag} className="restaurant-card__tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
