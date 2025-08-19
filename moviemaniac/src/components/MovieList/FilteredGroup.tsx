interface FilteredGroupProps {
  minRating: number;
  ratings: number[];
  onRatingClick: (rating: number) => void;
}
const FilteredGroup = ({
  minRating,
  onRatingClick,
  ratings,
}: FilteredGroupProps) => {
  return (
    <ul className="align_center movie_filter ">
      {ratings.map((rating) => (
        <li
          className={
            minRating === rating
              ? "movie_filter_item active"
              : "movie_filter_item"
          }
          key={rating}
          onClick={() => {
            onRatingClick(rating);
          }}
        >
          {rating}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilteredGroup;
