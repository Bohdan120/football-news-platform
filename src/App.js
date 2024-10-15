import "./App.css";
import "antd/dist/antd";
import { Button, Modal } from "antd";
import { useState, useEffect } from "react";
import NewsModal from "./components/NewsModal"; 
import NewsTable from "./components/NewsTable"; 

function App() {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [editingNews, setEditingNews] = useState(null);
  const [newNews, setNewNews] = useState({ title: "", description: "", club: "", date: "" });
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const storedNews = JSON.parse(localStorage.getItem("newsData"));
    if (storedNews) {
      setDataSource(storedNews);
    } else {
      setDataSource([
        {
          id: 1,
          title: "Футбол",
          description: "Відбувся матч між командами...",
          club: "ФК 'Сокаль'",
          date: "15.10.24",
        },
        {
          id: 2,
          title: "Футбол",
          description: "Відбувся матч між командами...",
          club: "ФК 'Сокаль'",
          date: "15.10.24",
        },
        {
          id: 3,
          title: "Футбол",
          description: "Відбувся матч між командами...",
          club: "ФК 'Сокаль'",
          date: "15.10.24",
        },
        {
          id: 4,
          title: "Футбол",
          description: "Відбувся матч між командами...",
          club: "ФК 'Сокаль'",
          date: "15.10.24",
        },
        {
          id: 5,
          title: "Футбол",
          description: "Відбувся матч між командами...",
          club: "ФК 'Сокаль'",
          date: "15.10.24",
        }       
      ]);
    }
  }, []);

  const saveToLocalStorage = (data) => {
    localStorage.setItem("newsData", JSON.stringify(data));
  };

  const onDeleteNews = (record) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this news record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        const updatedDataSource = dataSource.filter((news) => news.id !== record.id);
        setDataSource(updatedDataSource);
        saveToLocalStorage(updatedDataSource);
      },
    });
  };

  const onEditNews = (record) => {
    setIsEditing(true);
    setEditingNews({ ...record });
    setNewNews({ ...record });
  };

  const resetEditing = () => {
    setIsEditing(false);
    setEditingNews(null);
  };

  const onAddNews = () => {
    setIsAdding(true);
    setNewNews({ title: "", description: "", club: "", date: "" });
  };

  const resetAdding = () => {
    setIsAdding(false);
    setNewNews({ title: "", description: "", club: "", date: "" });
  };

  const handleAddNews = () => {
    const newId = dataSource.length ? dataSource[dataSource.length - 1].id + 1 : 1;
    const newNewsData = { ...newNews, id: newId };
    const updatedDataSource = [...dataSource, newNewsData];
    setDataSource(updatedDataSource);
    saveToLocalStorage(updatedDataSource);
    resetAdding();
  };

  const handleSaveNews = () => {
    const updatedDataSource = dataSource.map((news) =>
      news.id === editingNews.id ? newNews : news
    );
    setDataSource(updatedDataSource);
    saveToLocalStorage(updatedDataSource);
    resetEditing();
  };

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={onAddNews} style={{margin: 10}}>Add a new News</Button>
        <NewsTable dataSource={dataSource} onEditNews={onEditNews} onDeleteNews={onDeleteNews} />
        
        <NewsModal 
          visible={isAdding}
          onCancel={resetAdding}
          onOk={handleAddNews}
          newsData={newNews}
          setNewsData={setNewNews}
          isEditing={false}
        />
        
        <NewsModal 
          visible={isEditing}
          onCancel={resetEditing}
          onOk={handleSaveNews}
          newsData={newNews}
          setNewsData={setNewNews}
          isEditing={true}
        />
      </header>
    </div>
  );
}

export default App;
