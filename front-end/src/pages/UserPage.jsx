import React, { useState } from "react";
import Title from "../components/Title";
import Modal from "../components/User/AddModal";
import { MagnifyingGlassIcon, SparklesIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { IoPersonAdd } from "react-icons/io5";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { MdDeleteOutline, MdModeEdit } from "react-icons/md";
import Pagination from "../components/Pagination";

import SearchBar from "../components/SearchBar";

const TABLE_HEAD = ["Name", "Email", "Job", "Employed", "Role", "Action"];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
    email: "aaaa@gmail.com",
    admin: true,
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
    email: "aaaa@gmail.com",
    admin: false,
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
    email: "aaaa@gmail.com",
    admin: false,
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
    email: "aaaa@gmail.com",
    admin: false,
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
    email: "aaaa@gmail.com",
    admin: false,
  },
];
export default function UserPage() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="flex flex-col gap-4">
      <Title title="Users" />
      <Card className="h-full w-full overflow-auto">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className=" flex items-center justify-between gap-8 p-4">
            <SearchBar></SearchBar>
            <Button
              onClick={() => setShowModal(true)}
              className="text-white bg-blue-600 hover:bg-blue-700 flex items-center gap-2 p-3"
            >
              <IoPersonAdd size={20} />
              Add User
            </Button>
          </div>
        </CardHeader>
        <CardBody>
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TABLE_ROWS.map(({ name, email, job, date, admin }, index) => (
                <tr key={name} className="even:bg-blue-gray-50/50">
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {email}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {job}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {date}
                    </Typography>
                  </td>
                  <td className="p-4 border-b border-blue-gray-50">
                    {admin ? (
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal bg-red-50 text-red-600 rounded-md inline-block pl-2 pr-2"
                      >
                        admin
                      </Typography>
                    ) : (
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal bg-green-50 text-green-600 rounded-md inline-block pl-2 pr-2"
                      >
                        user
                      </Typography>
                    )}
                  </td>
                  <td className="p-4 flex border-b border-blue-gray-50">
                    <MdModeEdit size={25} color="gray" />
                    <MdDeleteOutline size={25} color="red" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardBody>
        <CardFooter>
          <Pagination></Pagination>
        </CardFooter>
      </Card>
      <Modal showModal={showModal} setShowModal={setShowModal} />
    </div>
  );
}
