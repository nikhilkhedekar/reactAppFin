import React from 'react'

class Meal {
    constructor(id,
        categoryIds,
        title,
        affordability,
        complexity,
        imageURL,
        duaration,
        ingredients,
        steps,
        isGlutenFree,
        isVegan,
        isVegetarian,
        isLactosefree,
    ) {
        this.id = id;
        this.categoryIds = categoryIds;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageURL = imageURL;
        this.duaration = duaration;
        this.ingredients = ingredients;
        this.steps = steps;
        this.isGlutenFree = isGlutenFree;
        this.isVegan = isVegan;
        this.isVegetarian = isVegetarian;
        this.isLactosefree = isLactosefree;
    }
}

export default Meal