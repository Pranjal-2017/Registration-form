import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Box, Button, FormControl, FormHelperText, Grid, InputLabel, FormLabel, MenuItem, Select, TextField, Typography, RadioGroup, FormControlLabel, Radio, Avatar } from "@material-ui/core";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const style = {
  marginTop: "40px",
  height: "100vh",
  alignItems: "center",
};
const Registration = () => {
  const [hobby, setHobby] = React.useState([]);
  const [country, setCountry] = React.useState('');

  const handleHobbyChange = (event) => {
    setHobby(event.target.value);
  };

  const handleChange = (event) => {
    setCountry(event.target.value);
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      country: '',
      address: '',
      hobbies: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sm={6} md={4} >
      <Box p={3} mt={5} display="flex" flexDirection="column" alignItems="center" style={style} border={1} borderColor="black.500" borderRadius={10}>

          <Typography variant="h5" mt={50} >
            <h1>FORM</h1>
          </Typography>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Name"
                  fullWidth
                  value={formik.values.name}
                  name="name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  label="Email"
                  fullWidth
                  value={formik.values.email}
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Address"
                  fullWidth
                  value={formik.values.address}
                  name="address"
                  onChange={formik.handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="country">Country</InputLabel>
                  <Select
                    labelId="country"
                    id="country"
                    value={country}
                    onChange={handleChange}
                  >
                    <MenuItem value="India">India</MenuItem>
                    <MenuItem value="Canada">Canada</MenuItem>
                    <MenuItem value="USA">USA</MenuItem>
                    <MenuItem value="SriLanka">SriLanka</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} mt={15} >
                <FormControl component="fieldset">
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup
                    row
                    aria-label="gender"
                    defaultValue="female"
                    name="gender"
                  >
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth error={formik.touched.hobbies && Boolean(formik.errors.hobbies)}>
                  <InputLabel id="hobbies-label">Hobbies/Interests</InputLabel>
                  <Select
                    labelId="hobbies-label"
                    id="hobbies"
                    multiple
                    value={hobby}
                    onChange={handleHobbyChange}
                    renderValue={(selected) => selected.join(", ")}
                  >
                    <MenuItem value="reading">Reading</MenuItem>
                    <MenuItem value="painting">Painting</MenuItem>
                    <MenuItem value="music">Music</MenuItem>
                    <MenuItem value="sports">Sports</MenuItem>
                  </Select>
                  {formik.touched.hobbies && formik.errors.hobbies && (
                    <FormHelperText>{formik.errors.hobbies}</FormHelperText>
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <Button variant="contained" color="primary" fullWidth type="submit">
                  Submit
                </Button>
                
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
    
  );
};

export default Registration;


