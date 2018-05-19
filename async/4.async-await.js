// async-await is introduced in ES8 / ES2017
// has different way of consuming promise
// same way of producing promise

// producing promise
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
            resolve([recipe, id])
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

// consuming promise
async function getRecipesAW() {
    const IDs = await getIDs
    console.log(IDs)
    
    const [recipe, id] = await getRecipe(IDs[2])
    console.log(`${id}: ${recipe.title} by ${recipe.publisher}`)

    const relatedRecipe = await getRelated(recipe.publisher)
    console.log(`Recommended: ${relatedRecipe.title} by ${relatedRecipe.publisher}`)

    // for returning any value
    return 'Function completed'

}

getRecipesAW() //call the asynchronous function
.then(message => {    // get returned value from function
    console.log(message)
})
