async function getDataIndexApi() {
    try {
        let response = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET',
            responseType: 'json'
        });
        console.log(response.data);
        renderProduct(response.data.content);
    } catch (err) {
        console.log(err);
    }
}

window.renderProduct =function(arr) {
    let htmlString = '';
    for (let product of arr) {
        console.log(product);
        htmlString += `
        <div class="col-4">
                    <div class="card item-1">
                        <img src=${product.image} alt="product1">
                        <div class="card-body">
                            <div class="name-price">
                                <h1 class="name">${product.name}</h1>
                                <h2 class="desc">${product.
                shortDescription
            }</h2>
                                <div class="buy-money">
                                    <a href="./detail.html?productid=1" class="buy-now">
                                        Buy now
                                    </a>
                                    
                                    <div class="money">${product.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        `;
    }
    document.querySelector('#render').innerHTML = htmlString;
    return htmlString
}

window.onload = function (e) {
    getDataIndexApi();
}


