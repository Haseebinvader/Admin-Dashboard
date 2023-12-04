/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
export const PublicRoute = ({ children }) => {
  const navigate = useNavigate()
  const [isLoaded, setIsLoaded] = useState(false)
  const isAuthenticated = useSelector(
    (state) => state?.loginadmin?.isAuthorized
  )

  useEffect(() => {
    if (isAuthenticated) {
      setTimeout(() => {
        navigate("/")
      }, 1000)

      return
    }
    setIsLoaded(true)
  }, [isAuthenticated])

  return isLoaded ? children : null
}
