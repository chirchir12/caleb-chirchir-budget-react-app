import React, {useContext} from 'react'
import './income.css'
import { BudgetContext } from '../../../context/BudgetContext'

export default function Income() {
    const {totalIncome} = useContext(BudgetContext)
    

    return (
        <div className="income">
            <span>Total Income</span>
            <span>+ {totalIncome} </span>
            
        </div>
    )
}
