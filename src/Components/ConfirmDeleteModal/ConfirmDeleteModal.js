import axios from "axios";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import { toast } from "react-toastify";

const ConfirmDeleteModal = ({
  handleState,
  productId,
  loading,
  setLoading,
}) => {
  const [showModal, setShowModal] = useState(false);

  const handleDelete = (id) => {
    setLoading(true);
    const url = `https://book-buddy01.herokuapp.com/book/${id}`;
    // const url = `http://localhost:5000/book/${id}`;

    (async () => {
      await axios.delete(url).then((res) => {
        handleState();
        setLoading(false);
        toast(res.data.message);
      });
    })();
    setShowModal(false);
  };
  return (
    <>
      <button
        className="font-medium text-rose-500 hover:text-white  hover:bg-rose-600 transition-all duration-200 py-2 px-3 rounded"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Delete
      </button>
      {showModal ? (
        <div
          id="popup-modal"
          className="bg-black/50  overflow-y-auto overflow-x-hidden fixed  md:inset-0  md:h-full flex justify-center items-center"
        >
          <div>
            <div>
              <div className="relative p-4 w-full max-w-md h-full md:h-auto">
                <div className="relative bg-white rounded-lg shadow ">
                  <button
                    type="button"
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                    onClick={() => setShowModal(false)}
                  >
                    <IoMdClose className="w-6 h-6"></IoMdClose>
                  </button>
                  <div className="p-6 text-center">
                    <RiErrorWarningLine className="mx-auto mb-4 w-14 h-14 text-red-600 "></RiErrorWarningLine>
                    <h3 className="mb-5 text-lg font-normal text-gray-500 ">
                      Are you sure you want to delete this product?
                    </h3>
                    <button
                      onClick={() => handleDelete(productId)}
                      type="button"
                      className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
                    >
                      Yes, I'm sure
                    </button>
                    <button
                      onClick={() => setShowModal(false)}
                      type="button"
                      className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10"
                    >
                      No, cancel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ConfirmDeleteModal;
