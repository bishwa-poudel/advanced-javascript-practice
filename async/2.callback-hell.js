// callback hell is the chaining of callbacks. (callback within a call back and so on)

const getRecipe = () => {
    setTimeout(() => {
        const ids = [123,548,231,423]
        console.log(ids)

        setTimeout(id => {
            const recipe = {
                title: 'Nepalese Momo',
                publisher: 'Bishwa'
            }
            console.log(`${id}. ${recipe.title} by ${recipe.publisher}`)

            setTimeout(publisher => {
                const recipe2 = {
                    title: 'Fried Rice',
                    publisher: 'Bishwa'
                }
                console.log(`Recommended: ${recipe2.title} by ${recipe2.publisher}`)
            }, 1500, recipe.publisher);
        }, 1000, ids[2]);

    }, 1500);
}

getRecipe()

// callback within a callback upto 3 levels are here.. on increasing this causes callback hell. 
// Hence, 'Promise' is introduced in Javascript