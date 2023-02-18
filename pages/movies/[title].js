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

import {useRouter} from 'next/router'
import useSWR from 'swr'
import Error from 'next/error'
import MovieDetails from '../../components/MovieDetails'
import PageHeader from '../../components/PageHeader'

export default function MovieTitle() {
    const router = useRouter();
    const { title } = router.query;

    const { data, error } = useSWR(`https://different-wasp-cuff-links.cyclic.app/api/movies?page=1&perPage=10&title=${title}`);

    if(data == null || data == undefined){
      return null
    }
    else{
      if(data.length <= 0){
        return (<><Error statusCode={404} /></>)
      }
      else{
        return(
        <>
          {data.map(item => (
            <div key={item._id}>
              <PageHeader text={item.title} />
              <MovieDetails movie={item} />
            </div>
          ))}
        </>
        )
      }
    }
    
   
    
  }