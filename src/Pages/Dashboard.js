import React from 'react'
import Card from '../Components/Card';
import { FaProjectDiagram, FaCheckCircle, FaHourglassHalf } from 'react-icons/fa';
import { GrIteration } from "react-icons/gr";

const Dashboard = () => {
  const cardData = [
    { title: 'Total Projects', value: 15 ,icon: <FaProjectDiagram />},
    { title: 'Total Engineers', value: 10 ,icon: <FaCheckCircle />},
    { title: 'Total Sales Users', value: 3 ,icon: <FaHourglassHalf />},
    { title: 'Total iterations', value: 100 ,icon:<GrIteration />}
  ];

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="cards">
        {cardData.map((card, index) => (
          <Card key={index} title={card.title} value={card.value} icon={card.icon}/>
        ))}
      </div>
    </div>
  );
}

export default Dashboard
