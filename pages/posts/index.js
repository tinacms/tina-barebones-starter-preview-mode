import { Layout } from "../../components/Layout";
import Link from "next/link";
import { useTina } from "tinacms/dist/react";
import { client } from "../../.tina/__generated__/client";
import { getPosts } from "../../util/getPosts";

export default function PostList(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });
  const postsList = data.postConnection.edges;
  return (
    <Layout>
      <h1>Posts</h1>
      <div>
        {postsList.map((post) => (
          <div key={post.node.id}>
            <Link href={`/posts/${post.node._sys.filename}`}>
              <a>{post.node._sys.filename}</a>
            </Link>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export const getStaticProps = async (ctx) => {
  const { data, query, variables } = await getPosts({
    preview: ctx.preview || false,
  });

  return {
    props: {
      preview: ctx.preview || false,
      data,
      query,
      variables,
      //myOtherProp: 'some-other-data',
    },
  };
};
