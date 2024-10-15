import React from "react";
import { Modal, Input } from "antd";

const NewsModal = ({ visible, onCancel, onOk, newsData, setNewsData, isEditing }) => {
  return (
    <Modal
      title={isEditing ? "Edit News" : "Add News"}
      visible={visible}
      okText={isEditing ? "Save" : "Add"}
      onCancel={onCancel}
      onOk={onOk}
    >
      <Input
        placeholder="Title"
        value={newsData.title}
        onChange={(e) => setNewsData((prev) => ({ ...prev, title: e.target.value }))}
      />
      <Input
        placeholder="Description"
        value={newsData.description}
        onChange={(e) => setNewsData((prev) => ({ ...prev, description: e.target.value }))}
      />
      <Input
        placeholder="Club"
        value={newsData.club}
        onChange={(e) => setNewsData((prev) => ({ ...prev, club: e.target.value }))}
      />
      <Input
        placeholder="Date"
        value={newsData.date}
        onChange={(e) => setNewsData((prev) => ({ ...prev, date: e.target.value }))}
      />
    </Modal>
  );
};

export default NewsModal;
