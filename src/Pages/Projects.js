import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import MainTabComponent from "../MainTabComponent";

const Projects = () => {
  const [entries, setEntries] = useState([
    {
      id: 1,
      projectname: "24015-237 WHC-Delaware",
      createdDate: "2023-01-15",
      status: "Active",
    },
    {
      id: 2,
      projectname: "McCarthy Demo",
      createdDate: "2023-02-20",
      status: "Active",
    },
    {
      id: 3,
      projectname: "24015-254 WHC-Green Mallard",
      createdDate: "2023-03-10",
      status: "InActive",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [menuVisible, setMenuVisible] = useState(null);
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({
    projectname: "",
    createdDate: "",
    status: "",
  });
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState("details");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleMenuClick = (id) => {
    setMenuVisible(menuVisible === id ? null : id);
  };

  const handleEdit = (id) => {
    const entry = entries.find((entry) => entry.id === id);
    setEditId(id);
    setEditData({
      projectname: entry.projectname,
      createdDate: entry.createdDate,
      status: entry.status,
    });
    setMenuVisible(null);
    setActiveTab("details");
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this project?")) {
      setEntries(entries.filter((entry) => entry.id !== id));
      setMenuVisible(null);
    }
  };

  const handleSaveEdit = () => {
    if (!editData.projectname || !editData.createdDate) {
      setError("Project name and created date are required.");
      return;
    }
    setEntries(
      entries.map((entry) =>
        entry.id === editId ? { ...entry, ...editData } : entry
      )
    );
    setEditId(null);
    setEditData({ projectname: "", createdDate: "", status: "" });
    setError("");
  };


  const handleCreateNew = () => {
    const newEntry = {
      id: entries.length + 1,
      projectname: "New Project",
      createdDate: new Date().toISOString().split("T")[0],
      status: "Active",
    };
    setEntries([...entries, newEntry]);
  };

  const filteredEntries = entries.filter((entry) =>
    entry.projectname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h4>Projects</h4>
      <br />
      <div className="header2">
        <h2>Projects</h2>
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
          style={{ marginBottom: "20px", padding: "5px" }}
          className="input-field"
        />
        <Link to="#" onClick={handleCreateNew} style={{ color: "blue" }}>
          +Create New
        </Link>
      </div>
      <span>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #ccc" }}>
              <th style={{ textAlign: "left", padding: "10px" }}>
                Project Name
              </th>
              <th style={{ textAlign: "left", padding: "10px" }}>
                Created Date
              </th>
              <th style={{ textAlign: "left", padding: "10px" }}>Status</th>
              {/* <th style={{ textAlign: "left", padding: "10px" }}>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {filteredEntries.map((entry) => (
              <tr key={entry.id} style={{ borderBottom: "1px solid #ccc" }}>
                <td style={{ padding: "10px" }}>
                  {editId === entry.id ? (
                    <input
                      type="text"
                      value={editData.projectname}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          projectname: e.target.value,
                        })
                      }
                    />
                  ) : (
                    entry.projectname
                  )}
                </td>
                <td style={{ padding: "10px" }}>
                  {editId === entry.id ? (
                    <input
                      type="date"
                      value={editData.createdDate}
                      onChange={(e) =>
                        setEditData({
                          ...editData,
                          createdDate: e.target.value,
                        })
                      }
                    />
                  ) : (
                    entry.createdDate
                  )}
                </td>
                <td style={{ padding: "10px" }}>
                  {editId === entry.id ? (
                    <select
                      value={editData.status}
                      onChange={(e) =>
                        setEditData({ ...editData, status: e.target.value })
                      }
                    >
                      <option value="Active">Active</option>
                      <option value="InActive">InActive</option>
                    </select>
                  ) : (
                    entry.status
                  )}
                </td>
                <td style={{ padding: "10px", position: "relative" }}>
                  <BsThreeDotsVertical
                    onClick={() => handleMenuClick(entry.id)}
                    style={{ cursor: "pointer" }}
                  />
                  {menuVisible === entry.id && (
                    <div className="dropdown-menu">
                      <button onClick={() => handleEdit(entry.id)}>Edit</button>
                      <button onClick={() => handleDelete(entry.id)}>
                        Delete
                      </button>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {editId && (
          <div>
            <div className="tabs">
              <div
                className={`tab ${activeTab === "details" ? "active" : ""}`}
                onClick={() => setActiveTab("details")}
              >
                Details
              </div>
              <div
                className={`tab ${activeTab === "settings" ? "active" : ""}`}
                onClick={() => setActiveTab("settings")}
              >
                Settings
              </div>
              <div
                className={`tab ${activeTab === "input" ? "active" : ""}`}
                onClick={() => setActiveTab("input")}
              >
                Input
              </div>
            </div>
            <div className="tab-content">
              {activeTab === "details" && (
                <div>
                  <h3>Project Details</h3>
                  {/* Include details form here if needed */}
                </div>
              )}
              {activeTab === "settings" && (
                <div>
                  <h3>Project Settings</h3>
                  {/* Include settings form here if needed */}
                </div>
              )}
              {activeTab === "input" && (
                <div>
                  <MainTabComponent/>
                </div>
              )}
            </div>
            {/* <button onClick={handleSaveEdit}>Save</button> */}
            <button onClick={() => setEditId(null)}>Cancel</button>
            {error && <div style={{ color: "red" }}>{error}</div>}
          </div>
        )}
      </span>
    </div>
  );
};

export default Projects;
