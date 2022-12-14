import type { ReactNode } from 'react';
import { AppBar } from '@/src/components/Navigation/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import { CommonLayout } from './common-layout';

export const UnauthenticatedLayout = ({
  children,
}: {
  children: ReactNode;
}) => {
  return (
    <CommonLayout>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <AppBar open={true} isAuth={false} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Stack
            height={'100%'}
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            {children}
          </Stack>
        </Box>
      </Box>
    </CommonLayout>
  );
};
