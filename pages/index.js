import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState,useEffect} from 'react'

 const Home=({results})=> {

  return(
<div>
         
          <Head>
          <link rel="shortcut icon" href={results.restaurant.logo} />
          <title>{results.restaurant.name}</title>
        </Head>
        
</div>
    )
}

export async function getServerSideProps(context){
 const options={ headers: { Origin: 'http://localhost:3000' } }
  const res=await fetch(`https://testingapi.smartdiner.co/before_login/restaurant/get_full_details`,options)
  const json=await res.json()
  return{
    props:{
      results:json
    },
  }
}



export default Home;
