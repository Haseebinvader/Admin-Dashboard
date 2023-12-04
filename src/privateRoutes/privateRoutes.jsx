/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
export const PrivateRoute = ({ children }) => {
  const navigate = useNavigate()

  const [isLoaded, setIsLoaded] = useState(false)
  const isAuthenticated = useSelector(
    (state) => state?.loginadmin?.isAuthorized
  )
  console.log(isAuthenticated)

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login")
      return
    }
    setIsLoaded(true)
  }, [isAuthenticated])

  return isLoaded ? children : null
}
