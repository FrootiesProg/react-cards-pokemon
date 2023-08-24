import React from "react";
import useAxios from "./useAxios"; 
import PlayingCard from "./PlayingCard"; 
import "./PlayingCardList.css"; 

// Component that renders a list of playing cards
function CardTable() {
  // Use the custom useAxios hook to manage the card data
  const [cards, fetchCardData] = useAxios(
    [], // Initial data is an empty array
    "https://deckofcardsapi.com/api/deck/new/draw/" // Base URL for card requests
  );

  // Function to add a new card by making an AJAX request
  const addCard = async () => {
    await fetchCardData("https://deckofcardsapi.com/api/deck/new/draw/"); // Fetch a new card data
  };

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {/* Map through the card data array and render PlayingCard components */}
        {cards.map((cardData, index) => (
          <PlayingCard key={index} front={cardData.cards[0].image} /> // Pass the card image URL as prop
        ))}
      </div>
    </div>
  );
}

export default CardTable;
