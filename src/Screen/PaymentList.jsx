import React from 'react';
import { Search, Clock, Package, Heart, FileText, List, Activity, LayoutList, Grid, Settings, LogOut, Edit, Trash, ChevronLeft, ChevronRight } from 'lucide-react';
import './PaymentList.css';
import Menu1 from '../components/Menu';
const PaymentList = () => {
  

  const paymentData = [
    {
      id: "00001",
      invoiceId: "BN001",
      paymentMethod: "Thẻ",
      patientId: "0123 xxx xxx",
      amount: "800.000 VND",
      paymentDate: "23/12/2025",
      transactionId: "0123 xxx xxx",
      status: "Đã hoàn thành"
    }
  ];

  return (
    <div className="container">
       <Menu1/>

      <div className="main-content">
        <div className="top-header">
          <div className="search-container">
            <Search className="search-icon" size={20} />
            <input type="text" placeholder="Search" className="search-input" />
          </div>
          <div className="user-profile">
            <div className="notification">
              <FileText size={20} />
              <span className="notification-badge">0</span>
            </div>
            <img src="/api/placeholder/40/40" alt="User" className="avatar" />
            <div className="user-info">
              <span className="user-name">Moni Roy</span>
              <span className="user-role">Admin</span>
            </div>
          </div>
        </div>

        <h1 className="page-title">Danh sách thanh toán</h1>

        <div className="table-container">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Mã hóa đơn</th>
                <th>Phương thức thanh toán</th>
                <th>Mã bệnh nhân</th>
                <th>Số tiền đã thanh toán</th>
                <th>Ngày thanh toán</th>
                <th>Mã giao dịch</th>
                <th>Trạng thái thanh toán</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paymentData.map(item => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.invoiceId}</td>
                  <td>{item.paymentMethod}</td>
                  <td>{item.patientId}</td>
                  <td>{item.amount}</td>
                  <td>{item.paymentDate}</td>
                  <td>{item.transactionId}</td>
                  <td>
                    <span className="status-badge status-completed">
                      {item.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="action-button">
                        <Edit size={16} />
                      </button>
                      <button className="action-button delete">
                        <Trash size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          <div className="pagination">
            <div className="pagination-info">
              Trang 1 của 84
            </div>
            <div className="pagination-buttons">
              <button className="pagination-button" disabled>
                <ChevronLeft size={16} />
              </button>
              <button className="pagination-button">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentList;