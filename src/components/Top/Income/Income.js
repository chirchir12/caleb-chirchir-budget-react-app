import React, {useContext} from 'react'
import './income.css'
import { BudgetContext } from '../../../context/BudgetContext'
export default function Income() {
    const {totaIncome}= useContext(BudgetContext)
    return (
        <div className="income">
            <span>Income</span>
            <span>+ {totaIncome} </span>
            
        </div>
    )
}
