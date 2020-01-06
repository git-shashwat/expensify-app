export default (expenses) => {
    const total = expenses.reduce((total, { amount }) => total += amount, 0);
    return total;
}