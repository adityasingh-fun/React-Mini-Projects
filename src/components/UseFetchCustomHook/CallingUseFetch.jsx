import React from 'react'
import useFetchHook from './useFetchHook'

const CallingUseFetch = ({url}) => {
    const functionCalled = useFetchHook(url);
    console.log(functionCalled);
    const {data,loading,errorMessage} = functionCalled;

    if(loading) return <div>Loading Data! Please wait</div>
    if(errorMessage) return <div>{errorMessage}</div>
  return (
    <div>
      {
        data && data.length ? 
        data.map((item,index) =>{
            return <div key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <p>{item.title} </p>
            </div>
        })
        : null
      }
    </div>
  )
}

export default CallingUseFetch
