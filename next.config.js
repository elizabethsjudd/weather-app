/* eslint-disable tsdoc/syntax */
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	async rewrites() {
		return [
		  	{
				source: '/api/geocoder/:path*',
				destination: 'https://geocoding.geo.census.gov/geocoder/:path*'
		  	}
		]
	}
};

module.exports = nextConfig;
