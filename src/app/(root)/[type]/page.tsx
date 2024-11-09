import { Card, Sort } from "@/components/type";
import { getFiles } from "@/lib/actions/file.actions";
import { getCurrentUser } from "@/lib/actions/users.actions";
import { getFileTypesParams } from "@/lib/utils";
import { Models } from "node-appwrite";

import React from "react";

async function TypePage({ params, searchParams }: SearchParamProps) {
  const { type } = await params;

  const searchText = ((await searchParams)?.query as string) || "";
  const sort = ((await searchParams)?.sort as string) || "";

  const types = getFileTypesParams(type) as FileType[];

  const [files, currentUser] = await Promise.all([
    getFiles({ types, searchText, sort }),
    getCurrentUser(),
  ]);

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>

        <div className="total-size-section">
          <p className="body-1">
            Total: <span className="h5">0 MB</span>
          </p>

          <div className="sort-container">
            <p className="body-1 hidden text-light-200 sm:block">Sort by:</p>

            <Sort />
          </div>
        </div>
      </section>

      {/* Render the files */}
      {files.total > 0 ? (
        <section className="file-list">
          {files.documents.map((file: Models.Document) => (
            <Card {...currentUser} key={file.$id} file={file} />
          ))}
        </section>
      ) : (
        <p className="empty-list">No files uploaded</p>
      )}
    </div>
  );
}

export default TypePage;