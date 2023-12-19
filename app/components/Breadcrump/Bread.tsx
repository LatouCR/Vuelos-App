// components/Breadcrumb.tsx

"use client"
import React, { useState } from 'react';

interface BreadcrumbProps {}

const Breadcrumb: React.FC<BreadcrumbProps> = () => {
  const [showUsersSubMenu, setShowUsersSubMenu] = useState(false);
  const [showAdministrativeSubMenu, setShowAdministrativeSubMenu] = useState(false);
  const [showFlightsSubMenu, setShowFlightsSubMenu] = useState(false);

  return (
    <div className="bg-gray-100 p-4">
      <nav className="container mx-auto">
        <ol className="list-reset flex text-grey-dark">
          <li><a href="#" className="text-blue-500">Home</a></li>
          <li className="mx-2">/</li>
          <li>
            <a
              href="#"
              className="text-blue-500"
              onClick={() => setShowUsersSubMenu(!showUsersSubMenu)}
            >
              Users
            </a>
            {showUsersSubMenu && (
              <>
                <span className="mx-2">/</span>
                <a href="#" className="text-blue-500">Create User</a>
                <span className="mx-2">/</span>
                <a href="#" className="text-blue-500">Roles</a>
              </>
            )}
          </li>
          <li className="mx-2">/</li>
          <li>
            <a
              href="#"
              className="text-blue-500"
              onClick={() => setShowAdministrativeSubMenu(!showAdministrativeSubMenu)}
            >
              Administrative
            </a>
            {showAdministrativeSubMenu && (
              <>
                <span className="mx-2">/</span>
                <a href="#" className="text-blue-500">Page</a>
                <span className="mx-2">/</span>
                <a href="#" className="text-blue-500">Page</a>
                <span className="mx-2">/</span>
                <a href="#" className="text-blue-500">Page</a>
              </>
            )}
          </li>
          <li className="mx-2">/</li>
          <li>
            <a
              href="#"
              className="text-blue-500"
              onClick={() => setShowFlightsSubMenu(!showFlightsSubMenu)}
            >
              Flights
            </a>
            {showFlightsSubMenu && (
              <>
                <span className="mx-2">/</span>
                <a href="#" className="text-blue-500">Flight Page 1</a>
                <span className="mx-2">/</span>
                <a href="#" className="text-blue-500">Flight Page 2</a>
                {/* Add more flight pages as needed */}
              </>
            )}
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumb;
