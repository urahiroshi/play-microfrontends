import Head from 'next/head'

export default () => (
  <>
    <my-bundle-app></my-bundle-app>
    <Head>
      <script src="http://localhost:8000/bundle.js" async={false}></script>
      <script src="/static/render-bundle-app.js" async={false}></script>
    </Head>
  </>
)
