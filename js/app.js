        // Slack Name
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    slackNameElement.textContent = "Victor John";

    // Slack Display Picture
    const slackImageElement = document.querySelector('[data-testid="slackDisplayImage"]');
    slackImageElement.src = "https://ca.slack-edge.com/T05FFAA91JP-U05QW304C5D-5f78950020d5-512";
    slackImageElement.alt = "Victor John";

    // Current Day of the Week
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    currentDayElement.textContent = daysOfWeek[today.getDay()];

    // Current UTC Time
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    currentUTCTimeElement.textContent = Date.now();

    // Track
    const trackElement = document.querySelector('[data-testid="myTrack"]');
    trackElement.textContent = "Frontend";