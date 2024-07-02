import React, { useState } from "react";
import StatisticGrid from "../components/Dashboard/StatisticGrid";

import Filter from "../components/Dashboard/Filter";
import Title from "../components/Title";

const filterOptions = [
  {
    id: 1,
    value: "today",
    label: "Today",
  },
  {
    id: 2,
    value: "lastWeek",
    label: "Last Week",
  },
  {
    id: 3,
    value: "lastMonth",
    label: "Last Month",
  },
  {
    id: 4,
    value: "thisYear",
    label: "This Year",
  },
];

export default function DashboardPage() {
  const [selectedFilter, setSelectedFilter] = useState("");
  const handleSelect = (value) => {
    setSelectedFilter(value);
  };
  console.log(selectedFilter);
  return (
    <div className="flex flex-col gap-4">
      <Title title="Dashboard" />
      <Filter options={filterOptions} onSelect={handleSelect}></Filter>
      <StatisticGrid></StatisticGrid>
    </div>
  );
}
