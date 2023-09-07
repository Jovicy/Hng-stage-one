    // JavaScript to populate dynamic data
    
    // Slack Name
    const slackNameElement = document.querySelector('[data-testid="slackUserName"]');
    slackNameElement.textContent = "Victor John";

    // Slack Display Picture
    const slackImageElement = document.querySelector('[data-testid="slackDisplayImage"]');
    slackImageElement.src = "https://ca.slack-edge.com/T05FFAA91JP-U05QW304C5D-5f78950020d5-512";
    slackImageElement.alt = "Bamideledml";

    // Current Day of the Week
    const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const today = new Date();
    currentDayElement.textContent = daysOfWeek[today.getDay()];

    // Current UTC Time
    const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');
    const currentTimeStamp = Date.now();
    
    // Create a Date object from the timestamp
    const utcDate = new Date(currentTimeStamp);

    // Format the date and time as a string (e.g., "Tue, 07 Sep 2023 12:34:56 UTC")
    const utcTimeString = utcDate.toUTCString();

    // Display the formatted UTC time
    currentUTCTimeElement.textContent = utcTimeString;

    // Track (You can customize this based on your track)
    const trackElement = document.querySelector('[data-testid="myTrack"]');
    trackElement.textContent = "Frontend";