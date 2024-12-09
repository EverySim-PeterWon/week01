import React from "react";
import * as dfd from "danfojs";

export function DataCSVAuto(projName) {
  // Load csv data
  async function LoadCSV({ file }) {
    const response = await fetch(file);
    const text = await response.text();

    const rows = text
      .split(/\r?\n/)
      .filter((row) => row.trim() !== "")
      .map((row) => row.split(","));

    const headers = rows.shift();
    const data = rows.map((row) => {
      return headers.reduce((obj, header, index) => {
        obj[header] = row[index];
        return obj;
      }, {});
    });

    return data;
  }

  function DirName(projName, fileName) {
    return `.src\\${projName}\\${fileName}.csv`;
  }

  const vertices_csv = LoadCSV(DirName(projName, "vertices"));
  const elements_tri_csv = LoadCSV(DirName(projName, "elements_tri"));
  const elements_quad_csv = LoadCSV(DirName(projName, "elements_quad"));

  return;
}
