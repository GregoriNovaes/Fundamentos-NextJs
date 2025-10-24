'use client'
import { useEffect } from "react"

export const ErrorComponent = () => {
  useEffect(() => {
    throw new Error('Component lançando um erro');
  }, [])

  return <h2>ErrorComponent</h2>
}