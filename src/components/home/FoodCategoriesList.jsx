import React from 'react';
import swallowFood from '../../assets/images/food/swallow-food.jpg';
import continentalFood from '../../assets/images/food/continental-food.jpg';
import drinksFood from '../../assets/images/food/drinks-food.jpg';
import proteinFood from '../../assets/images/food/protein-food.jpg';
import pastriesFood from '../../assets/images/food/pastries-food.jpg';
import soupFood from '../../assets/images/food/soup-food.jpg';
import traditionalFood from '../../assets/images/food/traditional-food.jpg';



const FoodCategoriesList = () => {
    return (
        <section id="categories">
            <div className="container">
                <h2>Food Categories</h2>
                <div className="grid">
                    <a href="./fooditems#swallow">
                        <img src={swallowFood} alt="swallow" />
                        <br />
                        <span>Swallow</span>
                    </a>
                    <a href="./fooditems#continental">
                        <img src={continentalFood} alt="continental" />
                        <br />
                        <span>Continental</span>
                    </a>
                    <a href="./fooditems#drinks">
                        <img src={drinksFood} alt="Drinks" />
                        <br />
                        <span>Drinks</span>
                    </a>
                    <a href="./fooditems#pastries">
                        <img src={pastriesFood} alt="Pastries" />
                        <br />
                        <span>Pastries</span>
                    </a>
                    <a href="./fooditems#protein">
                        <img src={proteinFood} alt="Protein" />
                        <br />
                        <span>Protein</span>
                    </a>
                    <a href="./fooditems#soup">
                        <img src={soupFood} alt="Soup" />
                        <br />
                        <span>Soup</span>
                    </a>
                    <a href="./fooditems#traditional">
                        <img src={traditionalFood} alt="Traditional" />
                        <br />
                        <span>Traditional</span>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default FoodCategoriesList;
