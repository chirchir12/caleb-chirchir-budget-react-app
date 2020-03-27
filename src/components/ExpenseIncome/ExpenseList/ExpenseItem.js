import React, {useContext} from 'react'
import './expenselist.css'
import { BudgetContext } from '../../../context/BudgetContext'

export default function ExpenseItem(props) {
    const {title, value, id} = props.item

    const {deleteExpense} = useContext(BudgetContext)
    return (
        <li className="expense-item"> {title}- {value} <button onClick={()=>deleteExpense(id)}>x</button> </li>
    )
}
