import React from 'react';
import AdminLayout from '../../hoc/adminLayout';

const Dashboard = () => {
    return (
        <AdminLayout>
            <div className="user_dashboard">
               <div> 
                  This is your Dash   
               </div>
            </div>
        </AdminLayout>            
    );
};

export default Dashboard;