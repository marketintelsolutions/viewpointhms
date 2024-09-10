import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaAngleLeft, FaCheck } from "react-icons/fa6";
import { style } from "./config";

const PaymentConfirmationModal = ({ modal }) => {
  return (
    <Modal
      open={modal.isOpen}
      onClose={modal.close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      className="backdrop-blur-[3px] "
    >
      <Box
        sx={style}
        className="bg-white pt-[30px] pb-24 max-h-[90%] relative  overflow-y-scroll  w-[936px] rounded-[15px] "
      >
        <button
          onClick={modal.close}
          className="text-[#333333] absolute top-[27px] left-[41px] flex gap-2 items-center text-base font-normal font-['Poppins']"
        >
          <span>
            <FaAngleLeft />
          </span>{" "}
          Back
        </button>
        <h2 className="text-[#333333] text-center mb-[62px] text-[22px] font-medium font-['Poppins']">
          Pay with Card
        </h2>
        <div className="flex flex-col items-center">
          <h3 className="text-zinc-800 text-2xl font-semibold font-['Poppins']">
            Congratulations
          </h3>
          <span className="inline-flex bg-[#1FAF38] mt-[27px] mb-10 h-[70px] w-[70px] justify-center items-center rounded-full ">
            <FaCheck fontSize={40} color="white" />
          </span>
          <p className="text-center text-zinc-800 mb-10 text-lg font-normal font-['Poppins']">
            You have successfully made payment of $400
            <br />
            for your order
          </p>
          <button
            onClick={modal.close}
            className="w-full max-w-[407px] h-[51px] mt-0 mx-auto mb-4 flex items-center justify-center gap-2 bg-primaryPurple rounded-[10px]"
          >
            <p className="text-center text-white text-lg font-medium font-['Poppins']">
              FINISH
            </p>
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default PaymentConfirmationModal;
