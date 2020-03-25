import React, {useContext} from 'react'


import './totalincome.css'
import { BudgetContext } from '../../../context/BudgetContext'

export default function TotalIncome() {
    const {total} = useContext(BudgetContext)
    return (
        <div className="total-budget">
            <span>{total}</span>
        </div>
    )
}
