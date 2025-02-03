import React from 'react'

type ProgrammesGridPropsType = {
  images: string[];
}

const ProgrammesGrid:React.FC<ProgrammesGridPropsType> = ({images}) => {
  return (
    <div className='m-6 p-8' >{
      images.map((image) => (
        <img
          src={image}
          alt={"program"}
          className="rounded-2xl m-3 w-full"
        />
      )
      )
    }</div>
  )
}

export default ProgrammesGrid