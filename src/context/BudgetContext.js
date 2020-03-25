import React, {createContext, useState, useEffect} from 'react'
import  uuid from 'uuid/v4';


export const BudgetContext = createContext()

export default function BudgetContextProvider(props) {
    const [income, setincome] = useState([])
    const [expense, setexpense] = useState([])
    const [total, settotal] = useState(0)
    const [totaIncome, settotalIncome] = useState(0)
    const [totaExpense, settotalExpense] = useState(0)

    const addIncome = (title, value) => {
        setincome([...income, {title, value, id:uuid()}])


    }
    const addExpense = (title, value) => {
        setexpense([...expense, {title, value, id:uuid()}])

    }
    const deleteIncome = (id) => {
        setincome(income.filter(item => item.id !==id))

    }
    const deleteExpense = (id) => {
        setexpense(income.filter(item => item.id !==id))

    }
    // useEffect((prev)=> {
    //     settotalIncome()
    // })

   
  

    return (
        <BudgetContext.Provider value={{income, totaExpense, totaIncome, expense, total,addExpense, deleteExpense,addIncome, deleteIncome}}>

            {props.children}
        </BudgetContext.Provider>
    )
}
