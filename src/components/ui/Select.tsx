import { Status } from "@/src/types/types";

interface SelectProps {
  status: Status | undefined;
  setStatus: (status: Status | undefined) => void;
}

const Select = ({ status, setStatus }: SelectProps) => {
  return (
    <div className="relative flex items-center bg-white rounded-lg border transition-all duration-200 border-slate-200 shadow-sm hover:border-slate-300 hover:shadow min-w-fit">
      <select
        value={status || ""}
        onChange={(e) => {
          const value = e.target.value;
          setStatus(value === "" ? undefined : (value as Status));
        }}
        className="w-full py-3 pl-4 pr-10 bg-transparent text-slate-800 text-sm font-medium focus:outline-none appearance-none cursor-pointer whitespace-nowrap"
      >
        <option value="">Todos os status</option>
        <option value={Status.OPEN}>Aberto</option>
        <option value={Status.IN_PROGRESS}>Em andamento</option>
        <option value={Status.DONE}>Concluído</option>
      </select>

      <div className="absolute right-3 pointer-events-none">
        <svg
          className="w-4 h-4 transition-colors duration-200 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Select;
