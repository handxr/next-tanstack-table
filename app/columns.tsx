"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ColumnDef } from "@tanstack/react-table";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    id: "avatar",
    cell: ({ row }) => {
      return (
        <Avatar className="h-14 w-14">
          <AvatarImage
            src={row.original.avatar}
            alt={`${row.original.first_name} ${row.original.last_name}`}
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "first_name",
    header: "First Name",
  },
  {
    accessorKey: "last_name",
    header: "Last Name",
  },
];
