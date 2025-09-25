const promptModules = import.meta.glob("../prompts/*.md", {
  query: "?raw",
  import: "default",
});

export async function getPrompt(version: string): Promise<string> {
  const expectedPath = `../prompts/chatbot-${version}.md`;
  const loader = (promptModules as Record<string, () => Promise<string>>)[
    expectedPath
  ];
  const resolvedLoader =
    loader ||
    Object.entries(promptModules).find(([key]) =>
      key.endsWith(`/chatbot-${version}.md`)
    )?.[1];
  if (!resolvedLoader) {
    throw new Error(`Prompt not found for version: ${version}`);
  }
  return await (resolvedLoader as () => Promise<string>)();
}

export function listAvailablePromptVersions(): string[] {
  return Object.keys(promptModules)
    .map((key) => key.match(/chatbot-(.+)\.md$/)?.[1])
    .filter((v): v is string => Boolean(v));
}
