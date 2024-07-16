import connectDB from "@/config/DbConfig";

export async function GET(request) {
  try {
    return new Response(JSON.stringify({ message: "Hello there" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
