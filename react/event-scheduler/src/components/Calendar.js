import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const events = [
    {
      title: 'Meeting',
      start: new Date(2023, 8, 18, 10, 30),  /* yr, mnth,day, hr, min */
      end: new Date(2023, 8, 18, 12, 0),
    },
    // Add more events here...
  ];

  return (
    <div>
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
      />
    </div>
  );
};

export default MyCalendar;
