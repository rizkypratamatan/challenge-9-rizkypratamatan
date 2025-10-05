import type {NextConfig} from "next";


const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'www.mobiledokan.com',
                pathname: '/**',
            },
            {
                protocol: 'http',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'static-ecapac.acer.com',
                pathname: '/**',
            }
        ],
    },
};

export default nextConfig;
