import { motion } from 'framer-motion'
import { useLayoutEffect } from 'react'

const PageTransition = ({
  children,
  disableEnterAnimation,
}: {
  children: React.ReactNode
  disableEnterAnimation?: boolean
}) => {
  // To restore scroll position
  // useLayoutEffect(() => {
  //   const main = document.querySelector('main')
  //   if (main) {
  //     main.scrollTop = scrollPositions.get(window.location.pathname) ?? 0
  //   }
  // }, [])

  return (
    <motion.div
      initial={{ opacity: disableEnterAnimation ? 1 : 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  )
}

export default PageTransition
