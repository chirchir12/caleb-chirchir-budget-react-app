import React, {useState, useContext} from 'react'
import './datainput.css'
import {BudgetContext} from '../../context/BudgetContext'


export default function DataInput() {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [type, setType] = useState('inc')

    const {addExpense, addIncome} = useContext(BudgetContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (type === 'inc') { // function add incom
            addIncome(title, value)
           


        } else { // fncttion add expense
            addExpense(title, value)
        }
        setTitle('')
        setValue('')


    }


    return (
        <div className="data_input-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <select value={type}
                        onChange={
                            (e) => {
                                console.log(e.target.value)
                                setType(e.target.value)}
                    }>
                        <option  value="inc">+</option>
                        <option  value="dec">-</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text"
                        value={title}
                        onChange={
                            (e) => setTitle(e.target.value)
                        }
                        placeholder="Add description"/>
                </div>
                <div className="form-group">
                    <input type="number"
                        value={value}
                        onChange={
                            (e) => setValue(+ e.target.value)
                        }
                        placeholder="value"/>
                </div>
                <div className="form-group">
                    <button type="submit">
                        <i className="far fa-check-circle"></i>
                    </button>
                </div>

            </form>

        </div>
    )
}
