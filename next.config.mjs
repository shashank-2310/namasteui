/** @type {import('next').NextConfig} */
const nextConfig = {
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
