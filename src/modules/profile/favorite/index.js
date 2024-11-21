import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../../../components/Button';
import {
  fetchFavorite,
  selectFavorites,
} from '../../../store/slices/paymentsSlice';
import { formatDateAndTime } from '../../../helpers/formatDate';
import { addFavorite } from '../../../store/slices/foodsSlice';

export default function Favorite() {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  const handleDeleteProduct = (id) => {
    dispatch(addFavorite(id))
    console.log(`Deleting product with id: ${id}`);
    window.location.href = "/profile/favorite"; // Redirect logic
  };

  useEffect(() => {
    dispatch(fetchFavorite());
  }, [dispatch]);

  const favoriteColumns = [
    {
      title: 'favorite ID',
      key: 'ID',
      dataIndex: 'id',
    },
    {
      title: 'Product Name',
      key: 'Product_Name',
      dataIndex: 'product_name',
    },
    {
      title: 'Thumnail',
      key: 'Product_Image',
      dataIndex: 'product_image',
      width: '20%',
      height: '100',
      render: (Product_Image) => (
        <img
          crossOrigin="anonymous"
          style={{ width: '50%' }}
          alt={Product_Image}
          src={`http://localhost:4000/public/uploads/${Product_Image}`}
        />
      ),
    },
    {
      title: 'Created Date',
      key: 'created date',
      render: (record) => formatDateAndTime(record.created_at),
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (record) => (
        <div className="button-container">
          <Button
            className="button button--main--food rounded"
            onClick={() => handleDeleteProduct(record.id)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Table
      rowClassName="payment-row"
      x={true}
      scroll={{ x: 300 }}
      pagination={{
        position: ['bottomCenter'],
      }}
      columns={favoriteColumns}
      dataSource={favorites}
      rowKey={(record) => record.order_id}
    />
  );
}
