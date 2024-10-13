const productDiv = document.querySelector('.product')

function getURLParams() {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  return id
}

async function fetchProduct(id) {
  /** 1. Loading ... */
  productDiv.innerHTML = `<div class="loading"></div>`
  try {
    const response = await fetch(
      `https://www.course-api.com/javascript-store-single-product?id=${id}`
    )

    if (!response.ok) {
      throw new Error("Couldn't fetch the Product")
    }

    const data = await response.json()

    return data
  } catch (error) {
    resultDIV.innerHTML = `<p class="error">${error}</p>`
  }
}

const renderProduct = product => {
  console.log(product)
  const {
    fields: { company, colors, price, name: title, image, description }
  } = product

  console.log(company, price, colors, title, image)
  const img = image[0].url

  const colorsDOM = colors
    .map(color => {
      return `<span class="product-color" style="background-color:${color}"></span>`
    })
    .join('')

  document.title = title.toUpperCase()

  const productUI = `
      <div class="product-wrapper">
        <img
          src="${img}"
          alt="${title}"
          class="img"
        />

        <div class="product-info">
          <h3>${title}</h3>
          <h5>${company}</h5>
          <span>$9.99</span>
          <div class="colors">
             ${colorsDOM}
          </div>
          <p>
         ${description}
          </p>
          <button class="btn">Add to Cart</button>
        </div>
      </div>
    `

  productDiv.innerHTML = productUI
}

// fetchProduct()

async function startCode() {
  const id = getURLParams()
  // Starting from here!
  const product = await fetchProduct(id)
  renderProduct(product)
}

startCode()
