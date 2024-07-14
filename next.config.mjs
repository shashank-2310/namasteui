/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: "avatars.githubusercontent.com",
                port: '',
                pathname: '/**',
            }
        ],
    },
    async redirects() {
        return [
            {
                source: '/docs/components',
                destination: '/docs/components/accordion',
                permanent: true,
            }
        ]
    },
};

export default nextConfig;
