import React, { Profiler } from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage = () => {
    return (
        <div>
            <ExpensesSummary />
            <ExpenseListFilters />
            <Profiler id="expenseListProfiler" onRender={(id, phase, actualDuration) => {
                console.log({
                    id,
                    phase,
                    actualDuration
                });
            }}>
                <ExpenseList />
            </Profiler>
        </div>
    );
};

export default ExpenseDashboardPage;