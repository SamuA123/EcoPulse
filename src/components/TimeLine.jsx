export default function Timeline({ dates, onDateChange }) {
  return (
    <div className="flex justify-center items-center mt-6 overflow-x-auto space-x-4 p-2 bg-gray-100 rounded-lg">
      {dates.map((date) => (
        <div
          key={date}
          onClick={() => onDateChange(date)}
          className="cursor-pointer px-4 py-2 rounded-full bg-white text-gray-700 hover:bg-green-200 whitespace-nowrap"
        >
          {date}
        </div>
      ))}
    </div>
  );
}
