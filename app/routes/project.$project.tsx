import type { LoaderFunctionArgs } from "@remix-run/node"; // or cloudflare/deno
import { useLoaderData } from "@remix-run/react";

export const loader = async ({ params }: { params: LoaderFunctionArgs }) => {
  return params;
};

export default function Project() {
  const { project = "none" } = useLoaderData<{ project: string }>();

  return (
    <div>
      <h1 style={{ color: "red" }}>{project}</h1>
    </div>
  );
}
