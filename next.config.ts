import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // <--- Agrega esta línea
  images: {
    unoptimized: true, // <--- También agrega esto si usas el componente <Image /> de Next
  },
};

export default nextConfig;
