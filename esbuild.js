const {build} = require('esbuild')

build({
  entryPoints: ['./src/entryPoint.ts'],
  outdir: './docs',
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
