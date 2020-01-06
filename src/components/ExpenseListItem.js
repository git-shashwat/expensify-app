import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

numeral.register('locale', 'inr', {
    delimiters: {
        thousands: ',',
        decimal: '.'
    },
    abbreviations: {
        thousand: 'k',
        million: 'm',
        billion: 'b',
        trillion: 't'
    },
    ordinal : function (number) {
        return number === 1 ? 'rupee' : 'rupees';
    },
    currency: {
        symbol: '₹'
    }
});

numeral.locale('inr');

const ExpenseListItem =  ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>
         {numeral(amount).format('$0,0.00')}
          - 
         {moment(createdAt).format('MMMM Do, YYYY')}
         </p>
    </div>
);

export default (ExpenseListItem);