import React from 'react'
import resume from '../../assets/PradeepBinwal.jpg'
import './resume.css'
import { HelmetProvider,Helmet } from 'react-helmet-async'
import {meta } from "../../content_option";

export const Resume = () => {
  return (
    <HelmetProvider>
    <div className='resume'>
      <Helmet>
          <meta charSet="utf-8" />
          <title> Resume | {meta.title}</title>
          <meta name="description" content={meta.description} />
      </Helmet>
      <img src={resume}  alt="Resume" width="50%" height="50%"/>
    </div>
    </HelmetProvider>
  )
}
