const bagproducts = JSON.parse(localStorage.getItem("cartProducts"));

const emptybag = document.getElementById("ifempty");

if (!bagproducts || bagproducts.length == 0) {
    emptybag.innerHTML = `<div>
    <h2>Your bag is empty</h2>
    <p>Items remain in your bag for 60 minutes, and then they’re moved to your Saved Items.</p>
    <div class = "continuebtn">
      <h3>CONTINUE SHOPPING</h3>
    </div>
  </div>`
    
    const continuebtn = document.querySelector(".continuebtn");
    continuebtn.onclick = () => {
        window.location.href = "../product.html";
    }
    const maindiv = document.getElementById("maindiv");
    maindiv.innerHTML = "";
}
else {
    let total = 0;
    bagproducts.map((elem) => {
        total += parseInt(elem.price);
    })
    
    let offTotal = 0;
    bagproducts.map((elem) => {
        offTotal += parseInt(elem.offPrice) 
    })
    console.log('total:', total)
    console.log('offTotal:', offTotal)
    
    const itemslength = document.querySelector("#itemslength");
    itemslength.textContent = `MY BAG ${bagproducts.length}`;

    const subtotal = document.getElementById("subtotal");
    subtotal.innerHTML = `SUB TOTAL <span>£${total}.00</span>`;

    const subtotaldiv = document.getElementById("subtotaldiv");
    subtotaldiv.innerHTML = `<p id="subtotal">SUB TOTAL - &nbsp; £${total}.00</p>`

    const productdispdiv = document.querySelector("#productdisplay");
    window.onload = () => {
        bagproducts.forEach((elem) => {
            let prodcontent = 
            `<div id = "seconddiv">
                <div id="imagediv">
                    <img src="${elem.image}" alt="" />
                </div>

                <div id="detailsdiv">
                    <h4>£${elem.price} &nbsp; <span>£${elem.offPrice}</span></h4>
                    <p>${elem.description}</p>

                    <div id="sort">
                        <p>COLOR : ${elem.color}</p>
                        <select id="selectsize">
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                        </select>

                        <select id="selectqty">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <button id="remBtn">Remove Item</button>
                </div>
            </div>`;
            
            let singleitemdiv = document.createElement("div");
            singleitemdiv.innerHTML = prodcontent;

            productdispdiv.insertAdjacentElement("beforeend", singleitemdiv);

            let btn = document.querySelectorAll("#remBtn");
            btn.forEach((start, elem) => {
                start.onclick = () => {
                    bagproducts.splice(elem, 1);
                    localStorage.setItem("cartProducts", JSON.stringify(bagproducts));

                    window.location.reload();
                }
            })
        })
    }
}


const checkoutbtn = document.getElementById("checkout");
checkoutbtn.onclick = () => {
    window.location.href = "../checkout.html"
}