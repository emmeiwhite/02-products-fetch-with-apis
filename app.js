const url = 'https://www.course-api.com/javascript-store-products'

const resultDIV = document.querySelector('.products-center')

const fetchProducts = async () => {
  // AJAX section where data is to be loaded from an external API will have 3 states and only one state will be rendered within this piece of UI at a time based on the fetched data's outcome

  /** 1. Loading ... */
  resultDIV.innerHTML = `<div class="loading"></div>`

  const response = await fetch(url)

  /** 2. Success data fetching ...*/
  try {
    if (!response.ok) {
      throw new Error("Couldn't fetch the data!")
    }
    const data = await response.json()

    return data

    // resultDIV.insertAdjacentHTML('beforeend', productsUI)
  } catch (error) {
    /** 3. Error State ...*/
    console.log(error)
    resultDIV.innerHTML = `<p class="error">${error}</p>`
  }
}

// Function to display products
const displayProducts = list => {
  const productsUI = list
    .map(product => {
      const {
        fields: { company, colors, price, name, image },
        id
      } = product

      console.log(company, colors, price, name, url, image[0])
      const imgURL = image[0].url

      return ` 
          <a
            href="product.html?id=${id}"
            class="single-product"
          >
            <img
              src="${imgURL}"
              alt="sofa"
              class="img single-product-img"
            />

            <footer>
              <h5 class="name">${name}</h5>
              <span class="price">$ ${price}</span>
            </footer>
          </a>
`
    })
    .join('')

  resultDIV.innerHTML = `<div class="products-container">
        ${productsUI}
    </div>`
}

/** Let's use this setup in our application, start with a start() function */
const start = async () => {
  const data = await fetchProducts()
  console.log(data)
  displayProducts(data)
}

/** --- Everything starts from the start() function  --- */
start()
