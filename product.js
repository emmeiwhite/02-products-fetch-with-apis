function getURLParams() {
  const urlParams = new URLSearchParams(window.location.search)
  const id = urlParams.get('id')
  return id
}

async function fetchProduct(id) {
  try {
    const response = await fetch(
      `https://www.course-api.com/javascript-store-single-product?id=${id}`
    )

    if (!response.ok) {
      throw new Error("Couldn't fetch the Product")
    }

    const data = await response.json()

    console.log(data)
  } catch (error) {}
}

fetchProduct(getURLParams())
