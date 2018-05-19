const second = () => {
    setTimeout(() => {
        console.log('Async hey there')
    }, 2000);
}

const first = () => {
    console.log('Hello there') 
    second()
    console.log('The end') 
}

first()

/* output will be: 
hello there
the end
async hey there (after two seconds)
*/