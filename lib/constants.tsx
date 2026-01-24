export const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL!;

export const buildHotelImages = (folder: string, count: number) =>
  Array.from({ length: count }, (_, i) => `${S3_BASE_URL}/${folder}/${i + 1}.jpg`);
