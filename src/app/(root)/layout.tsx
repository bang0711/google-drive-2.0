import { Header } from "@/components/header";

import { MobileNavigation, Sidebar } from "@/components/navigation";

import { getCurrentUser } from "@/lib/actions/users.actions";

import { redirect } from "next/navigation";

import React from "react";

export const dynamic = "force-dynamic";

type Props = {
  children: React.ReactNode;
};

async function RootLayout({ children }: Props) {
  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect("/login");

  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser} />

      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation {...currentUser} />

        <Header userId={currentUser.$id} accountId={currentUser.accountId} />

        <div className="main-content">{children}</div>
      </section>
    </main>
  );
}

export default RootLayout;
