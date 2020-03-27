import React, {useContext} from 'react'
import './expense.css'
import {BudgetContext} from '../../../context/BudgetContext'


export default function Expense() {
    const {totalExpense} = useContext(BudgetContext)
    return (
        <div className="expense">
            <span>Total Expense</span>
            <span>-{totalExpense}</span>

        </div>
    )
}
