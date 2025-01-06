import React from "react";
import ReactDOM from 'react-dom/client'; 
import Header from "./header";
import Hero from "./hero";
import Card from "./card";
import data from './data';

export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key={item.id} // Adding a unique key prop to each Card component (important for lists in React)
                img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                description={item.description}
                openSpots={item.openSpots} 
            />
        );
    });

    return (
        <div>
            <Header />
            <Hero />
            <section className="cards-list"> 
                {cards}
            </section>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root')); 
root.render(<App />);
