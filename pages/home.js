export default function home() {
  // markup mirrors a simplified Flipkart home page layout
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Flipkart Demo Home</title>
  <link rel="stylesheet" href="/css/home.css" />
</head>
<body>
  <header class="header">
    <div class="logo">Flipkart Demo</div>
    <div class="search-bar">
      <input type="text" placeholder="Search for products, brands and more" />
    </div>
    <div class="nav-links">
      <a href="/login">Login</a>
      <a href="#">More</a>
      <a href="#">Cart</a>
    </div>
  </header>
  <nav class="category-bar">
    <a href="#">Electronics</a>
    <a href="#">Fashion</a>
    <a href="#">Home</a>
    <a href="#">Appliances</a>
    <a href="#">Travel</a>
  </nav>
  <section class="carousel">
    <!-- use correct relative path pointing at public/img folder -->
    <img src="public/img/istockphoto-1571277377-612x612.jpg/1200x400?text=Slide+1" alt="Slide 1" />
    <img src="public/img/istockphoto-1571277377-612x612.jpg/1200x400?text=Slide+2" alt="Slide 2" />
    <img src="public/img/istockphoto-1571277377-612x612.jpg/1200x400?text=Slide+3" alt="Slide 3" />
    <div class="carousel-buttons">
      <button id="prevBtn">&#10094;</button>
      <button id="nextBtn">&#10095;</button>
    </div>
  </section>
  <section class="products">
    <div class="product-card">
      <img src="public/img/istockphoto-1571277377-612x612.jpg/200x200?text=Item+1" alt="" />
      <div class="info">
        <strong>Item 1</strong>
        <p>$100</p>
      </div>
    </div>
    <div class="product-card">
      <img src="public/img/istockphoto-1571277377-612x612.jpg/200x200?text=Item+2" alt="" />
      <div class="info">
        <strong>Item 2</strong>
        <p>$200</p>
      </div>
    </div>
    <div class="product-card">
      <img src="public/img/istockphoto-1571277377-612x612.jpg/200x200?text=Item+3" alt="" />
      <div class="info">
        <strong>Item 3</strong>
        <p>$300</p>
      </div>
    </div>
    <div class="product-card">
      <img src="public/img/istockphoto-1571277377-612x612.jpg/200x200?text=Item+4" alt="" />
      <div class="info">
        <strong>Item 4</strong>
        <p>$400</p>
      </div>
    </div>
  </section>
  <script src="/js/home.js" defer></script>
</body>
</html>`;
}
