/*********************************************************************************
*  WEB422 – Assignment 3
*  I declare that this assignment is my own work in accordance with Seneca Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Smitkumar Patel Student ID: 157308214 Date: 10/02/2022
*
*
********************************************************************************/ 

import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Layout from '../components/Layout'
import { SWRConfig } from 'swr'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <SWRConfig value={{ fetcher: (...args) => fetch(...args).then((res) => res.json()) }}>
        <Component {...pageProps} />
      </SWRConfig>
    </Layout> 
  );
}

export default MyApp
