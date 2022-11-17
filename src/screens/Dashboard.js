import React from 'react'
import DashboardStatistics from '../components/DashboardStatistics'
import '../styles/dashboard.css'
export default function Dashboard() {
  return (
    <div className='dashboard'>
      <p className='titleApp'>
        Welcome to page Dashboard
      </p>

      <DashboardStatistics />
      
    </div>
  )
}
