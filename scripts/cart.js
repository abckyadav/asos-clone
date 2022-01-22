const cart_product = (data) => {
    return `<div id="content">
    <div id="imagediv">
      <img
        src= ${data.image}
        alt=""
      />
    </div>
    <div id="detailsdiv">
      <div id="textdetails">
        <p>
          ${data.description}
        </p>

        <p>Was £${data.price} <span id="disprice"> &nbsp; Now  £${data.offPrice}</span> (-${data.discount})</p>

        <p class="text">COLOUR: <span>${data.color}</span></p>
        

        <button id="btn">ADD TO BAG</button>
      </div>

      <div id="free">
        <img src="./images/free delhivery.jpg" alt="" />
      </div>
    </div>
  </div>`
}
export default cart_product;