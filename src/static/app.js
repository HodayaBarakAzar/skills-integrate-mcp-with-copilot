document.addEventListener("DOMContentLoaded", () => {
  const activitiesList = document.getElementById("activities-list");

  // Function to fetch activities from API
  async function fetchActivities() {
    try {
      const response = await fetch("/activities");
      const activities = await response.json();

      // Clear loading message
      activitiesList.innerHTML = "";

      // Populate activities list
      Object.entries(activities).forEach(([name, details]) => {
        const activityCard = document.createElement("div");
        activityCard.className = "activity-card";

        activityCard.innerHTML = `
          <h4>${name}</h4>
          <p>${details.description}</p>
          <button class="register-btn" data-activity="${name}">Register Student</button>
        `;

        activitiesList.appendChild(activityCard);
      });
    } catch (error) {
      console.error("Error fetching activities:", error);
    }
  }

  // Initial fetch of activities
  fetchActivities();
});
