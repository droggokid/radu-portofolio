import { Avatar } from "@mui/material";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center bg-gray-100 pt-48">
      <Stack
        direction={{ xs: "column", md: "row" }}
        spacing={4}
        alignItems="center"
      >
        <Avatar
          alt="me"
          src="/images/RAF-1.jpg"
          sx={{
            width: 128,
            height: 128,
            transition: "transform 0.3s",
            "&:hover": { transform: "scale(1.05)" },
          }}
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-950">
          Hello, I&apos;m Radu!
        </h1>
      </Stack>
    </div>
  );
}
