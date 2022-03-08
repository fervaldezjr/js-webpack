
const router = (route) => {
    switch(route) {
        case '#/portfolio':
            return console.log('portfolio!')
        case '#/shopping':
            return console.log('shop!')
        case '#/biography':
            return console.log('bio!')
        case '#/contact':
            return console.log('contact!')
        case '#/cart':
            return console.log('cart!')
        default:
            return console.log('err404')
    }
};

export {router};