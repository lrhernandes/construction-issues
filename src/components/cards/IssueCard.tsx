import { tv } from "tailwind-variants/lite";
import { Issue, Priority, Status } from "../../types/types";
import Tag from "../ui/Tag";
import MapPinIcon from "../icons/MapPinIcon";

interface IssueCardProps {
  issue: Issue;
}

const issueCard = tv({
  base: "border-2 border-[#E2E8F0] rounded-lg shadow-md",
  variants: {
    priority: {
      [Priority.LOW]: "bg-blue-500",
      [Priority.MEDIUM]: "bg-amber-500",
      [Priority.HIGH]: "bg-red-500",
    },
  },
});

const IssueCard = ({ issue }: IssueCardProps) => {
  const { title, location, priority, status, created_at } = issue;

  return (
    <div className={issueCard({ priority })}>
      <div className="ml-1 p-4 bg-white rounded-r-md h-full flex flex-col justify-between">
        <div className="flex flex-row justify-between items-center mb-2">
          <Tag status={status} />
          <span className="text-slate-400">{created_at}</span>
        </div>
        <h3 className="text-slate-800 text-lg font-bold">{title}</h3>
        <p className="text-slate-500 text-md font-medium pt-4 border-t border-slate-200 mt-4 flex items-center gap-1.5 leading-4">
          <MapPinIcon className="w-4 h-4 shrink-0" />
          {location}
        </p>
      </div>
    </div>
  );
};

export default IssueCard;
