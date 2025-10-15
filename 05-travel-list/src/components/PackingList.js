import { useState } from "react";
import Item from "././Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("packed");

  let sortedItems;
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "quantity") {
    sortedItems = items.slice().sort((a, b) => a.quantity - b.quantity);
  }
  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  }
  if (sortBy === "input") {
    sortedItems = items;
  }

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="sort">Sort By input order</option>
          <option value="description">Sort by description</option>
          <option value="quantity">Sort by quantity</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={sortedItems.length > 0 ? onClearList : null}>
          Clear List
        </button>
      </div>
    </div>
  );
}
