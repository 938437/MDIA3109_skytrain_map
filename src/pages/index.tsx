import dynamic from "next/dynamic"
import Head from 'next/head'

const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});

//REASON using dynamic is because map will render in client side

export default function Home() {
  return (
    <div>
      <Head>
        <link rel="icon" href="/images/logo.png" />
        <title>SkyTrain map with Leaflet</title>
      </Head>
      <DynamicMap/>
    </div>
  )
}