import Link from "next/link"
import { FC } from "react"

interface Props {
  isButtonDisabled: boolean
  handleNextClick: () => void
  selectedMake: string
  selectedYear: number
}

const NextButton: FC<Props> = ({ isButtonDisabled, handleNextClick, selectedMake, selectedYear }) => {
  return (
    <Link
      className="w-full"
      href={`result/${selectedMake}/${selectedYear}`}
    >
      <button
        onClick={handleNextClick}
        className={`w-full p-3 text-white rounded-lg font-semibold text-center transition duration-300 ease-in-out ${isButtonDisabled
          ? "bg-gray-400 cursor-not-allowed"
          : "bg-blue-600 hover:bg-blue-700"
          }`}
        disabled={isButtonDisabled}
      >
        Next
      </button>
    </Link>
  )
}

export default NextButton