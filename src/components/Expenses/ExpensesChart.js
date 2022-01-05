import Chart from '../Chart/Chart'

const ExpensesChart = props => {
    const monthNameList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const chartDataPoints = monthNameList.map((monthName) => {
      return {
        label: monthName,
        value: 0
      };
    });

    for (const expense of props.expenses){
        const expenseMonth = expense.date.getMonth(); //index = 0
        chartDataPoints[expenseMonth].value += expense.amount;
    }

    return <Chart dataPoints={chartDataPoints}/>;
}

export default ExpensesChart;