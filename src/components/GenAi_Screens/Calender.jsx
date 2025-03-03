import { useCalendarApp, ScheduleXCalendar } from '@schedule-x/react';
import {
  createViewMonthGrid,
  createViewMonthAgenda,
} from '@schedule-x/calendar';
import { createEventsServicePlugin } from '@schedule-x/events-service';
import '@schedule-x/theme-default/dist/index.css';
import { useEffect, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import fontFamily from '../../utils/fonts';
function CalendarApp() {
  const eventsService = useState(() => createEventsServicePlugin())[0];

  const calendar = useCalendarApp({
    views: [createViewMonthGrid(),],
    events: [
      {
        id: '1',
        title: 'Published: 1',
        start: '2025-03-03',
        end: '2025-03-03',
        type: 'published',
      },
      {
        id: '2',
        title: 'Published: 1',
        start: '2025-03-08',
        end: '2025-03-09',
        type: 'published',
      },
      {
        id: '3',
        title: 'Scheduled: 1',
        start: '2025-03-17',
        end: '2025-03-17',
        type: 'scheduled',
      },
      {
        id: '4',
        title: 'Scheduled: 1',
        start: '2024-01-15',
        end: '2024-01-15',
        type: 'scheduled',
      },
      {
        id: '5',
        title: 'Published: 1',
        start: '2025-03-03',
        end: '2025-03-03',
        type: 'published',
      },
    ],
    plugins: [eventsService],
  });

  useEffect(() => {
    eventsService.getAll();
  }, []);

  return (
    <Container sx={{ flexGrow: 1, paddingTop: 10 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography sx={{ fontFamily }}>Gen AI / All Posts</Typography>
      </Box>

      {/* Calendar Box with Fixed Height */}
      <Box sx={{ mt: 2, padding: '10px', backgroundColor: 'white', borderRadius: '10px', height:"75vh",  overflow: 'hidden' }}>
        <ScheduleXCalendar calendarApp={calendar}/>
      </Box>
    </Container>
  );
}

export default CalendarApp;
