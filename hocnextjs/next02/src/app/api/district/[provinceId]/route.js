import districts from "@/data/quan_huyen.json";
export function GET(req, { params }) {
  const { provinceId } = params;
  const data = Object.values(districts)
    .filter(({ parent_code }) => parent_code === provinceId)
    .sort((a, b) => a.code - b.code);
  if (!data.length) {
    return Response.json(
      {
        status: "error",
        message: "Not Found",
        data: [],
      },
      {
        status: 404,
      },
    );
  }
  return Response.json({
    status: "success",
    data,
  });
}
