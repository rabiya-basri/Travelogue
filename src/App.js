import React from "react";
import "./styles.css";
import { useState } from "react";

var citiesDictionary = {
  India: [
    {
      cityname: "Bangalore", 
      description:
        "the Garden City of India because of its large, green spaces. While in recent years, development has meant that the city’s green areas have been affected and reduced, it still has enough to make it one of the most beautiful cities in India, and lush green forests can still be found in the outskirts. Bangalore is also the main center of the IT industry, commonly known as the “Silicon Valley of India"
    },
    {
      cityname: "Udaipur",
      description:
        "Most famous for its stunning lakes, forts, temples and palaces, Udaipur is another city located in the state of Rajasthan"
    },
    {
      cityname: "Jaipur",
      description:
        "Jaipur is commonly known as the ‘Pink City’ due to its stunning buildings which were painted pink in 1876 to welcome the Prince of Wales and Queen Victoria."
    },
    {
      cityname: "Mysore",
      description:
        "the second cleanliest countrywide and the cultural capital of Karnataka. What Mysore is most famous for is its yoga centers; in fact, it’s where Ashtanga yoga originated"
    },
    {
      cityname: "Agra",
      description:
        "This stunning marble mausoleum is part of the Seven Wonders of the World. Agra also has two other UNESCO World Heritage sites, namely the Agra Fort and Fatehpur Sikri, which are also worth a visit."
    },
    {
      cityname: "Kolkata",
      description:
        "A charming city for the unsuspecting traveler, Kolkata has long been known as the country’s cultural capital, and continues to be home to some of the best poets, film producers, writers and Nobel Prize winners."
    }
  ],

  France: [
    {
      cityname: "Lyon",
      description:
        " Lyon has a very classy and sophisticated food, shopping, and nightlife scene. Foodies must ensure visiting Les Halles de Lyon, a highly renowned indoor food market"
    },
    {
      cityname: "Bordeaux",
      description:
        "The world’s wine capital, Bordeaux is also known for its well-preserved historic architecture and UNESCO World Heritage Sites"
    },
    {
      cityname: "Nice",
      description:
        "Nice is considered as the crown jewel of the French Riviera and is known for being the playground of famous celebrities, artists, and chefs."
    },
    {
      cityname: "Toulouse",
      description:
        "The fourth-largest city in France, Toulouse is known as La Ville Rose (the pink city) for its beautiful ochre-coloured rooftops and historic European architecture."
    },
    {
      cityname: "Montpellier",
      description:
        "The fastest growing and stylish city of Montpellier lies in the south of France - a highly cosmopolitan city known for its elegant buildings, grand hotels and mansions, wide boulevards, and serene nearby beaches."
    },
    {
      cityname: "Nantes",
      description:
        "Nantes has a reputation of being a “forward-thinking city” and is blessed with rich cultural treasures featuring the historic Nantes Cathedral, which took 457 years to complete!"
    }
  ],

  Italy: [
    {
      cityname: "Verona",
      description:
        "Verona isn’t just where William Shakespeare set Romeo and Juliet—it’s also a beautiful city that offers a lot to do and see! From ancient Roman ruins to a medieval castle, from stunning piazzas to historic churches."
    },
    {
      cityname: "Bologna",
      description:
        "Bologna is the capital of Emilia-Romagna,From soaking in the academic ambience , to enjoying the region’s excellent cuisine in local trattorie."
    },
    {
      cityname: "Rome",
      description:
        "Rome is the largest city in Italy and with its 2,500 years of history and innumerable archaeological sites, art museums, churches, and ruins, it might just be the most fascinating!"
    },
    {
      cityname: "Naples",
      description:
        "Naples often gets a bad rap – and, yes, the city is a little “grittier,” and much more chaotic, than Italy’s other cities."
    },
    {
      cityname: "Lecce",
      description:
        "With about 100,000 residents, Lecce is one of the biggest cities in the region of Puglia. It’s also one of the prettiest! With its ornate, Baroque architecture."
    },
    {
      cityname: "Pisa",
      description:
        "If you want to get what must be the most iconic photo in Italy, Pisa’s your place. But there’s much more to Pisa than that. Yes, the Leaning Tower is spectacular—even more so in person than in pictures."
    }
  ],

  Maldives: [
    {
      cityname: "Male",
      description: "The capital city of Maldives, Male is one of the most well-organized Maldives tourist places, known popularly for its rich heritage, pristine beaches, bustling markets, narrow lanes, and opulent restaurants."
    },
    {
      cityname: "COMO Cocoa Island ",
      description: "Although Maldives is the proud bearer of gorgeous islands, yet the charm of this archipelago is incomplete without the stunning COMO Cocoa Island. This cozily positioned island is nothing but a tropical paradise for rejuvenation and relaxation."
    },
    {
      cityname: "Addu Atoll",
      description: "Addu Atoll happens to be Maldives’ southernmost atoll. This popular atoll comprises a myriad of well-known and beautiful islands including the Gan Island. Other places of tourist interest on Addu Atoll include Meedhoo Island, Hulhudhoo Island, Hithadhoo Island, Maradhoo Island, and Feydhoo Island."
    },
    {
      cityname: "Vaadhoo Island",
      description: "Vaadhoo Island is a beautiful island in the Maldives which offers beautiful beaches, iconic landscapes and mesmerising beauty. When the sun goes down at Vaadhoo Island, the sea waves lapping the shore light up like a shimmering field of blue dots giving the sea the appearance of the starlit night sky. "
    },
    {
      cityname: "Maafushi",
      description: "Maafushi Island forms the best beach of the country owing to its myriad of fun and thrilling activities.With its broad spectrum of exhilarating water sports and lip-smacking delicacies, this island can offer you everything you need for a heart-filling vacation.",

    },
    {
      cityname: "Fulhadhoo Island",
      description: "Packed with clear lagoons, shady palm trees, white sand beaches, and a serene ambiance, Fulhadhoo happens to be one of the most tranquilizing islands in Maldives. Counted among the least explored and most isolated islands of the country, this place holds a plethora of hidden treasures."
    }
  ],
};
export default function App() {
  var [selectcity, setCity] = useState("India");

  function selectingCities(cities) {
    setCity(cities);
  }

  return (
    <div className="App">
      <h1>Travelogue</h1>
      <div>
        {Object.keys(citiesDictionary).map((cities) => (
          <button onClick={() => selectingCities(cities)}>{cities}</button>
        ))}
      </div>

      <div className="container">
        <ul>
          {citiesDictionary[selectcity].map((visit) => (
            <li
              key={visit.cityname}
              style={{
                listStyle: "none",
                border: "1px solid #D1D5DB",
                borderRadius: "0.5rem",
                padding: "1rem",
                margin: "1rem 0rem",
                width: "70%",
                display: "inline-flex",
                backgroundColor: "#0d0e02"
              }}
            >
              {" "}
              <div className="container-left"> {visit.cityname} </div>
              <div
                style={{
                  fontSize: "smaller",
                  textAlign: "justify",
                  margin: "0.6rem 0.9rem 0.9rem 1rem"
                }}
              >
                {" "}
                {visit.description}{" "}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
