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

import Card from 'react-bootstrap/Card';
import Link from 'next/link';
import MovieDetails from '../components/MovieDetails'
import PageHeader from '../components/PageHeader'

export async function getStaticProps() {
  const res = await fetch('https://peach-tadpole-wrap.cyclic.app/api/movies/573a139af29313caabcf0859');
  const data = await res.json();

  return { props: { movie: data } };
}

export default function About(props) {
  return (
   <>
     <PageHeader text="About the Developer: Smitkumar Patel"/>
     <Card>
        <Card.Body>
        I am Smitkumar Patel and I moved to Canada last year. I am currently enrolled in a CPA program at Seneca College and am thoroughly enjoying my courses. One course that stands out to me is WE422, as I am highly interested in the material and eager to learn more. I am determined to succeed in this industry and hope to have the opportunity to use my skills and knowledge to make a positive impact in the future. < br />< br />    

        I am currently enrolled in a course, IPC145, that is providing me with a well-rounded education in various areas of computer science. The course is teaching me the basics of the C programming language, which is a popular and widely used language in the industry. After mastering the basics of C, I will be moving on to Object-Oriented Programming (OOP) using C++, which is an extension of C and is used for developing complex and large scale applications. The course is also covering database management systems using MySQL and software system design, which will give me a deeper understanding of how to design, develop, and manage databases and software systems. With this comprehensive education, I am well on my way to becoming a skilled and knowledgeable software developer.< br />< br />

        It is difficult to choose but <Link href="/movies/Dark City" passHref><a>"Dark City"</a></Link> (released in 1998) is one that I always enjoy watching.
        </Card.Body>
        <MovieDetails movie={props.movie} />
      </Card>
   </>
  )
}
