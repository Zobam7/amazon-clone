import React, { createContext, useContext, useReducer } from 'react'

export const StateContext = createContext()

export const Stateprovider = ({reducer, initalState, children }) =>(
    <StateContext.Provider value = {useReducer(reducer, initalState)}>
        {children}
    </StateContext.Provider>
)

export const useStateValue = () => useContext(StateContext)