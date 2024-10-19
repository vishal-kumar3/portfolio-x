/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.discordapp.com',
			},
			{
				protocol: 'https',
				hostname: 'opengraph.githubassets.com',
			},
			{
				protocol: 'https',
				hostname: 'github.com',
			},
		],
	},
};

export default nextConfig;
