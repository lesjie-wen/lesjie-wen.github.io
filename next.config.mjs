import createMDX from "@next/mdx";

/** @type {import('next').NextConfig} */

let assetPrefix = `/${repo}/`

// 用于为应用设置基础路径
// 这在将应用部署到子目录下时特别有用，因为它允许您指定应用所在的目录
let basePath = `/${repo}`

const isGithubActions = process.env.GITHUB_ACTIONS || false
if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')
  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  output: 'export',
  assetPrefix: '', //'/lesjie-wen.github.io/',
  basePath: '', //'/lesjie-wen.github.io',
  images: {
    unoptimized: true,
  },
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  webpack: (config, { isServer }) => {
    config.module.rules.push({
      test: /\.bib$/,
      use: "raw-loader",
    });
    return config;
  },
};

const withMDX = createMDX({
  // mdx config
});


const finalConfig = withMDX(nextConfig);


export default () => {
  const env = process.env.NODE_ENV;
  if (env === 'production') {
    return { ...finalConfig, output: 'export' };
  }
  return finalConfig;
};
