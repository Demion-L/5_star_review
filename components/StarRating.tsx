import React, { useState } from "react";

interface StarRatingProps {
  onRatingSubmit: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = ({ onRatingSubmit }) => {
  const [rating, setRating] = useState<number>(0);
  const [hoveredRating, setHoveredRating] = useState<number>(0);

  const handleMouseEnter = (index: number) => {
    setHoveredRating(index);
  };

  const handleMouseLeave = () => {
    setHoveredRating(0);
  };

  const handleClick = async (index: number) => {
    setRating(index);
    if (onRatingSubmit) {
      onRatingSubmit(index);
    }

    try {
      const response = await fetch("/api/rate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating: index }), // send the rating in the request body
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      console.log("Server response:", data); // Handle response from server
    } catch (error) {
      console.error("Error sending rating:", error);
    }
  };

  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onMouseEnter={() => handleMouseEnter(star)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleClick(star)}
          style={{
            fontSize: "2rem",
            color:
              star <= (hoveredRating > 0 ? hoveredRating : rating)
                ? "gold"
                : "lightgray",
          }}>
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
