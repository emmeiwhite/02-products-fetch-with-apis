const url = 'https://www.course-api.com/javascript-store-products'

const resultDIV = document.querySelector('.products-center')

const fetchProducts = async () => {
  // AJAX section where data is to be loaded from an external API will have 3 states and only one state will be rendered within this piece of UI at a time based on the fetched data's outcome

  /** 1. Loading ... */
  resultDIV.innerHTML = `<div class="loading"></div>`

  const response = await fetch(url)
  try {
    if (!response.ok) {
      throw new Error("Couldn't fetch the data!")
    }
    const data = await response.json()
    console.log(data)
    const productsUI = data.map(product => {
      const {} = product
      return `<div class="products-container">
          <a
            href="product.html"
            class="single-product"
          >
            <img
              src="./couch.jpg"
              alt="sofa"
              class="img single-product-img"
            />

            <footer>
              <h5 class="name">product title</h5>
              <span class="price">$9.99</span>
            </footer>
          </a>
        </div>
`
    })

    resultDIV.textContent = productsUI
  } catch (error) {
    console.log(error)
    resultDIV.innerHTML = `<p class="error">${error}</p>`
  }
}

/** --- A) Call the function  --- */
fetchProducts()
