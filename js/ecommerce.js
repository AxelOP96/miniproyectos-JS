const $menues = d.querySelector(".menues");
const $cart = d.getElementById("cart");
const $countProducts = d.getElementById("count-products");
d.addEventListener("DOMContentLoaded", (e)=>{
    fetch("./data.json")
    .then(response => response.json())
    .then(data => renderizarProductos(data));

    function renderizarProductos(data){
        data.forEach( (product)=>{
            console.log(product);
            const $picture = d.createElement("picture");
            const $img = d.createElement("img");
            const $button = d.createElement("button");
            const $buttonSelected = d.createElement("button");
            const $p = d.createElement("p");
            const $h3 = d.createElement("h3");
            const $h4 = d.createElement("h4");
            $img.setAttribute("src",`${product.image.desktop}`)
            $picture.appendChild($img);
            $button.innerHTML = `<img id="logo" src="./assets/icon-add-to-cart.svg"> Add to Cart`;
            $buttonSelected.innerHTML = `<img class="logo" src="./assets/icon-decrement-quantity.svg">
                                        <span id="products-quantity">1</span>
                                        <img class="logo" src="./assets/icon-increment-quantity.svg">`
            $button.classList.add("flex-row")
            $buttonSelected.classList.add("none", "selected");
            $p.innerHTML = `${product.category}`;
            $h3.innerHTML = `${product.name}`;
            $h4.innerHTML = `$${product.price.toFixed(2)}`;
            $picture.appendChild($button);
            $picture.appendChild($buttonSelected);
            $picture.appendChild($p);
            $picture.appendChild($h3);
            $picture.appendChild($h4);
            $menues.appendChild($picture)
        })
        //$menues.appendChild($picture)
    }
    console.log("cantidad");
    console.log($countProducts.innerHTML.slice(10,11))
    if($countProducts.innerHTML.slice(10,11)== '0'){
        const img = d.createElement("img");
        img.setAttribute("src", "./assets/illustration-empty-cart.svg")
        $cart.appendChild(img);
    }
})