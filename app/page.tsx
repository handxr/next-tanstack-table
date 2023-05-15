import { columns } from "./columns";
import { DataTable } from "./data-table";

async function getUsersApi() {
  const response = await fetch("https://reqres.in/api/users");
  return response.json();
}

export default async function Home() {
  const users = await getUsersApi();

  return (
    <main className="container mx-auto py-10">
      <DataTable columns={columns} data={users.data} />
    </main>
  );
}
