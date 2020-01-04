// Get visible expenses
import moment from 'moment';

export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter(expense => {
        const createdAtMoment = moment(expense.createdAt);
        const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day') : true;
        const textMatch = text === '' || expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a,b) => {
        if (sortBy === 'amount') {
            return b.amount - a.amount;
        } else if (sortBy === 'date') {
            return Math.abs(a.createdAt) - Math.abs(b.createdAt);
        }
    });
};