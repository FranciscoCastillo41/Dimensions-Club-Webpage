import React, { useState } from 'react';
import './App.css';
import MyNavbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Sidebar from './components/Sidebar/Sidebar';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Departments from './components/Departments/Departments';
import DepartmentsVersionTwo from './components/Departments/DepartmentsV2';
import Contact from './components/Contact/Contact';

function App() {

  const clubName = 'Dimensions Club';
  const navLinks = [
    { id: 'home', href: '#home', label: 'Home' },
    { id: 'about', href: '#about', label: 'About' },
    { id: 'departments', href: '#departments', label: 'Departments' },
    { id: 'contact', href: '#contact', label: 'Contact' },
  ];

  const [showSidebar, setShowSidebar] = useState(false);

  const [selectedTab, setSelectedTab] = useState('home');

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'home':
        return <Home />
      case 'about':
        return <About />;
      case 'departments':
        return <DepartmentsVersionTwo />
      case 'contact':
        return <Contact />
      default:
        return null;
    }
  };

  return (
    <div className="cover-page d-flex flex-column dynamic-background">
      <div className="star-field">
        <div className="layer"></div>
        <div className="layer"></div>
        <div className="layer"></div>
      </div>

      <MyNavbar clubName={clubName} navLinks={navLinks} onSidebarToggle={handleSidebarToggle} onTabChange={handleTabChange}/>
      {renderContent()}
      
      <Sidebar
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        navLinks={navLinks}
        handleTabChange={handleTabChange}
        selectedTab={selectedTab}
      />

      
    </div>
  );
}

export default App;


