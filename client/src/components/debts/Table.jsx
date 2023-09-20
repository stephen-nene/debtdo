import React, { useState, useEffect } from "react";
import { format } from 'date-fns';
import { Button } from "antd";
import { useSelector, useDispatch } from 'react-redux'

import UpdateDebt from "../modals/UpdateDebt";
import { handleFetchDebts } from "../ServerCom";


export const Table = (props) => {
  const [selectedDebt, setSelectedDebt] = useState(null);
  const [updateModal, setUpdateModal] = useState(false);
  const debts = useSelector(state => state.debts.debts)

  const dispatch = useDispatch()

  // Retrieve the selected date from props
  const { selectedDate } = props;

  const handleRowClick = (debt) => {
    setSelectedDebt(debt);
    setUpdateModal(true);
  };

  const formatDate = (dateString) => {
    return format(new Date(dateString), 'yyyy-MM-dd'); // Adjust the format to match the frontend date format
  };

  function formatPrice(price) {
    return price.toLocaleString('en-US', { style: 'currency', currency: 'kes' });
  }


  const filterItemsByDate = (selectedDate, debts) => {

    const filteredItems = debts.filter((item) => {
      return formatDate(item.created_at) === formatDate(selectedDate);
    });
    return filteredItems
  };

  const calculateTotalDebt = (filteredItems) => {
    // Use the reduce function to sum up the debts where status === 'DUE'
    const totalDebt = filteredItems.reduce((accumulator, item) => {
      if (item.status === 'DUE') {
        return accumulator + item.amount;
      }
      return accumulator;
    }, 0); // Initialize accumulator with 0

    return totalDebt;
  };


  const filteredDebts = filterItemsByDate(selectedDate, debts);
  const totalDueDebt = calculateTotalDebt(filteredDebts);



  return (
    <div className=" -view">
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>

        <tbody>

          {debts.length === 0 ? (
            <tr>
              <td className="border px-4 py-2" colSpan="4">
                <Button
                  onClick={() => handleFetchDebts(dispatch)}
                  className="hover:bg-gray-600 text-white font-bold rounded"
                >
                  Fetch
                </Button>
              </td>
              <td>

              </td>
            </tr>


          ) : (

            <>
              {/* Map the filtered debts and generate table rows */}
              {filteredDebts.length === 0 ? (
                <tr>
                  <td className="border px-4 py-2" colSpan="4">
                    No debts for {selectedDate}
                  </td>
                </tr>
              ) : (
                filteredDebts.map((debt) => (
                  <tr
                    key={debt.id}
                    className="cursor-pointer hover:bg-gray-400 hover:text-black"
                    onClick={() => handleRowClick(debt)}
                  >
                    <td className="border px-4 py-2">{debt.name}</td>
                    <td className="border px-4 py-2">{debt.location}</td>
                    <td className={`border text-lg ${debt.status === 'DUE' ? 'bg-rose-600' : 'bg-green-900'} px-4 py-2`}>
                      {debt.status}
                    </td>
                    <td className="border px-4 py-2">{formatPrice(debt.amount)}</td>
                  </tr>
                ))
              )}
            </>
          )}

        </tbody>
      </table>


      <p className="text-lg mt-4 font-semibold">
        Total Debt (DUE):
        <span className="text-green-300">{" "}
          {formatPrice(totalDueDebt)}
        </span>
      </p>

      {updateModal && (
        <UpdateDebt
          debt={selectedDebt}
          closeModal={() => setUpdateModal(false)}
        />
      )}
    </div>
  );
};
