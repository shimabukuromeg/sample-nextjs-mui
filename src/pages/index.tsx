import { ReactElement } from 'react';
import { Box, Button, Typography, Stack, Paper } from '@mui/material';
import { AuthenticatedLayout } from '@/src/layouts/authenticated-layout';
import type { NextPageWithLayout } from '@/src/pages/_app';

const Index: NextPageWithLayout = () => {
  return (
    <Box>
      <Typography variant="h2">TOPページ</Typography>
      <Button variant="contained" color="primary">
        ボタン
      </Button>
    </Box>
  );
};

Index.getLayout = (page: ReactElement) => (
  <AuthenticatedLayout>{page}</AuthenticatedLayout>
);

export default Index;
