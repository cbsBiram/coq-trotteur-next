import React from 'react'

import Loading from '../components/Shared/Loading'

const Page = ({ children }) => {
//   if (loading) return <Loading />
    // if (errors) return <h2>Error</h2>
    
  return (
    <>
      <main>
        <div class="container-fluid py-5" style={{backgroundColor: "#F5F6FA"}}>
          <div class="container">{children}</div>
        </div>
      </main>
    </>
  )
}

export default Page
