import React from 'react'
import './expenseincome.css'

import IncomeList from './IncomeList/IncomeList'
import ExpenseList from './ExpenseList/ExpenseList'

export default function ExpenseIncome() {
    return (
        <div className="income-expense-list-container">
            <div className="income-list">
                <IncomeList />
            </div>
            <div className="expense-list">
                <ExpenseList />
            </div>

            
        </div>
    )
}
