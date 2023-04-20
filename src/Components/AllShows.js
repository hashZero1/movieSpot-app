import React from 'react';
import { Link } from 'react-router-dom';
import Modal from './Modal';

export default function AllShows({show}){
    return (
        <>
        <Modal shows= {show}/>
    </>
  )
}