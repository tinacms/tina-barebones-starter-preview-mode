import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Layout } from "../components/Layout";
import { useTina } from "tinacms/dist/react";
import { client } from "../.tina/__generated__/client";

export default function Home(props) {
  // data passes though in production mode and data is updated to the sidebar data in edit-mode
  const { data } = useTina({
    query: props.query,
    variables: props.variables,
    data: props.data,
  });

  const content = data.page.body;
  return (
    <Layout>
      <TinaMarkdown content={content} />
    </Layout>
  );
}

export const getStaticProps = async ({ preview }) => {
  const { data, query, variables } = await client.queries.page({
    relativePath: "home.mdx",
  });
  return {
    props: {
      preview: preview || false,
      data,
      query,
      variables,
    },
  };
};
