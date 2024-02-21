import { Button, Typography } from "@mui/material";

const TITLE = "4 Quotients Self Reflection Quiz";
const DESCRIPTION = "Delve into the depths of your life through the lens of four distinct quotients.";
const CTA = "Take the Quiz";

export default function Home() {
  return (
    <div
      style={{
        display: 'grid',
        gap: '80px',
      }}
    >
    <div>
      <Typography variant="h2" fontWeight={500} gutterBottom>{TITLE}</Typography>
      <Typography variant="h5" gutterBottom>{DESCRIPTION}</Typography>
      </div>
      <div>
      <Button variant="contained">{CTA}</Button>
      </div>
    </div>
  );
}
