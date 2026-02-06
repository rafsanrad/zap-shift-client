import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FaqCard = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`border rounded-xl transition-all duration-300 ${
        open ? "bg-teal-50 border-teal-500" : "bg-white"
      }`}
    >
      {/* Question Row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 text-left"
      >
        <h3 className="text-lg font-semibold text-teal-900">
          {question}
        </h3>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Answer */}
      {open && (
        <div className="px-5 pb-5 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  );
};

export default FaqCard;
