import React from 'react';
import './HomePage.css';
import ProductCard from '../ProductCard/ProductCard';

function HomePage() {

    const search = () => {
        fetch("https://resy.p.rapidapi.com/3/venue?id=13347", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "419acb714bmsh6ea20912c1a1917p1fe8acjsn5cd046768d18",
		"x-rapidapi-host": "resy.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});
    }

    return (
        <div className="home">
            <div onClick={search} className="home_heading">
                <p>uiidfahndfa  idjhif a f</p>
            </div>
            <div className="home_products">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}

export default HomePage;
