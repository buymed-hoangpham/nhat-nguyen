/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import { useEffect, useState } from 'react'

export function useClientMediaQuery(query: any) {
    const [matches, setMatches] = useState<boolean | null>(null)

    useEffect(() => {
        const mediaQueryList = window.matchMedia(query)

        const handleMatchChange = (e: any) => {
            setMatches(e.matches)
        }

        mediaQueryList.addEventListener('change', handleMatchChange)
        setMatches(mediaQueryList.matches)

        return () => {
            mediaQueryList.removeEventListener('change', handleMatchChange)
        }
    }, [query])

    return matches
}

