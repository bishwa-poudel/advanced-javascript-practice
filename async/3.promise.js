// from callback hell to promise

const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([123,548,231,423])
    }, 1500);
})

const getRecipe = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const recipe = {
                title: 'Nepalese Momo',
                publisher: 'Bishwa'
            }
            resolve(recipe)
        }, 1000, id);
    })
}

const getRelated = pub => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const recipe = {
                title: 'Fried Rice',
                publisher: 'Bishwa'
            }
            resolve(recipe)    
        }, 1500, pub);
    })
}

// promise is a promise to do some work. 
getIDs.then(ids => {
    console.log(ids)
    return getRecipe(ids[2]) //after one promise is resolved return another promise for another work
})
.then(recipe => {    // what to do after getRecipe promise is fulfilled
    console.log(`${recipe.title} by ${recipe.publisher}`)
    return getRelated(recipe.publisher)
})
.then(recipe => {
    console.log(`Recommended: ${recipe.title} by ${recipe.publisher}`)
})
.catch(error => {
    console.log(error)
})