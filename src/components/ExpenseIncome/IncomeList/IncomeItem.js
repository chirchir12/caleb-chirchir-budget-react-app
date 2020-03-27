import React, {useContext} from 'react'
import { BudgetContext } from '../../../context/BudgetContext'

export default function IncomeItem(props) {
    const {title, value, id} = props.item
    const {deleteIncome} = useContext(BudgetContext)

    return (
    <li className="income-item">{title}-{value} <button onClick={()=>deleteIncome(id)}>x</button></li>
    )
}
