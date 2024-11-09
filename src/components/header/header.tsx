import { signOutUser } from "@/lib/actions/users.actions";

import { Button } from "../ui/button";

import Search from "./search";

import { FileUploader } from "../file-upload";

import { LogOut } from "lucide-react";

type Props = {
  userId: string;
  accountId: string;
};

function Header({ accountId, userId }: Props) {
  return (
    <header className="header">
      <Search />
      <div className="header-wrapper">
        <FileUploader ownerId={userId} accountId={accountId} />
        <form action={signOutUser}>
          <Button type="submit" className="sign-out-button">
            <LogOut size={24} />
          </Button>
        </form>
      </div>
    </header>
  );
}

export default Header;
