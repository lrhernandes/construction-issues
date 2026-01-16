const Input = ({
  onChange,
  value,
}: {
  onChange: (value: string) => void;
  value: string;
}) => {
  const handleSearch = (value: string) => {
    console.log(value);
    onChange(value);
  };

  return (
    <div className="relative w-full flex items-center bg-white rounded-lg border transition-all duration-200 border-slate-200 shadow-sm hover:border-slate-300 hover:shadow">
      <div className="absolute left-3 pointer-events-none">
        <svg
          className="w-5 h-5 transition-colors duration-200 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>

      <input
        value={value}
        onChange={(e) => {
          console.log("AAAA");
          handleSearch(e.target.value);
        }}
        type="text"
        placeholder="Buscar apontamentos..."
        className="w-full py-3 pl-10 pr-10 bg-transparent text-slate-800 placeholder-slate-400 text-sm font-medium focus:outline-none"
      />
    </div>
  );
};

export default Input;
