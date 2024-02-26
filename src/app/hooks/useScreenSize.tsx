import { useEffect, useState } from "react";

const useScreenSize = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 641 ? true : false)

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth < 641) setIsMobile(true)
            else setIsMobile(false)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return isMobile
}

export default useScreenSize;