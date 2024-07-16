import connectDB from "@/config/DbConfig";
import Property from "@/models/Property";

//GET /api/properties/:id
export async function GET(request, { params }) {
  try {
    await connectDB();
    const property = await Property.findById(params.id);
    if (!property) return new Response("Property not found", { status: 404 });
    return new Response(JSON.stringify(property), { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
