import {createContext ,useContext, useState} from "react"

type ContextProps = {
  open : boolean,
  handleMenuToggle : () => void
  closeMenu : () => void
}

const ContextAPI = createContext<ContextProps | undefined>(undefined)

type Props = {
  children : React.ReactNode
}

export const ContextProvider = ({children} : Props) => {
  const [open, setOpen] = useState(false)

  const handleMenuToggle = () => {
    setOpen((prev) => !prev)
  }

  const closeMenu = () => {
     setOpen(false)
  }

  return (
    <ContextAPI.Provider value={{open, handleMenuToggle, closeMenu}}>
      {children}
    </ContextAPI.Provider>
  )
}

export const useContextAPI = () => {
  const context = useContext(ContextAPI)
  if(!context) throw new Error("Not able to use Context")
  return context
}
