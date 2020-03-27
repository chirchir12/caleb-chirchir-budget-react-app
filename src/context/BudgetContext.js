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
        console.log(expense)
        console.log(totalExpense)
        setexpense(expense.filter(item => item.id !==id))

    }


    
    //    function totalIncomeValue(value) {
    //     settotalIncome(totalIncome + value)
    //    }

    useEffect(()=>{
        if(income.length>0) {
            settotalIncome(income.map(item=>item.value).reduce((total, cur)=>total+cur))
        }

    }, [income])

    useEffect(()=> {
        if(expense.length>0) {
            settotalExpense(expense.map(item=>item.value).reduce((total, cur)=>total+cur))
        }

    }, [expense])

    useEffect(()=>{
        if(totalIncome>0 ||totalExpense>0 ) {
            settotal(totalIncome-totalExpense)
        }
    }, [totalIncome, totalExpense])
      


    
      
   
  

    return (
        <BudgetContext.Provider value={
            {income, totalExpense, totalIncome, expense, total,addExpense, deleteExpense,addIncome, deleteIncome}}>

            {props.children}
        </BudgetContext.Provider>
    )
}
