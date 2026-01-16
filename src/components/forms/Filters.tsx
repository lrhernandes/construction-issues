import { Status } from "@/src/types/types";
import Input from "../ui/Input";
import Select from "../ui/Select";

interface FiltersProps {
  search: string;
  setSearch: (search: string) => void;
  status: Status | undefined;
  setStatus: (status: Status | undefined) => void;
}

const Filters = ({ search, setSearch, status, setStatus }: FiltersProps) => {
  return (
    <div className="w-full flex sm:flex-row flex-col sm:gap-8 gap-2 my-6">
      <Input value={search} onChange={setSearch} />
      <Select status={status} setStatus={setStatus} />
    </div>
  );
};

export default Filters;
