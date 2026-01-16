"use server";

import { gql } from "@apollo/client";
import createApolloClient from "../../apollo.client";
import { Issue, Status } from "../types/types";

export async function getIssues(status?: Status): Promise<Issue[]> {
  const client = createApolloClient();

  const { data } = (await client.query({
    query: gql`
      query GetIssues($status: Status) {
        issues(status: $status) {
          id
          title
          location
          priority
          status
          created_at
        }
      }
    `,
    variables: {
      status,
    },
  })) as { data: { issues: Issue[] } };

  return data.issues;
}
