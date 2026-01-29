/** @type {import('next').NextConfig} */
const nextConfig = {
  // SEO: Generar HTML estático para mejor indexación en Google
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Necesario para export estático
  },
  // SEO: URLs con trailing slash para mejor SEO
  trailingSlash: true,
}

export default nextConfig
