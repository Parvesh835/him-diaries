import React, { useEffect, useState } from "react";
import { getMessages } from "../../service/contactApi";
import toast from "react-hot-toast";
import "./AdminMessages.css";

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const data = await getMessages();
        setMessages(data);
      } catch (error) {
        toast.error("Failed to load messages");
      } finally {
        setLoading(false);
      }
    };
    fetchMessages();
  }, []);

  if (loading) return <div className="loading">Loading Messages...</div>;

  return (
    <div className="admin-messages-page">
      <h2>Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <table className="messages-table">
          <thead>
            <tr>
              <th>Date</th>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {messages.map((msg) => (
              <tr key={msg._id}>
                <td>{new Date(msg.createdAt).toLocaleDateString()}</td>
                <td>{msg.name}</td>
                <td>{msg.email}</td>
                <td>{msg.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default AdminMessages;
