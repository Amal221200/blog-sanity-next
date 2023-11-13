export interface Post {
    _id: string,
    title: string,
    overview: string,
    slug: { current: string },
    content: any,
    _createdAt: string
}