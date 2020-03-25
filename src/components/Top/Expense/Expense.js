import React, {useContext} from 'react'
import './expense.css'
import {BudgetContext} from '../../../context/BudgetContext'


export default function Expense() {
    const {totaExpense} = useContext(BudgetContext)
    return (
        <div className="expense">
            <span>Expense</span>
            <span>-{totaExpense}</span>

        </div>
    )
}
