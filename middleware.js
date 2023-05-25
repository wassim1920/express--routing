const workingHoursMiddleware = (req, res, next) => {
    const currentDate = new Date();
    const currentDay = currentDate.getDay();
    const currentHour = currentDate.getHours();
  
    // Check if it's within working hours (Monday to Friday, from 9 to 17)
    if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour <= 17) {
      next(); // Continue to the next middleware or route handler
    } else {
      res.send('The web application is only available during working hours.');
    }
  };
  
  module.exports = workingHoursMiddleware;
  