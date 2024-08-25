// to opt-out of caching GET method
// by default GET route handlers are cached
export const dynamic = "force-dynamic";

export async function GET() {
  return Response.json({
    time: new Date().toLocaleTimeString(),
  });
}
