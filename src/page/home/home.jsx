import { AddComment, Favorite } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import HomeSidebar from "./homeSidebar";

const Home = () => {
  const theme = useTheme();

  const smDown = useMediaQuery(theme.breakpoints.down("sm"));
  const smUp = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {smUp && (
        <Stack direction={`row`} gap={2}>
          <Box flexGrow={0} flexBasis={{ sm: "40%", md: "30%", lg: "20%" }}>
            <HomeSidebar />
          </Box>
          <Box
            flexGrow={1}
            height="300vh"
            pr={{ sm: "20px", md: "30px", lg: "0" }}
          >
            <Stack maxWidth={`lg`} direction="column" rowGap={4}>
              <Card>
                <CardHeader
                  avatar={<Avatar>R</Avatar>}
                  title="nama orang"
                  subheader="21-03-04"
                />
                <CardMedia
                  component="img"
                  image="https://source.unsplash.com/500x500"
                  height={450}
                  sx={{ objectFit: "cover", objectPosition: "center" }}
                />
                <CardContent>
                  <Typography>testing</Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton>
                    <Favorite />
                  </IconButton>
                  <IconButton>
                    <AddComment />
                  </IconButton>
                </CardActions>
              </Card>
              <Card>
                <CardHeader
                  avatar={<Avatar>R</Avatar>}
                  title="nama orang"
                  subheader="21-03-04"
                />
                <CardMedia
                  component="img"
                  image="https://source.unsplash.com/500x500"
                  height={450}
                />
                <CardContent>
                  <Typography>testing</Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <IconButton>
                    <Favorite />
                  </IconButton>
                  <IconButton>
                    <AddComment />
                  </IconButton>
                </CardActions>
              </Card>
            </Stack>
          </Box>
          <Box flexGrow={1} display={{ xs: "none", lg: "block" }}></Box>
        </Stack>
      )}
      {smDown && (
        <Container>
          <Card>
            <CardHeader
              avatar={<Avatar>R</Avatar>}
              title="nama orang"
              subheader="21-03-04"
            />
            <CardMedia
              component="img"
              image="https://source.unsplash.com/500x500"
              height={300}
            />
            <CardContent>
              <Typography>testing</Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton>
                <Favorite />
              </IconButton>
              <IconButton>
                <AddComment />
              </IconButton>
            </CardActions>
          </Card>
        </Container>
      )}
    </>
  );
};

export default Home;
