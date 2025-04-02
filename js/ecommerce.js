const $menues = d.querySelector(".menues");
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
            const $p = d.createElement("p");
            const $h3 = d.createElement("h3");
            const $h4 = d.createElement("h4");
            $img.setAttribute("src",`${product.image.desktop}`)
            $picture.appendChild($img);
            $button.innerHTML = `Add to Cart`;
            $p.innerHTML = `${product.category}`;
            $h3.innerHTML = `${product.name}`;
            $h4.innerHTML = `$${product.price.toFixed(2)}`;
            $picture.appendChild($button);
            $picture.appendChild($p);
            $picture.appendChild($h3);
            $picture.appendChild($h4);
            $menues.appendChild($picture)
        })
        //$menues.appendChild($picture)
    }
})