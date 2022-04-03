import { useLayoutEffect, useState } from 'react'

/*  Listens to screen resize and returns updated Height and Width */
export const useWindowSize = () => {
  const [size, setSize] = useState([0, 0])
  useLayoutEffect(() => {
    const updateSize = () => {
      setSize([window.innerWidth, innerHeight])
    }
    window.addEventListener('resize', updateSize)
    updateSize()
    return () => removeEventListener('resize', updateSize)
  }, [])
  return size
}
