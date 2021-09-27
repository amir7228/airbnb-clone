import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'


export default function Home({exploreData}) {
  return (
    <div className="">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <Banner />
      <main className="max-w-7xl mx-auto">
        <section >
           <h2 className="text-4xl font-semibold my-10 mx-5">Explore NearBy</h2>
         
      
         
        </section>  
      </main>
    </div>
  )
}
