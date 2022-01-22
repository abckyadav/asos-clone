function navbar (){
    return `<div class="topbar">
    <ul>
      <li><a href="https://marketplace.asos.com/?ctaref=Global%20nav">Marketplace</a></li>
      <li><a href="https://www.asos.com/customer-care/">Help & FAQs</a></li>
      <li class="topbarlogo">
        <img src="./images/india.png" alt="" />
      </li>
    </ul>
  </div>

  <div class="navbar">
    <div class="navbar-left">
      <div>
        <a href="../index.html"><img src="./images/logo.png" alt="" /></a>
      </div>
      <div><a href="../product.html">Women</a></div>
      <div><a href="../product.html">Men</a></div>
    </div>

    <div class="navbar-search">
      <input type="text" placeholder="Search" />
    </div>
    <div class="navbar-icons">
      <div>
        <a href="../signup.html"><img src="./images/2x/person.png" alt="" /></a>
      </div>

      <div>
        <img src="./images/2x/heart.png" alt="" />
      </div>
      <div>
        <a href="../bag.html"><img src="./images/2x/cart.png" alt="" /></a>
      </div>
    </div>
  </div>

  <div class="discount-banner">
    <div>
      <a href="../product.html">Women</a>
      <div>
        <span>
          <strong>
            "GET 50% OFF EVERYTHING!*"
            <br />
            "With code:&nbsp;SAVES"
            <br />
            "OUR JANUARY TREAT FOR YOU..."
          </strong>
        </span>
      </div>
      <a href="../product.html">Men</a>
    </div>
  </div>`
}

function footer(){
  return ` <div class="social">
  <div class="leftsocial">
    <a href="#">
      <img src="./images/fb.png" alt="" />
    </a>

    <a href="#">
      <img src="./images/instagram.png" alt="" />
    </a>

    <a href="#">
      <img src="./images/sc.png" alt="" />
    </a>
  </div>
  <div class="rightsocial">
    <a href="#">
      <img src="./images/visa-png.webp" alt="" />
    </a>

    <a href="#">
      <img src="./images/mastercard-png.webp" alt="" />
    </a>

    <a href="#">
      <img src="./images/pay-pal-png.webp" alt="" />
    </a>

    <a href="#">
      <img src="./images/american-express-png.webp" alt="" />
    </a>

    <a href="#">
      <img src="./images/visa-electron-png.webp" alt="" />
    </a>
  </div>
</div>

<div class="footer">
  <ul>
    <p>HELP & INFORMATION</p>
    <li><a href="#">Help</a></li>
    <li><a href="#">Track order</a></li>
    <li><a href="#">Delhivery & return</a></li>
  </ul>

  <ul>
    <p>ABOUT ASOS</p>
    <li><a href="#">About us</a></li>
    <li><a href="#">Careers at ASOS</a></li>
    <li><a href="#">Corporate Rresponsibility</a></li>
    <li><a href="#">Investors site</a></li>
  </ul>

  <ul>
    <p>MORE FROM ASOS</p>
    <li><a href="#">Mobile and ASOS apps</a></li>
    <li><a href="#">ASOS Marketplace</a></li>
    <li><a href="#">Gift vouchers</a></li>
    <li><a href="#">Black Friday</a></li>
  </ul>

  <ul>
    <p>SHOPPING FROM</p>
    <li class="last">
      You're in
      <div>
        <img src="./images/india.png" alt="India" />
      </div>
      CHANGE
    </li>
  </ul>
</div>
<div id="footer-copyright">
      <div>
        <p>© 2022 ASOS</p>
      </div>
      <div>
        <p>Privacy & Cookies | Ts&Cs | Accessibility</p>
      </div>
    </div>`
}

export {navbar, footer};