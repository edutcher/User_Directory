import React, { useState, useEffect } from "react";
import "./App.css";
import EmpTable from "./components/EmpTable";
import Container from "@material-ui/core/Container";
import getUsers from "./utils/api";
import SearchBar from "./components/SearchBar";

function App() {
  const [first, setFirst] = useState(true);
  const [emps, setEmps] = useState([]);
  const [search, setSearch] = useState();
  const [filteredEmps, filterEmps] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const employees = await getUsers();
      setEmps(employees);
      filterEmps(employees);
    }
    console.log(first);
    if (first) {
      setFirst(false);
      fetchData();
    } else {
      filterEmps(
        emps.filter((emp) => emp.name.first.toLowerCase().includes(search))
      );
    }
  }, [search]);

  return (
    <div>
      <Container>
        <SearchBar search={search} setSearch={setSearch} />
        <EmpTable emps={filteredEmps} />
      </Container>
    </div>
  );
}

export default App;
