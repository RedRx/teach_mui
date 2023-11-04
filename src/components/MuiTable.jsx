import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Typography,
  Box,
  Stack,
} from "@mui/material";

const MuiTable = () => {
  return (
    <Stack direction="column" spacing={3}>
      <Stack direction={"column"} spacing={3} width={1100}>
        <Box m={5}>
          <Typography variant="h5">
            More useful when using with ReactTable
          </Typography>
        </Box>

        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            {/* Head */}
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Firstname</TableCell>
                <TableCell>Lastname</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell align="center">IP</TableCell>
              </TableRow>
            </TableHead>
            {/* Body */}
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell align="center">{row.ip_address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>

      <Stack direction={"column"} spacing={3} width={1100}>
        <Box m={1}>
          <Typography variant="h5">StickyHeader and Scroll</Typography>
        </Box>

        <TableContainer component={Paper} sx={{ maxHeight: "250px" }}>
          <Table aria-label="simple table" stickyHeader>
            {/* Head */}
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell>Firstname</TableCell>
                <TableCell>Lastname</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell align="center">IP</TableCell>
              </TableRow>
            </TableHead>
            {/* Body */}
            <TableBody>
              {tableData.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell align="center">{row.ip_address}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Stack>
    </Stack>
  );
};

export default MuiTable;

const tableData = [
  {
    id: 1,
    first_name: "Blondie",
    last_name: "Beeken",
    email: "bbeeken0@photobucket.com",
    gender: "Female",
    ip_address: "18.252.248.172",
  },
  {
    id: 2,
    first_name: "Arnie",
    last_name: "Hargraves",
    email: "ahargraves1@japanpost.jp",
    gender: "Male",
    ip_address: "170.58.191.208",
  },
  {
    id: 3,
    first_name: "Anestassia",
    last_name: "Touson",
    email: "atouson2@businesswire.com",
    gender: "Female",
    ip_address: "245.157.238.142",
  },
  {
    id: 4,
    first_name: "Tull",
    last_name: "Miskin",
    email: "tmiskin3@bravesites.com",
    gender: "Male",
    ip_address: "50.99.161.37",
  },
  {
    id: 5,
    first_name: "Freddi",
    last_name: "Issacoff",
    email: "fissacoff4@timesonline.co.uk",
    gender: "Female",
    ip_address: "109.246.247.8",
  },
  {
    id: 6,
    first_name: "Bobbye",
    last_name: "Binstead",
    email: "bbinstead5@pbs.org",
    gender: "Female",
    ip_address: "164.16.77.206",
  },
  {
    id: 7,
    first_name: "Thurston",
    last_name: "Pellamont",
    email: "tpellamont6@geocities.jp",
    gender: "Male",
    ip_address: "47.201.126.234",
  },
  {
    id: 8,
    first_name: "Hermina",
    last_name: "Spadoni",
    email: "hspadoni7@walmart.com",
    gender: "Female",
    ip_address: "191.36.109.226",
  },
  {
    id: 9,
    first_name: "Berni",
    last_name: "Mc Kellen",
    email: "bmckellen8@networkadvertising.org",
    gender: "Female",
    ip_address: "214.19.158.179",
  },
  {
    id: 10,
    first_name: "Erv",
    last_name: "Kinnerley",
    email: "ekinnerley9@xrea.com",
    gender: "Male",
    ip_address: "203.122.149.192",
  },
];
