import type { Repo } from '@/types/Repo';
import fetcher from '@/lib/fetcher';

const GITHUB_ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_GRAPHQL = 'https://api.github.com/graphql';

type PinnedReposResponse = {
  data: {
    user: {
      pinnedItems: {
        nodes: Repo[];
      };
    };
  };
};

type TotalReposResponse = {
  data: {
    user: {
      repositories: {
        totalCount: number;
      };
    };
  };
};

type TotalFollowersResponse = {
  data: {
    user: {
      followers: {
        totalCount: number;
      };
    };
  };
};

type TotalStarsResponse = {
  data: {
    user: {
      repositories: {
        nodes: [
          {
            stargazers: {
              totalCount: number;
            };
          },
        ];
      };
    };
  };
};

type TotalForksResponse = {
  data: {
    user: {
      repositories: {
        nodes: [
          {
            forks: {
              totalCount: number;
            };
          },
        ];
      };
    };
  };
};

type TopRepoResponse = {
  data: {
    user: {
      repositories: {
        nodes: [
          {
            name: string;
            url: string;
          },
        ];
      };
    };
  };
};

export async function getPinnedRepos() {
  const response = (await fetcher(GITHUB_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
              user(login: "${GITHUB_USERNAME}") {
                pinnedItems(first: 6, types: REPOSITORY) {
                  nodes {
                    ... on Repository {
                      name
                      description
                      url
                      stargazerCount
                      forkCount
                      primaryLanguage {
                        name
                        color
                      }
                    }
                  }
                }
              }
            }`,
    }),
  })) as PinnedReposResponse;

  return response.data.user.pinnedItems.nodes;
}

export async function getTotalRepos() {
  const response = (await fetcher(GITHUB_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
              user(login: "${GITHUB_USERNAME}") {
                repositories {
                  totalCount
                }
              }
            }`,
    }),
  })) as TotalReposResponse;

  return response.data.user.repositories.totalCount;
}

export async function getTotalFollowers() {
  const response = (await fetcher(GITHUB_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
              user(login: "${GITHUB_USERNAME}") {
                followers {
                  totalCount
                }
              }
            }`,
    }),
  })) as TotalFollowersResponse;

  return response.data.user.followers.totalCount;
}

export async function getTotalStars(totalRepos: number) {
  const response = (await fetcher(GITHUB_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
              user(login: "${GITHUB_USERNAME}") {
                repositories(first: ${totalRepos}) {
                  nodes {
                    stargazers {
                      totalCount
                    }
                  }
                }
              }
            }`,
    }),
  })) as TotalStarsResponse;

  return response.data.user.repositories.nodes.reduce(
    (acc, node) => acc + node.stargazers.totalCount,
    0,
  );
}

export async function getTotalForks(totalRepos: number) {
  const response = (await fetcher(GITHUB_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
              user(login: "${GITHUB_USERNAME}") {
                repositories(first: ${totalRepos}) {
                  nodes {
                    forks {
                      totalCount
                    }
                  }
                }
              }
            }`,
    }),
  })) as TotalForksResponse;

  return response.data.user.repositories.nodes.reduce(
    (acc, node) => acc + node.forks.totalCount,
    0,
  );
}

export async function getTopRepo() {
  const response = (await fetcher(GITHUB_GRAPHQL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
    },
    body: JSON.stringify({
      query: `{
              user(login: "${GITHUB_USERNAME}") {
                repositories(first: 1, orderBy: {field: STARGAZERS, direction: DESC}) {
                  nodes {
                    name
                    url
                  }
                }
              }
            }`,
    }),
  })) as TopRepoResponse;

  const { name, url } = response.data.user.repositories.nodes[0];

  return {
    name,
    url,
  };
}
