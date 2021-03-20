import { List } from "semantic-ui-react";
import Link from "next/link";

const Header = () => {
  return (
    <List horizontal floated="right" link>
      <List.Item active>
        <Link href="/CreateNote">Create New Note</Link>
      </List.Item>
      <List.Item active>
        <Link href="/Notes">All Notes</Link>
      </List.Item>
      <List.Item active>
        <Link href="/">Login</Link>
      </List.Item>
    </List>
  );
};

export default Header;
