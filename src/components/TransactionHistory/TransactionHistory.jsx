import data from './transactions.json';
import css from './TransactionHistory.module.css';

const TransactionHistory = () => {
  return <div className={css.transactionContainer}><table className={css.transactionHistory}>
    <thead className={css.transactionHeader}>
      <tr className={css.heading}>
        <th>Type</th>
        <th>Amount</th>
        <th>Currency</th>
      </tr>
    </thead>

    <tbody>
      {data.map(transaction => (
        <tr className={css.heading} key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
  </div>;
};

export default TransactionHistory;
