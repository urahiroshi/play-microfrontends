import Head from 'next/head'

export default () => (
  <>
    <div id="bundleApp"></div>
    <Head>
      <script src="http://localhost:8000/bundle.js"></script>
      <script src="/static/render-bundle-app.js" defer></script>
    </Head>
  </>
)
