import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constant";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      flexDirection="row"
      sx={{
        overflow: "auto",
        height: { xs: "30%", md: "66%" },
        flexDirection: { md: "column", sm: "column" },
      }}
    >
      {categories.map((category) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCategory(category.name)}
          style={{
            backgroundColor: category.name === selectedCategory && "red",
            color: "#fff",
          }}
          key={category.name}
        >
          <span
            style={{
              color: category.name === selectedCategory ? "#fff" : "red",
              marginRight: "15px",
            }}
          >
            {category.icon}
          </span>
          <span
            style={{ opacity: category.name === selectedCategory ? 2 : 0.8 }}
          >
            {category.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
