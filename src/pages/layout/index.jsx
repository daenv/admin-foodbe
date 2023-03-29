import React, { useState } from 'react'
import { useMediaQuery, Box } from '@mui/material'

const Layout = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)")
  const { isSidebarOpen, setIsSidebarOpen } = useState(true)
  
  return (
    <Box display={isNonMobile ? 'flex': 'block'} width='100%' height='100%'>
      
    </Box>
  )

}

export default Layout