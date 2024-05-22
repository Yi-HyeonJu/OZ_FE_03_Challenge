import { useEffect, useState } from "react"

export const useDebounce = (value, delay) => {
    const [debounceValue, setDecounceValue] = useState(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDecounceValue(value)
        }, delay)

        return () => {
            clearTimeout(handler)
        }
    }, [value, delay])

    return debounceValue
}