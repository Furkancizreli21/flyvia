export async function getCities() {
  const res = await fetch("https://countriesnow.space/api/v0.1/countries");

  if (!res.ok) {
    throw new Error("Failed to fetch cities");
  }

  const json = await res.json();

  return json.data.flatMap((item: { country: string; cities: string[] }) => item.cities);
}
