/* eslint-disable tsdoc/syntax */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
			{
				destination: "https://geocoding.geo.census.gov/geocoder/:path*",
				source: "/api/geocoder/:path*",
			},
		];
	},
};

module.exports = nextConfig;
