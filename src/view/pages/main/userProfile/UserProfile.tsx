import React from "react";
import { Link, Outlet } from "react-router-dom";
import UserProfileSidebar from "../../../components/main/userProfile/UserProfileSidebar";

const UserProfile = () => {
  return (
    <div className="flex flex-grow">
      <UserProfileSidebar />
      {/* Content */}
      <main className="flex-grow bg-gray-100 p-6">
        <div className="container mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default UserProfile;
