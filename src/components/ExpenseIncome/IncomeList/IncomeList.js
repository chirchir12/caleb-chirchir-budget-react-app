import React, {useContext} from 'react'
import './Incomelist.css'
import IncomeItem from './IncomeItem'
import { BudgetContext } from '../../../context/BudgetContext'

export default function IncomeList() {
    const {income} = useContext(BudgetContext)
    return (
        <div className="income-list-container">
            <h2>Income</h2>
            <ul>
                {income.map(item=> {
                    return (
                        <IncomeItem key={item.id} item={item} />
                    )
                })}
           
            </ul>
            
        </div>
    )
}
