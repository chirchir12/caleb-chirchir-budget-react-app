import React from 'react'
import './expenselist.css'

export default function ExpenseItem(props) {
    const {title, value} = props.item
    return (
        <li className="expense-item"> {title}- {value} </li>
    )
}
