export const getRepoDataFromURL = (url: string) => {
  if (!url) {
    throw new Error("URL not provided");
  }

  const regex = /^https:\/\/github.com\/[\w\-]+\/[\w\-]+(.git)?$/g;

  if (!regex.test(url)) {
    throw new Error("Invalid GitHub URL");
  }

  const urlSplitted = url.split("/").splice(-3);

  const [domain, username, repository] = urlSplitted;

  return { domain, username, repository };
};
