/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'ripbxzxpvscuqgdjpkix.supabase.co'
      },
      {
        hostname: 'i.pinimg.com'
      },
      {
        hostname: 'lh3.googleusercontent.com'
      }
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      addAttributesToSVGElement: {
                        params: {
                          attributes: [{ preserveAspectRatio: 'xMidYMid meet' }]
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    });
    return config;
  }
};

export default nextConfig;
