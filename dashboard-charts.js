const jobLocationData = {
  labels: ["Everett", "Seattle", "Lynnwood", "Bothell", "Mukilteo", "Edmonds"],
  datasets: [
    {
      label: "Revenue for November 2019",
      data: [12000, 19000, 8000, 15000, 10000, 20000],
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 1,
    },
  ],
};

const jobLocationOptions = {
  indexAxis: "y",
  scales: {
    x: {
      beginAtZero: true,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  barPercentage: 0.3,
  categoryPercentage: 0.7,
};

const jobLocationChart = new Chart(
  document.getElementById("jobLocationChart"),
  {
    type: "bar",
    data: jobLocationData,
    options: jobLocationOptions,
  }
);

const jobTypeData = {
  labels: [
    "Service Plumbing",
    "Bid Work HVAC",
    "Service HVAC",
    "Bid Work Plumbing",
    "HWT Replacement",
    "Maintenance",
    "Material Sale",
  ],
  datasets: [
    {
      label: "Revenue for November 2019",
      data: [30000, 50000, 20000, 25000, 15000, 10000, 5000],
      backgroundColor: "rgb(75, 192, 192)",
      borderColor: "rgb(75, 192, 192)",
      borderWidth: 1,
    },
  ],
};

const jobTypeOptions = {
  indexAxis: "y",
  scales: {
    x: {
      beginAtZero: true,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  barPercentage: 0.4,
  categoryPercentage: 0.7,
};

const jobTypeChart = new Chart(document.getElementById("jobTypeChart"), {
  type: "bar",
  data: jobTypeData,
  options: jobTypeOptions,
});
