function makeOrder(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${item} is ready now`);            
        }, 3000);
    });
}
async function Order(item) {
    const order = await makeOrder(item);
    console.log(order);
}
Order("Paratha");
Order("Fried Egg");
Order("Aalu Paratha");
Order("Tea");