const $menues = d.querySelector(".menues");
const $cart = d.getElementById("cart");
const $countProducts = d.getElementById("count-products");
let btnToBuy;
d.addEventListener("DOMContentLoaded", (e)=>{
    fetch("./data.json")
    .then(response => response.json())
    .then(data => renderizarProductos(data));

    
    function renderizarProductos(data){
        data.forEach( (product)=>{
            
            const $picture = d.createElement("picture");
            const $img = d.createElement("img");
            const $button = d.createElement("button");
            const $buttonSelected = d.createElement("button");
            const $p = d.createElement("p");
            const $h3 = d.createElement("h3");
            const $h4 = d.createElement("h4");
            $img.setAttribute("src",`${product.image.desktop}`);
            $img.setAttribute("alt", `${product.name}`)
            $picture.appendChild($img);
            $button.innerHTML = `<img id="logo" src="./assets/icon-add-to-cart.svg" alt="Carrito"> Add to Cart`;
            $buttonSelected.innerHTML = `<img class="logo" src="./assets/icon-decrement-quantity.svg" alt="Signo de menos">
                                        <span id="products-quantity">1</span>
                                        <img class="logo" src="./assets/icon-increment-quantity.svg" alt="Signo de más">`
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
        });
        btnToBuy = d.querySelectorAll("button.flex-row")
        console.log(btnToBuy)
        if (btnToBuy.length > 0) {
            btnToBuy.forEach((btn) => {
                btn.addEventListener("click", (e) => {
                    // Aquí obtienes el producto del botón clickeado
                    const productElement = e.target.closest("picture"); // Obtener el contenedor padre (producto)
                    const productName = productElement.querySelector("h3").innerText;
                    const productPrice = productElement.querySelector("h4").innerText;
                    const productImage = productElement.querySelector("img").src;

                    console.log("Producto seleccionado:", productName, productPrice, productImage);
                    // Puedes agregar la lógica para añadir el producto al carrito aquí
                });
            });
        }
    }
    if($countProducts.innerHTML.slice(10,11)== '0'){
        const img = d.createElement("img");
        img.setAttribute("src", "./assets/illustration-empty-cart.svg");
        img.setAttribute("alt", "Sin articulos en tu carrito");
        $cart.appendChild(img);
    }
})
