import Link from "next/link";
import axios from "axios";

const NewsDetail = ({ newsPost }) => {
  const createNews = () => {
    return { __html: newsPost.content };
  };

  return (
    <div className="container my-4 px-5">
      <h1 className="display-4 text-break">{newsPost.title}</h1>
      <h4>
        {newsPost.month} {newsPost.day}
      </h4>
      <div className="mt-5 mb-5" dangerouslySetInnerHTML={createNews()} />
      <hr />
      <p className="lead mb-5">
        <Link href="/news" className="font-weight-bold">
          Back to News
        </Link>
      </p>
    </div>
  );
};

export async function getStaticProps({ params }) {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/homepage/news/${params.id}`
  );
  return { props: { newsPost: res.data } };
}

export async function getStaticPaths() {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/api/homepage/news`
  );
  const paths = res.data.map((post) => ({
    params: { id: post.slug },
  }));
  return { paths, fallback: false };
}

export default NewsDetail;
