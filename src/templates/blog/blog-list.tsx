'use client'

import { Search } from "@/components/search";
import { PostCard } from "@/templates/blog/components/post-card";
import { PostGridCard } from "./components/post-grid-card";
import { Post } from "contentlayer/generated";
import { Inbox } from "lucide-react";
import { useSearchParams } from "next/navigation";

export type BlogListProps = {
  posts: Post[];
}

export function BlogList({ posts }: BlogListProps) {
  const searchParms = useSearchParams();
  const query = searchParms?.get('q') ?? '';
  const pageTitle = query ? `Resultado de busca para "${query}"` : "Dicas e estratégias para impulsionar seu negócio";

  const postList = query ? posts.filter((post) => post.title.toLowerCase()?.includes(query.toLowerCase())) : posts;
  const hasPosts = postList.length > 0;

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="container space-y-6 flex flex-col itmes-start justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4">
            <span className=" text-body-tag text-cyan-100 w-fit rounded-md text-center md:text-left py-2 px-4 bg-cyan-300 uppercase" >Blog</span>

            <h1 className="text-balance text-start md:text-left text-heading-xl max-w-2xl text-gray-100">{pageTitle}</h1>
          </div>
          <Search />
        </div>
      </header>

      {
        hasPosts && (
          <PostGridCard>
            {
              postList.map((post) => (
                <PostCard
                  key={post._id}
                  title={post.title}
                  description={post.description}
                  date={new Date(post.date).toLocaleDateString("pt-BR")}
                  image={post.image}
                  slug={post.slug}
                  author={{
                    name: post.author.name,
                    avatar: post.author.avatar
                  }}
                />
              ))
            }
          </PostGridCard>
        )
      }


      {
        !hasPosts && (
          <div className="container flex flex-col items-center justify-center gap-4">
            <Inbox className="text-gray-300 h-12 w-12 " />
            <p className="text-gray-300">Nenhum post encontrado.</p>
          </div>
        )
      }
    </div>
  )
}