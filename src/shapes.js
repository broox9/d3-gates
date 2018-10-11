import * as d3 from "d3";

const data = [14, 32, 8, 80];
const svg = d3
  .select("main")
  .append("svg")
  .attr("width", 600)
  .attr("height", 300);

svg
  .selectAll("circle")
  .data(data)
  .enter()
  .append("circle")
  .attr("class", "cirlcle-node")
  .attr("cx", d => d * 4)
  .attr("cy", d => d * 2)
  .attr("r", d => d)
  .call(d3.drag().on("start"));
