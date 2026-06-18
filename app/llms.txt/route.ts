import { llmsText } from "../_llms";

// Serves /llms.txt per the llmstxt.org spec. Template lives in app/_llms.ts.
// force-static = emitted as a flat file.
export const dynamic = "force-static";

export function GET() {
  return new Response(llmsText(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
