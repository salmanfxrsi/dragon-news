import { FaRegBookmark, FaShareAlt } from "react-icons/fa";
import PropTypes from "prop-types";
import StarRatings from "react-star-ratings";

const NewsCard = ({ news }) => {
  const { author, title, details, rating, thumbnail_url, total_view } = news;

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-6">
      {/* Author Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full mr-3"
          />
          <div>
            <p className="font-semibold text-gray-800">{author.name}</p>
            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>
        <div className="flex space-x-3 text-gray-600">
          <FaRegBookmark className="cursor-pointer" />
          <FaShareAlt className="cursor-pointer" />
        </div>
      </div>

      {/* News Image and Title */}
      <h2 className="text-xl font-bold mb-2 text-gray-900">{title}</h2>
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-80 object-fill rounded mb-4"
      />

      {/* News Details */}
      <p className="text-gray-700 mb-4">
        {details}
        <span className="text-blue-600 font-semibold cursor-pointer">
          {" "}
          Read More
        </span>
      </p>
      <hr className="my-6" />

      {/* Footer Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <StarRatings
            rating={rating.number}
            starRatedColor="orange"
            numberOfStars={5}
            name="rating"
            starDimension="22px"
          ></StarRatings>
          <span className="text-gray-800 font-semibold">{rating.number}</span>
        </div>
        <div className="text-gray-600">
          <span className="mr-2">{total_view}</span>
          <span>Views</span>
        </div>
      </div>
    </div>
  );
};

NewsCard.propTypes = {
  news: PropTypes.object,
};

export default NewsCard;
