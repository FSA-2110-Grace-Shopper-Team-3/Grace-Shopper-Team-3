import React from 'react';

const categories = [
  {
    id: 1,
    img: 'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'GUITARS',
  },
  {
    id: 2,
    img: 'https://images.unsplash.com/photo-1550635707-e8c55839e834?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'DRUMS',
  },
  {
    id: 3,
    img: 'https://images.unsplash.com/photo-1611927264378-faced7a32de9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'CELLOS',
  },
  {
    id: 4,
    img: 'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'PIANOS',
  },
];

const Categories = () => {
  return (
    <div className="cats">
      <div className="cats-title">
        <h1>CATEGORIES</h1>
      </div>
      <div className="cats-items">
        {categories.map((item) => {
          return (
            <div key={item.id} className="cats-item">
              <div className="cats-item-wrap">
                <div>
                  <img src={item.img} />
                </div>
                <div className="cats-item-cover">
                  <div className="cats-item-title">
                    <h1>{item.title}</h1>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
