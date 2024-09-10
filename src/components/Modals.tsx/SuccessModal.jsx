import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { FaAngleLeft, FaCheck } from "react-icons/fa6";
import { style } from "./config";

const SuccessModal = ({ modal, message }) => {
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
        className="bg-white pt-[30px] pb-24 max-h-[55%] relative    w-[596px] rounded-[15px] "
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
          Form Submitted
        </h2>
        <div className="flex flex-col items-center">
          <h3 className="text-zinc-800 text-2xl font-semibold font-['Poppins']">
            Success
          </h3>
          <span className="inline-flex bg-[#1FAF38] mt-[27px] mb-10 h-[70px] w-[70px] justify-center items-center rounded-full ">
            <FaCheck fontSize={40} color="white" />
          </span>
          <p className="text-center text-zinc-800 mb-4 text-lg font-normal font-['Poppins']">
            {message || " You have successfully created an appointment"}
          </p>
          <button
            onClick={modal.close}
            className="w-full max-w-[407px] h-[51px] mt-0 mx-auto mb-4 flex items-center justify-center gap-2 bg-primaryBlue rounded-[10px]"
          >
            <p className="text-center text-white text-lg font-medium font-['Poppins']">
              CLOSE
            </p>
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
