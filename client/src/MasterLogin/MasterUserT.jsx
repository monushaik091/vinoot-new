import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MasterUserT = () => {
    const [users, setUsers] = useState([]);
    const [showEditModal, setShowEditModal] = useState(false); // State to manage visibility of edit modal
    const [selectedUser, setSelectedUser] = useState(null); // State to store selected user for editing
    const [editedUser, setEditedUser] = useState(null); // State to store edited user data

    useEffect(() => {
      fetchUsers();
    }, []);
  
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
  
    const toggleActiveState = async (id, isActive) => {
      try {
        const updatedBy = localStorage.getItem('username'); // Get username from localStorage
        await axios.patch(`http://localhost:5000/api/users/${id}`, { isActive: !isActive, updatedBy });
        // Refresh user list after updating active state
        fetchUsers();
      } catch (error) {
        console.error('Error updating active state:', error);
      }
    };

    const handleEdit = (user) => {
      // Set selected user and show edit modal
      setSelectedUser(user);
      setEditedUser({ ...user }); // Set initial edited user data
      setShowEditModal(true);
    };

    const handleDelete = async (id) => {
      try {
        // Implement delete logic, for example:
        await axios.delete(`http://localhost:5000/api/users/${id}`);
        // Refresh user list after deletion
        fetchUsers();
      } catch (error) {
        console.error('Error deleting user:', error);
      }
    };

    const closeModal = () => {
      // Close edit modal
      setShowEditModal(false);
    };

    const handleChange = (e) => {
      // Handle changes in input fields
      const { name, value } = e.target;
      setEditedUser(prevState => ({
        ...prevState,
        [name]: value,
      }));
    };

    const saveChanges = async () => {
      try {
        // Save changes to edited user
        await axios.put(`http://localhost:5000/api/users/${editedUser._id}`, editedUser);
        // Refresh user list after saving changes
        fetchUsers();
        // Close edit modal
        setShowEditModal(false);
        // Show success alert
        alert('User data updated successfully!');
      } catch (error) {
        console.error('Error saving changes:', error);
        // Show error alert
        alert('Failed to update user data. Please try again.');
      }
    };
    
  
  return (
    <>
      <div>
      <h2>Master User List</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Date of Birth</th>
            <th>Gender</th>
            <th>User Type</th>
            <th>Active</th>
            <th>Changed By</th>
            <th>Actions</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.fullName}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.gender}</td>
              <td>{user.userType}</td>
              <td>{user.isActive ? 'Active' : 'Inactive'}</td>
              <td>{user.activeChangedBy}</td> 
              <td>
                <button onClick={() => toggleActiveState(user._id, user.isActive)}>
                  {user.isActive ? 'Deactivate' : 'Activate'}
                </button>
              </td>
              <td>
                <button onClick={() => handleEdit(user)}>Edit</button>
              </td>
              <td>
                <button onClick={() => handleDelete(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    {/* Edit Modal */}
    {showEditModal && selectedUser && (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <h2>Edit User</h2>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={editedUser.fullName} onChange={handleChange} />
          <label>Username:</label>
          <input type="text" name="username" value={editedUser.username} onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={editedUser.email} onChange={handleChange} />
          <label>Phone Number:</label>
          <input type="text" name="phoneNumber" value={editedUser.phoneNumber} onChange={handleChange} />
          <label>Date of Birth:</label>
          <input type="date" name="dateOfBirth" value={editedUser.dateOfBirth} onChange={handleChange} />
          <label>Gender:</label>
          <select name="gender" value={editedUser.gender} onChange={handleChange}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <label>User Type:</label>
          <select name="userType" value={editedUser.userType} onChange={handleChange}>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
          </select>
          <div className="modal-buttons">
            <button onClick={saveChanges}>Update</button>
            <button onClick={closeModal}>Back</button>
          </div>
        </div>
      </div>
    )}
    </>
  )
}

export default MasterUserT;
