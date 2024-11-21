import React, { useEffect } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ImEye } from 'react-icons/im';
import { AiFillPrinter } from 'react-icons/ai';

import Tag from '../../../components/Tag';
import Button from '../../../components/Button';
import {
  fetchWatch,
  // selectWatchIsLoading,
  selectWatches,
} from '../../../store/slices/paymentsSlice';
import { formatDateAndTime } from '../../../helpers/formatDate';
import { Link } from 'react-router-dom';

export default function Watch() {
  const dispatch = useDispatch();
  const watch = useSelector(selectWatches);
  // const isLoading = useSelector(selectWatchIsLoading);

  useEffect(() => {
    dispatch(fetchWatch());
  }, [dispatch]);

  console.log('watch', watch)
  const watchColumns = [
    {
      title: 'Watch ID',
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
      render: Product_Image => <img crossOrigin='anonymous' style={{ width: '50%'}} alt={Product_Image} src={`http://localhost:4000/public/uploads/${Product_Image}`} />
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
        >
          Delete
      </Button>
      </div>
      ),
    },
  ];

  console.log(watch);

  return (
    <Table
      rowClassName="payment-row"
      x={true}
      // loading={isLoading}
      scroll={{ x: 300 }}
      pagination={{
        position: ['bottomCenter'],
      }}
      columns={watchColumns}
      dataSource={watch}
      rowKey={(record) => record.order_id}
    />
  );
}
