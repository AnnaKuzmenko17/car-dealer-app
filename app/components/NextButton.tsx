import { FC } from "react"

interface Props {
  isButtonDisabled: boolean
  handleNextClick: () => void
}

const NextButton: FC<Props> = ({ isButtonDisabled, handleNextClick }) => {
  return (
    <button
      disabled={isButtonDisabled}
      onClick={handleNextClick}
      className={`w-full p-3 text-white rounded-lg font-semibold text-center transition duration-300 ease-in-out ${isButtonDisabled
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-blue-600 hover:bg-blue-700"
        }`}
      aria-disabled={isButtonDisabled}
    >
      Next
    </button>
  )
}

export default NextButton