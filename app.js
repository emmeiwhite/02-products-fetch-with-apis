const url = 'https://www.course-api.com/javascript-store-productsss'

const resultDIV = document.querySelector('.products-center')

const fetchProducts = async () => {
  // AJAX section where data is to be loaded from an external API will have 3 states and only one state will be rendered within this piece of UI at a time based on the fetched data's outcome

  /** 1. Loading ... */
  resultDIV.textContent = 'Loading ...'

  const response = await fetch(url)
  try {
    if (!response.ok) {
      throw new Error("Error: Couldn't fetch the data!")
    }
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.log(error)
    resultDIV.textContent = error
  }
}

/** --- A) Call the function  --- */
fetchProducts()
