import React, {useState, useContext} from 'react'
import './datainput.css'
import { BudgetContext } from '../../context/BudgetContext'


export default function DataInput() {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState('')
    const [type, setType]  = useState('inc')

    const {addExpense, addIncome,totalIncomeValue, totalExpenseValue, availableIncome} = useContext(BudgetContext)

    const handleSubmit =(e) => {
        e.preventDefault()
        let income = 0
        let expense = 0
        if(type==='inc') {
            //function add incom
            addIncome(title, value)
            totalIncomeValue(value)
            income = income + value
            
        }else {
            // fncttion add expense
            addExpense(title, value)
            totalExpenseValue(value)
            expense = expense + value
        }
       
        availableIncome(income,value)
       

        setType('')
        setTitle('')
        setValue('')

    }

    

    return (
        <div className="data_input-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <select name="" id=""  onChange={(e)=> setType(e.target.value)} >
                        <option value="inc">+</option>
                        <option value="dec">-</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} placeholder="Add description"/>
                </div>
                <div className="form-group">
                    <input type="number" value={value} onChange={(e) => setValue(+e.target.value)} placeholder="value" />
                </div>
                <div className="form-group">
                    <button type="submit"><i className="far fa-check-circle"></i></button>
                </div>

            </form>
          
        </div>
    )
}
