import { useCallback } from 'react'

export function useScrollTo(): (sectionId: string) => void {
  return useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }, [])
}
