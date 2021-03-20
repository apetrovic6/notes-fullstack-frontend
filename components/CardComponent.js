import Link from "next/link";

const CardComponent = ({ title, content, id }) => {
  return (
    <Link href={`/Notes/${id}`}>
      <div className="border shadow-lg px-2 py-2 max-h-42 max-w-xs w-4/5">
        <div className="overflow-ellipsis overflow-hidden">{title}</div>
        <div className="overflow-ellipsis overflow-hidden">{content}</div>
      </div>
    </Link>
  );
};

export default CardComponent;
