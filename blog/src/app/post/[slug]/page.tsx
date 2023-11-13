import { Post } from "@/lib/interface";
import { client } from "@/lib/sanity";
import { urlFor } from "@/lib/sanityImageUrl";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";

async function getPost(slug: string): Promise<Post> {
    const query = `*[_type == "post" && slug.current == "${slug}"][0]`;
    const data = await client.fetch(query);

    return data
}

const PostPage = async ({ params: { slug } }: { params: { slug: string } }) => {
    const post: Post = await getPost(slug);
    const PortableTextComponent: Partial<PortableTextReactComponents> = {
        types: {
            image: ({ value }) => (
                <Image src={urlFor(value)} alt="Image" width={800} height={800} className="rounded-md" />
            )
        }
    }
    return (
        <div className="xl:divide-y xl:divide-gray-200 dark:xl:divide-gray-700 ">
            <header className="pt-6 xl:pb-6">
                <div className="space-y-1 text-center">
                    <div className="space-y-10">
                        <div>
                            <p className="text-base font-medium leading-6 text-teal-500">
                                {new Date(post._createdAt).toISOString().split("T")[0]}
                            </p>
                        </div>
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-[3rem]">
                            {post.title}
                        </h1>
                    </div>
                </div>
            </header>

            <div className="divide-y divide-gray-200 dark:divide-gray-700 pb-8 xl:divide-y-0">
                <div className="divide-y divide-gray-200 dark:divide-gray-700 xl:col-span-3 xl:row-span-2 xl:pb-0">
                    <div className="prose max-w-none pb-8 pt-10 dark:prose-invert prose-lg">
                        <PortableText value={post.content} components={PortableTextComponent} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostPage;