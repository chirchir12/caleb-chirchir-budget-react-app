import React, {useContext} from 'react'
import { BudgetContext } from '../../../context/BudgetContext'
import './expenselist.css'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList() {

    const {expense} = useContext(BudgetContext)
    return (
        <div className="expense-list-container">
            <h2>Expense</h2>
            <ul>
            {expense.map(item=> {
                return (
                    <ExpenseItem key={item.id} item={item} />
                )
            })}
            </ul>
            
        </div>
    )
}
