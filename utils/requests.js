//fetch all properties
const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || nulll;
async function fetchProperties() {
  try {
    // handle if no domain available yet
    if (!apiDomain) return [];

    const res = await fetch(`${apiDomain}/properties`);
    if (!res.ok) throw new Error("Failed to fetch properties");
    return res.json();
  } catch (error) {
    console.log(error);
    return [];
  }
}

//fetch a single property

async function fetchProperty(id) {
  try {
    if (!apiDomain) return null;

    const res = await fetch(`${apiDomain}/properties/${id}`);
    if (!res.ok) throw new Error(`Failed to fetch property with id ${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
    return null;
  }
}

export { fetchProperties, fetchProperty };
