"use client";

import { Issue, Status } from "@/src/types/types";
import Filters from "../forms/Filters";
import IssuesList from "../lists/IssuesList";
import { useEffect, useMemo, useState } from "react";
import { getIssues } from "@/src/actions/issues";

interface HomeContainerProps {
  initialIssues: Issue[];
}

interface MessageProps {
  isLoading: boolean;
  error: string | null;
  length: number;
}

const Message = ({ isLoading, error, length }: MessageProps) => {
  if (isLoading) {
    return (
      <p className="col-span-full text-slate-600 text-sm font-medium">
        Fetching issues...
      </p>
    );
  }

  if (error) {
    return (
      <p className="col-span-full text-slate-600 text-base font-medium mb-1">
        {error}
      </p>
    );
  }

  if (length === 0) {
    return (
      <p className="col-span-full text-slate-600 text-base font-medium mb-1">
        No issues found
      </p>
    );
  }

  return null;
};

const HomeContainer = ({ initialIssues }: HomeContainerProps) => {
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState<Status | undefined>(undefined);
  const [issues, setIssues] = useState<Issue[]>(initialIssues);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const filteredIssues = useMemo(() => {
    return issues.filter((issue) =>
      issue.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [issues, search]);

  useEffect(() => {
    const fetchIssues = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const newIssues = await getIssues(status);
        setIssues(newIssues);
      } catch (err) {
        setError("Failed to load issues. Please try again.");
        console.error("Error fetching issues:", err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchIssues();
  }, [status]);

  return (
    <>
      <Filters
        search={search}
        setSearch={setSearch}
        status={status}
        setStatus={setStatus}
      />

      <Message
        isLoading={isLoading}
        error={error}
        length={filteredIssues.length}
      />

      {!isLoading && !error && filteredIssues.length > 0 && (
        <div className="mx-auto grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 h-full">
          <IssuesList issues={filteredIssues} />
        </div>
      )}
    </>
  );
};

export default HomeContainer;
