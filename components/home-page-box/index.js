import Link from "next/link";

function HomePageBox({ name }) {
  const uppercaseWords = (str) =>
    str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

  return (
    <Link href="/[category]" as={`/${name}`}>
      <li>
        <a>{uppercaseWords(name)}</a>
        <p>{uppercaseWords(name)}</p>
      </li>
    </Link>
  );
}

export default HomePageBox;
