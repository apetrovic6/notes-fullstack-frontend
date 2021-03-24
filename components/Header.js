import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext";

const Header = () => {
  const {
    value: { userName },
    setValue,
  } = useContext(UserContext);

  const router = useRouter();

  useEffect(() => {
    if (!userName) {
      router.replace("/");
    }
  }, []);
  const onClick = () => {
    localStorage.removeItem("token");
    setValue({});
    router.reload;
  };

  return (
    <Fragment>
      {userName ? (
        <>
          <ul className="flex justify-end">
            <li className="mx-2 my-2">
              <Link href="/CreateNote">Create New Note</Link>
            </li>
            <li className="mx-2 my-2">
              <Link href="/Notes">All Notes</Link>
            </li>
            <li className="mx-2 my-2">
              <Link href="/">
                <button className="focus:outline-none" onClick={onClick}>
                  {userName ? <>Logout</> : <>Login / Register</>}
                </button>
              </Link>
            </li>
          </ul>
          <div className="flex  justify-end">
            <p>Welcome {userName}</p>
          </div>
        </>
      ) : (
        <>
          <ul className="flex justify-end">
            <li className="mx-2 my-2">
              <Link href="/">Login / Register</Link>
            </li>
          </ul>
        </>
      )}
    </Fragment>
  );
};

export default Header;
