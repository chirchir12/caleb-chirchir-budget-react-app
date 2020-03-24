import React from 'react'

import './expenselist.css'
import ExpenseItem from './ExpenseItem'

export default function ExpenseList() {
    return (
        <div className="expense-list-container">
            <h2>Expense</h2>
            <ul>
                <ExpenseItem />
            </ul>
            
        </div>
    )
}
