import Link from "next/link";

const Header = () => {
  return (
    <ul className="flex justify-end">
      <li className="mx-2 my-2">
        <Link href="/CreateNote">Create New Note</Link>
      </li>
      <li className="mx-2 my-2">
        <Link href="/Notes">All Notes</Link>
      </li>
      <li className="mx-2 my-2">
        <Link href="/">Login</Link>
      </li>
    </ul>
  );
};

export default Header;
