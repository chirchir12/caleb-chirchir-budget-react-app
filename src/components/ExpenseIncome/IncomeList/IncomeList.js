import React from 'react'
import './Incomelist.css'
import IncomeItem from './IncomeItem'

export default function IncomeList() {
    return (
        <div className="income-list-container">
            <h2>Income</h2>
            <ul>
            <IncomeItem />
            </ul>
            
        </div>
    )
}
