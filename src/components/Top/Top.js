import React, {useContext} from 'react'
import './Top.css'
import BudgetDate from './Date/BudgetDate'
import TotalIncome from './TotalIncome/TotalIncome'
import Income from './Income/Income'
import Expense from './Expense/Expense'

export default function Top() {
    
    return (
        <div className="top">
            <BudgetDate />
            <TotalIncome />
            <div className="income-expense-container">
                <Income />
                <Expense />

            </div>

            
        </div>
    )
}
