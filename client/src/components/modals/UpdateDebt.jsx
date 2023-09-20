import React, { useState } from "react";
import { AiOutlineClose, AiOutlineDelete } from 'react-icons/ai'
import { useDispatch } from "react-redux";


import { handleUpdate, handleDelete } from '../ServerCom'

const UpdateDebt = ({ debt, closeModal }) => {
  const [editableFields, setEditableFields] = useState({
    status: debt.status,
    amount: debt.amount,
  });
  const [isChanged, setIsChanged] = useState(false);
  const dispatch = useDispatch()

  const handleFieldChange = (fieldName, value) => {
    setEditableFields((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
    setIsChanged(true);
  };


  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-gray-800  p-4 shadow-md rounded-md">
        {/* <h2 className="text-lg font-semibold mb-4">Debt Details</h2> */}
        <div className="header flex items-center justify-between px-4 py-2 bg-gray-700 text-white">
          <h2 className="text-lg font-semibold">{debt.status}</h2>
          <AiOutlineClose onClick={closeModal}
            className="text-xl cursor-pointer hover:text-red-500" />
        </div>
        <div className="my-3">
          <strong>Name:</strong> {debt.name}
        </div>
        <div className="my-3">
          <strong>Location:</strong> {debt.location}
        </div>
        <div className="my-3">
          <strong>Status: </strong>{" "}
          <select
            className="border text-gray-300 text-sm rounded-lg p-1.5 "
            onChange={(e) => handleFieldChange("status", e.target.value)}
          >
            <option className="text-white" value=""> --- Change  status ---</option>
            <option value={0}>DUE</option>
            <option value={1}>PAID</option>
          </select>
        </div>


        <div className="my-4">
          <strong>Amount:</strong>{" "}
          <input
            type="number"
            className="bg-gray-900 border  pl-7 border-slate-200"
            value={editableFields.amount}
            onChange={(e) => handleFieldChange("amount", e.target.value)}
          />
        </div>
        {isChanged && (
          <button
            className="border border-green-500 text-white px-4 py-2 rounded hover:text-green-600"
            onClick={() => handleUpdate(dispatch, closeModal, editableFields, debt)}
          >
            Update
          </button>
        )}

        <button
          className="border border-rose-500 text-white px-6 p-3 rounded hover:text-rose-600 ml-2"
          onClick={() => handleDelete(dispatch, closeModal, debt)}
        >
          <AiOutlineDelete />
        </button>
      </div>
    </div>
  );
};

export default UpdateDebt;
