import data from './transactions.json';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

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

TransactionHistory.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.number,
      currency: PropTypes.string,
    })
  ),
};
export default TransactionHistory;
