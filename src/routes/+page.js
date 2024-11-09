//to get product list
export async function load({ url }) {
    const page = Number(url.searchParams.get('page')) || 1; //Get the page number from the URL
    const limit = 5; //How many products to show per page
    const skip = (page - 1) * limit; //How many products to skip
  
    const response = await fetch(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`); //fetch the products from the API
    const data = await response.json();
  
    return {
      products: data.products,
      total: data.total,
      page,
      limit
    };
  }
  