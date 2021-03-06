const {build} = require('esbuild')

build({
  entryPoints: ['./src/entryPoint.ts'],
  outdir: './dist',
  bundle: true,
  sourcemap: 'inline',
})
  .then(() => {
    console.log('')
    console.log('----------------- esbuild completed -----------------')
    console.log('')
  })
  .catch(() => {
    process.exit(1)
  })
