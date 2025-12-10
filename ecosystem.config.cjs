module.exports = {
  apps: [
    {
      name: 'gmt-support',
      port: 3000,
      exec_mode: 'cluster',
      instances: 'max',
      script: './.output/server/index.mjs',
    },
  ],
}
