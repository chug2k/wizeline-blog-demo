import Head from "next/head";
import styles from "../styles/Home.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

function BlogCard({ title, date, category, id }) {
  return (
    <div className="p-4 md:w-1/3">
      <Link href={`/posts/${id}`}>
        <a>
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
            <img
              className="lg:h-48 md:h-36 w-full object-cover object-center"
              src="https://dummyimage.com/720x400"
              alt="blog"
            />
            <div className="p-6">
              <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                {category}
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                {title}
              </h1>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default function Home({ allPostsData }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="w-full">
        <header className="h-28 flex">
          <div className="flex justify-between items-center w-full">
            <img src="/pulse.svg" className={styles.logo} />
            <img src="/wizeline.svg" className={styles.logo} />
            <button className="bg-red-500 hover:bg-red-700 text-white py-8 px-16 text-2xl">
              Subscribe
            </button>
          </div>
        </header>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              {allPostsData.map((props) => (
                <BlogCard {...props} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}
