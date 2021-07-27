import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useState,useEffect} from 'react'
import { NextSeo } from 'next-seo';
// import Head from './../node_modules/next/head'


 const Home=()=> {

const [img,setImage]=useState("")
  
const [text,setText]=useState("")
  
    useEffect(()=>{
async function fetchData(){
const response=await fetch('https://testingapi.smartdiner.co/before_login/restaurant/get_full_details')
const data=await response.json()

// console.log(data.restaurant.logo)
// console.log(data.restaurant.name)

setImage(data.restaurant.logo)
setText(data.restaurant.name)
}
fetchData()
    },[])
  



  return(
<div>


        <Head>
          <link rel="shortcut icon" href={img} />
          <title>{text}</title>
        </Head>
</div>
    )
}



export default Home;