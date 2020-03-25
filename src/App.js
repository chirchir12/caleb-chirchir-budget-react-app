import React from 'react';

import Top from './components/Top/Top';
import DataInput from './components/DataInput/DataInput';
import ExpenseIncome from './components/ExpenseIncome/ExpenseIncome';
import BudgetContextProvider from './context/BudgetContext';

function App() {

    return (
        <div className="App">
            <BudgetContextProvider>
                <Top/>
                <DataInput/>
                <ExpenseIncome/>
            </BudgetContextProvider>


        </div>
    );
}

export default App;
