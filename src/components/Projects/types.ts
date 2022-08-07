export interface ProjectUrls {
    liveUrl?: string;
}

export interface Project extends ProjectUrls {
    title: string;
    description: string;
    featuredImage: {
        url: string;
    };
}
