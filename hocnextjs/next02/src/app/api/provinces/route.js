import provinces from "@/data/tinh_tp.json";

export function GET() {
  const data = Object.values(provinces);
  data.sort((a, b) => a.code - b.code);
  return Response.json({
    status: "success",
    data,
  });
}
