import React from 'react'
import './datainput.css'
export default function DataInput() {
    return (
        <div className="data_input-container">
            <form action="">
                <div className="form-group">
                    <select name="" id="">
                        <option value="inc">+</option>
                        <option value="dec">-</option>
                    </select>
                </div>
                <div className="form-group">
                    <input type="text" placeholder="Add description"/>
                </div>
                <div className="form-group">
                    <input type="number" placeholder="value" />
                </div>
                <div className="form-group">
                    <button type="submit"><i class="far fa-check-circle"></i></button>
                </div>

            </form>

        </div>
    )
}
