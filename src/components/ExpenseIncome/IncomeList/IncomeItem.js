import React from 'react'

export default function IncomeItem(props) {
    const {title, value} = props.item
    return (
    <li className="income-item">{title}-{value}</li>
    )
}
