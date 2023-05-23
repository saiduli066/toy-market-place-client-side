import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-GermGear`;
    }, [title]);
}

export default useTitle;