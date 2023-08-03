function cartAdd(name) {
    return {type: 'cartAdd', payload: name}
}

function cartReduce(name) {
    return {type: 'cartReduce', payload: name}
}

function cartRemove(name) {
    return {type: 'cartRemove', payload: name}
}

function cartRemoveAll() {
    return {type: 'cartRemoveAll'}
}

function order(data) {
    return {type: 'order', payload: data}
}

export default {
    cartAdd: cartAdd,
    cartReduce: cartReduce,
    cartRemove: cartRemove,
    cartRemoveAll: cartRemoveAll,
    order: order,
}