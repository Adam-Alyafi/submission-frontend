class MealItem extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
  
    set meal(meal){
        this._meal = meal;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
        <style>
        * {
             margin: 0;
             padding: 0;
             box-sizing: border-box;
         }
         :host {
             display: block;
             margin-bottom: 35px;
             box-shadow: 0 10px 20px 0 rgba(0, 0, 0, 0.5);
             border-radius: 50px;
             overflow: hidden;
         }
        
         .fan-art-meal {
             width: 100%;
             max-height: 500px;
             object-fit: cover;
             object-position: center;
         }
        
         .meal-info {
             padding: 50px;
         }
        
         .meal-info > h2 {
             font-weight: lighter;
         }
        
         .meal-info > p {
             margin-top: 20px;
             overflow: hidden;
             text-overflow: ellipsis;
             display: -webkit-box;
             -webkit-box-orient: vertical;
             -webkit-line-clamp: 10; /* number of lines to show */
         }

           </style>
            <img class="fan-art-meal" src="${this._meal.strMealThumb}" alt="Fan Art"> 
            <div class="meal-info">
            <h2>${this._meal.strMeal}</h2>
            <br>
            <h3>${this._meal.strArea}</h3>
            <h4>${this._meal.strCategory}</h4>
            <p>${this._meal.strInstructions}</p>
            </div>`;
    }
}
customElements.define("meal-item", MealItem);