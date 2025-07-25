import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Dashboard.css';
import logoImg from './assets/images/witness2.png';
import userImg from './assets/images/witness3.png';
import witness4Bg from './assets/images/witness4.jpg';

export default function Dashboard() {
  const userName = 'Rajesh Dophinder';
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isRightPanelOpen, setIsRightPanelOpen] = useState(false);

  // Mock data for sections
  const quickActions = [
    'Upload Record',
    'Draft New Contract',
    'Add New Client',
    'Start Review Flow',
    'Upload Signed Agreement',
    'Create New Session Log',
  ];

  const recentActivity = [
    { title: 'Session Notes.pdf', date: 'Apr 20 2025', status: 'Incomplete contract' },
    { title: 'Session Notes.pdf', date: 'Apr 20 2025', status: 'Incomplete contract' },
    { title: 'Session Notes.pdf', date: 'Apr 20 2025', status: 'Incomplete contract' },
  ];

  const recordsManagement = [
    {
      title: 'Tenancy Agreement',
      items: ['Signed with Land Lord and Tenant', 'Contract'],
    },
    { title: 'Royalty Report.pdf', items: ['Of earnings', 'Financial report'] },
    {
      title: 'Tenancy Agreement',
      items: ['Signed with Land Lord and Tenant', 'Contract'],
    },
    { title: 'Royalty Report.pdf', items: ['Of earnings', 'Financial report'] },
  ];

  const myCampaign = [
    { label: 'Total Record Checked', value: '1023', period: '4-13 last month' },
    { label: 'Total Clients last month', value: '10', period: '+1 last month' },
    { label: 'Total Events last month', value: '10', period: '+1 last month' },
    { label: 'Total Drafts', value: '245', period: '+12 last month' },
    { label: 'Total Sessions', value: '10', period: '+1 last month' },
    { label: 'Files Pending', value: '10', period: '+1 last month' },
  ];

  const notifications = [
    { message: 'Olamide Dion - Pending Approval', time: '23m ago' },
    { message: 'Your review is requested for artist deal', time: '25m ago' },
    { message: 'Record Label - Record Metadata Incomplete', time: '45m ago' },
    { message: 'Track B - Session file is missing artist tags', time: '...' },
    { message: 'Dion Solicitors - New User invited', time: '23hrs ago' },
    { message: 'Rachel Ene has been invited to join the platform as a Legal Reviewer', time: '...' },
    { message: 'Simbi AI - Activity Summary', time: 'Jul 21' },
    { message: 'Simbi AI - Inactivity Prompt', time: 'Jul 24' },
    { message: "Haven't uploaded or reviewed in 7 days — continue where you left off?", time: '...' },
  ];

  const permissions = ['User Management', 'Contract Permissions', 'Analytics & Insights', 'Records Permissions'];

  const calendarEvents = [
    { name: 'Ralph Edwards', time: '10:00 AM - 12:00 AM' },
    { name: 'Ralph Edwards', time: '10:00 AM - 12:00 AM' },
    { name: 'Ralph Edwards', time: '10:00 AM - 12:00 AM' },
    { name: 'Ralph Edwards', time: '10:00 AM - 12:00 AM' },
  ];

  const securitySettings = ['Active Devices/Sessions', 'Authentication', 'Access Logs & Alerts', 'Account Recovery'];

  const sidebarItems = ['Dashboard', 'Records', 'Clients', 'Sessions', 'Reports', 'Settings'];
  const topSkills = ['Contract Drafting', 'Legal Review', 'Client Management', 'Documentation'];
  const clients = ['Client A', 'Client B', 'Client C', 'Client D'];
  const upcomingSessions = ['Session 1 - 10:00 AM', 'Session 2 - 2:00 PM'];
  const reviews = ['Review 1 - 4.5/5', 'Review 2 - 4.0/5'];
  const pending = ['Pending Task 1', 'Pending Task 2'];

  const toggleSidebar = (e) => {
    e.stopPropagation();
    setIsSidebarOpen(!isSidebarOpen);
    if (isRightPanelOpen) setIsRightPanelOpen(false);
  };

  const toggleRightPanel = (e) => {
    e.stopPropagation();
    setIsRightPanelOpen(!isRightPanelOpen);
    if (isSidebarOpen) setIsSidebarOpen(false);
  };

  const closeSidebar = () => setIsSidebarOpen(false);
  const closeRightPanel = () => setIsRightPanelOpen(false);

  return (
    <div
      className="dash-container"
      onClick={() => {
        if (window.innerWidth <= 768) {
          closeSidebar();
          closeRightPanel();
        }
      }}
      style={{ backgroundImage: `url(${witness4Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', minHeight: '100vh', overflowY: 'auto' }}
    >
      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closeSidebar}>
          ✖
        </button>
        <div className="sidebar-header">
          <img src={logoImg} alt="Logo" className="sidebar-logo" />
        </div>
        <nav className="sidebar-nav">
          {sidebarItems.map((item, i) => (
            <a href="#" className="sidebar-item" key={i} onClick={(e) => e.stopPropagation()}>
              {item}
            </a>
          ))}
        </nav>
      </aside>

      {/* Hamburger Button for Mobile */}
      <button className="hamburger" onClick={toggleSidebar}>
        ☰
      </button>

      <main className="dash-main-content">
        {/* Header */}
        <header className="header">
          <div className="logo">
            <img src={logoImg} alt="Logo" />
          </div>
          <div className="page-title-container">
            <h1 className="page-title">Dashboard</h1>
          </div>
          <div className="dash-search-bar">
            <input type="text" placeholder="Search anything..." />
          </div>
          <div className="user-info" onClick={toggleRightPanel}>
            <span className="notification-bell">🔔</span>
            <span className="user-name">{userName}</span>
            <img src={userImg} alt="User" className="user-img" />
          </div>
        </header>

        {/* Dashboard Content */}
        <section className="content">
          <div className="section quick-actions">
            <h3>
              Quick Actions <a href="#" className="view-more">View More</a>
            </h3>
            <div className="action-grid">
              {quickActions.map((action, i) => (
                <div className="action-card" key={i}>
                  {action}
                </div>
              ))}
            </div>
          </div>

          <div className="section recent-activity">
            <h3>
              Recent Activity <a href="#" className="view-more">View More</a>
            </h3>
            <div className="activity-grid">
              {recentActivity.map((item, i) => (
                <div className="activity-card" key={i}>
                  <span>{item.title}</span>
                  <span>{item.date}</span>
                  <span>{item.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section records-management">
            <h3>
              Records Management <a href="#" className="view-more">View More</a>
            </h3>
            <div className="record-grid">
              {recordsManagement.map((record, i) => (
                <div className="record-card" key={i}>
                  <h4>{record.title}</h4>
                  <ul>
                    {record.items.map((item, j) => (
                      <li key={j}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="section my-campaign">
            <h3>
              My Campaign <a href="#" className="view-more">View More</a>
            </h3>
            <div className="campaign-grid">
              {myCampaign.map((item, i) => (
                <div className="campaign-card" key={i}>
                  <span>{item.label}</span>
                  <span>{item.value}</span>
                  <span>{item.period}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section notifications">
            <h3>
              Notifications <a href="#" className="view-more">View More</a>
            </h3>
            <div className="notification-grid">
              {notifications.map((notif, i) => (
                <div className="notification-card" key={i}>
                  <span>{notif.message}</span>
                  <span>{notif.time}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="section permissions">
            <h3>
              Permissions & Access <a href="#" className="view-more">View More</a>
            </h3>
            <div className="permission-grid">
              {permissions.map((perm, i) => (
                <div className="permission-card" key={i}>
                  {perm}
                </div>
              ))}
            </div>
          </div>

          <div className="section calendar-section">
            <h3>
              Calendar <button className="add-session">Add Session</button>
            </h3>
            <div className="calendar-container">
              <Calendar />
              <div className="calendar-events">
                {calendarEvents.map((event, i) => (
                  <div className="event-item" key={i}>
                    <span>{event.name}</span>
                    <span>{event.time}</span>
                    <span>📅</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section security-settings">
            <h3>
              Security Settings <a href="#" className="view-more">View More</a>
            </h3>
            <div className="security-grid">
              {securitySettings.map((setting, i) => (
                <div className="security-card" key={i}>
                  {setting}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Right Panel */}
      <aside className={`right-panel ${isRightPanelOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={closeRightPanel}>
          ✖
        </button>
        <div className="right-panel-header">
          <div className="user-profile-content">
            <img src={userImg} alt="User" className="user-profile-img" />
            <span>{userName}</span>
            <p>Joined: Jul 2023</p>
          </div>
        </div>
        <div className="right-panel-section top-skills">
          <h3>Top Skills</h3>
          <div className="skills-grid">
            {topSkills.map((skill, i) => (
              <div className="skill-card" key={i}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className="right-panel-section clients">
          <h3>Clients</h3>
          <div className="clients-grid">
            {clients.map((client, i) => (
              <div className="client-card" key={i}>
                {client}
              </div>
            ))}
          </div>
        </div>
        <div className="right-panel-section upcoming-sessions">
          <h3>Upcoming Sessions</h3>
          <div className="sessions-grid">
            {upcomingSessions.map((session, i) => (
              <div className="session-card" key={i}>
                {session}
              </div>
            ))}
          </div>
        </div>
        <div className="right-panel-section reviews">
          <h3>Reviews</h3>
          <div className="reviews-grid">
            {reviews.map((review, i) => (
              <div className="review-card" key={i}>
                {review}
              </div>
            ))}
          </div>
        </div>
        <div className="right-panel-section pending">
          <h3>Pending</h3>
          <div className="pending-grid">
            {pending.map((task, i) => (
              <div className="pending-card" key={i}>
                {task}
              </div>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}