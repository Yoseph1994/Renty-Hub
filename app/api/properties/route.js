import connectDB from "@/config/DbConfig";
import Property from "@/models/Property";

//GET /api/properties
export async function GET(request) {
  try {
    await connectDB();
    const properties = await Property.find({});
    return new Response(JSON.stringify(properties), {
      status: 200,
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
