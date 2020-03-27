import React, {createContext, useState, useEffect} from 'react'
import  uuid from 'uuid/v4';


export const BudgetContext = createContext()

export default function BudgetContextProvider(props) {
    const [income, setincome] = useState([])
    const [expense, setexpense] = useState([])
    const [total, settotal] = useState(0)
    const [totalIncome, settotalIncome] = useState(0)
    const [totalExpense, settotalExpense] = useState(0)

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

    
       function totalIncomeValue(value) {
        settotalIncome(totalIncome + value)
       }
      

       function totalExpenseValue(value) {
        settotalExpense(totalExpense + value)
       }
    
      function availableIncome(income,expense) {
          settotal((total+income)-expense)
      }
   
  

    return (
        <BudgetContext.Provider value={
            {income, totalExpense, totalIncome, expense, total,addExpense, deleteExpense,addIncome, deleteIncome,totalIncomeValue,totalExpenseValue,availableIncome}}>

            {props.children}
        </BudgetContext.Provider>
    )
}
