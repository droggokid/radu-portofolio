import NoSsr from "@mui/material/NoSsr";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-start justify-center pt-48">
      <NoSsr>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="center"
        >
          <Avatar
            sx={{
              width: 128,
              height: 128,
              position: "relative",
              transition: "transform 0.3s",
              "&:hover": { transform: "scale(1.05)" },
              border: "2px solid #fff",
            }}
          >
            <Image
              src="/images/RAF-1.jpg"
              alt="me"
              fill
              style={{ objectFit: "cover" }}
            />
          </Avatar>

          <h1 className="text-3xl md:text-4xl font-bold">
            Hello, I&apos;m Radu!
          </h1>
        </Stack>
      </NoSsr>
    </div>
  );
}
