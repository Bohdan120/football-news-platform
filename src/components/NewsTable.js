import React from "react";
import { Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const NewsTable = ({ dataSource, onEditNews, onDeleteNews }) => {
  const columns = [
    { key: "1", title: "ID", dataIndex: "id" },
    { key: "2", title: "Заголовок", dataIndex: "title" },
    { key: "3", title: "Опис", dataIndex: "description" },
    { key: "4", title: "Клуб", dataIndex: "club" },
    { key: "5", title: "Дата", dataIndex: "date" },
    {
      key: "6",
      title: "Дія",
      render: (record) => (
        <>
          <EditOutlined onClick={() => onEditNews(record)} />
          <DeleteOutlined onClick={() => onDeleteNews(record)} style={{ color: "red", marginLeft: 12 }} />
        </>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataSource} rowKey="id" />;
};

export default NewsTable;
