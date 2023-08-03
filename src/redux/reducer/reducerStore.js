let store = {
    product: [
        {
            name: 'Chocolate Fudge Cake',
            des: 'Decadent chocolate fudge cake with a rich, moist.',
            price: 19.99,
            stock: 10,
            img: 'cake_brown',
        },{
            name: 'Strawberry Cheesecake',
            des: 'Creamy strawberry cheesecake with a buttery.',
            price: 29.99,
            stock: 5,
            img: 'cake_white',
        },{
            name: 'Mango Cake',
            des: 'Classic mango cake with walnuts and cream cheese frosting.',
            price: 16.99,
            stock: 8,
            img: 'cake_yellow',
        },{
            name: 'Almond Cake',
            des: 'An abundance of fresh mixed fruits cake.',
            price: 27.99,
            stock: 3,
            img: 'cake_yellow_pro',
        },{
            name: 'Blackforest Cake',
            des: 'Soft chocolate sponge layered with dark sweet cherries decorated with.',
            price: 14.99,
            stock: 12,
            img: 'cake_mix_bw',
        }
], cart: [

], order: [

    ]   
}

function reducerStore(state = store, action) {
    let product;
    let cart;

    switch(action.type) {
        case 'cartAdd':
            console.log('add reducer');
            let checkVar = false; 

            product = state.product.find(e => e.name === action.payload);
            if (product.stock > 0) {
                product.stock -= 1;

                for(let i = 0; i < state.cart.length; i++){
                    if (state.cart[i].name === product.name) {
                        checkVar = true;
                        state.cart[i].quantity += 1;
                        state.cart[i].total = Math.round((state.cart[i].quantity * state.cart[i].price + Number.EPSILON) * 100) / 100;
                        break;
                    }
                };

                if (!checkVar){
                    state.cart.push({
                        name: product.name,
                        price: product.price,
                        quantity: 1,
                        img: product.img,
                        total: product.price
                    })
                }

            } else {
                console.log('SOLD OUT');
            };
            return {...state, product: state.product, cart: state.cart};

        case 'cartReduce': 

            product = state.product.find(e => e.name === action.payload);
            product.stock += 1;

            cart = state.cart.find(e => e.name === action.payload);
            cart.quantity -= 1;
            cart.total = Math.round((cart.quantity * cart.price + Number.EPSILON) * 100) / 100;

            if (cart.quantity === 0) {
                state.cart = state.cart.filter(e => e.name !== action.payload);
            }
            return {...state, product: state.product, cart: state.cart} 

        case 'cartRemove':
            
            product = state.product.find(e => e.name === action.payload);
            product.stock += state.cart.find(e => e.name === action.payload).quantity;

            state.cart = state.cart.filter(e => e.name !== action.payload);
            return {...state, cart: state.cart}

        case 'cartRemoveAll':
            for(let value of state.cart) {
                let product = state.product.find(e => e.name === value.name);
                product.stock += value.quantity;
            };

            return {...state, product: state.product, cart: []}

        case 'order':
            return {product: state.product, cart: [], order: [...state.order, action.payload]}

        default:
            return {...state, product: state.product, order: state.order, cart: state.cart};
    }
}

export default reducerStore;