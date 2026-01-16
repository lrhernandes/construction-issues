import { Issue } from "@/src/types/types";
import IssueCard from "../cards/IssueCard";

interface IssuesListProps {
  issues: Issue[];
}

const IssuesList = ({ issues }: IssuesListProps) => {
  return (
    <>
      {issues.map((item) => (
        <IssueCard key={item.id} issue={item} />
      ))}
    </>
  );
};

export default IssuesList;
