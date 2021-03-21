import Link from "next/link";

const CardComponent = ({ title, content, id }) => {
  return (
    <Link href={`/Notes/${id}`}>
      <button className="border shadow-lg px-2 py-2  max-h-42 max-w-xs w-4/5">
        <h2 className="text-xl text-left ">{title}</h2>
        <p className="text-base text-left truncate  ">{content}</p>
      </button>
    </Link>
  );
};

export default CardComponent;
