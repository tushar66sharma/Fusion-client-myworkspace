import { Paper, Text, Badge, Stack, Title, ScrollArea } from '@mantine/core';

// Sample data for the notice entries
const noticeEntries = [
  { id: 1, title: "Important announcement for all residents.Important announcement for all residents.", hall: "Global", isGlobal: true, time: "2024-10-08" },
  { id: 2, title: "Maintenance work scheduled for Hall 4", hall: "Hall 4", isGlobal: false, time: "2024-10-08" },
  { id: 3, title: "New study group forming in Hall 3", hall: "Hall 4", isGlobal: false, time: "2024-10-08" },
  { id: 4, title: "Reminder: Quiet hours start at 10 PM", hall: "Global", isGlobal: true, time: "2024-10-08" },
  { id: 5, title: "Hall 4 movie night this Friday", hall: "Hall 4", isGlobal: false, time: "2024-10-08" },
  { id: 6, title: "Important announcement for all residents.Important announcement for all residents.", hall: "Global", isGlobal: true, time: "2024-10-08" },
  { id: 7, title: "Maintenance work scheduled for Hall 4", hall: "Hall 4", isGlobal: false, time: "2024-10-08" },
  { id: 8, title: "New study group forming in Hall 3", hall: "Hall 4", isGlobal: false, time: "2024-10-08" },
  { id: 9, title: "Reminder: Quiet hours start at 10 PM", hall: "Global", isGlobal: true, time: "2024-10-08" },
  { id: 10, title: "Hall 4 movie night this Friday", hall: "Hall 4", isGlobal: false, time: "2024-10-08" },
];

export default function NoticeBoard() {
  return (
    <Paper
      shadow="md"
      p="md"
      withBorder
      sx={(theme) => ({
        position: 'fixed',
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.white,
        border: `1px solid ${theme.colors.gray[3]}`,
        borderRadius: theme.radius.md,
      })}
    >
      <Text 
        align="left" 
        mb="xl" 
        size="xl" 
        style={{ color: '#757575', weight: 'bold' }} // Gray color
      >
        Hostel Notice Board
      </Text>
      <ScrollArea style={{ flex: 1, height: 'calc(85vh - 56px)'}}>
        <Stack spacing="md" pb="md">
          {noticeEntries.length > 0 ? (
            noticeEntries.map((entry) => (
              <Paper
                key={entry.id}
                p="md"
                withBorder
                shadow="xs"
                sx={(theme) => ({
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: entry.isGlobal ? theme.colors.yellow[0] : theme.white,
                  borderColor: entry.isGlobal ? theme.colors.yellow[5] : theme.colors.gray[3],
                })}
              >
                <Text size="md" weight={entry.isGlobal ? 'bold' : 'normal'}>
                  {entry.title}
                </Text>

                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                  <Badge 
                    size="lg" 
                    variant={entry.isGlobal ? 'filled' : 'outline'}
                    color={entry.isGlobal ? 'yellow' : 'blue'}
                    style={{ flex: 1 }}
                  >
                    {entry.hall}
                  </Badge>
                  
                  <div style={{ flex: 7.5, textAlign: 'right', color: '#757575' }}>
                    {entry.time}
                  </div>
                </div>
              </Paper>
            ))
          ) : (
            <Text align="center" color="dimmed" size="lg">No notices at the moment.</Text>
          )}
        </Stack>
      </ScrollArea>
    </Paper>
  );
}