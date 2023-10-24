export async function fetchProducts() {
  try {
    const response = await fetch(
      `https://run.mocky.io/v3/b54fe93f-f5a1-426b-a76c-e43d246901fd`,
      {
        next: {
          revalidate: 60,
        },
      }
    );

    if (response.ok) {
      const jsonData = await response.json();
      return jsonData.products;
    } else {
      console.error("Failed to fetch data");
    }
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
}
