/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'www.sisu.co.kr'
            }
        ]
    }
}

module.exports = nextConfig
