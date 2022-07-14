
import React from 'react'

import { useEffect } from 'react';
import { useState } from 'react';

export const Booklist = ({languages, getData}) => {
const [bookData, setBookData] = useState(null);

useEffect(() => {
  const result = getData?.(languages).then((response) => setBookData(response));
}, [languages, getData]);

console.log(bookData)
  return (
    <ul>
    {bookData === null ? (
      <p>now loading...</p>
    ) : (
      bookData.data.items.map((x, index) => (
        <li key={index}>{x.volumeInfo.title}</li>
      ))
    )}
  </ul>
    
  )
}

export default Booklist
