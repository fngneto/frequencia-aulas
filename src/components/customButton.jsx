import Button from '@mui/material/Button';

const MyStyledButton = (props) => (
  <Button
    sx={{
      padding: 1, // theme.spacing(1)
      backgroundColor: '#B0733E',
      color: 'white',
      '&:hover': {
        backgroundColor: '#8F5A29', // Ajuste a cor de hover se necessário
      },
    }}
  >
    {props.children}
  </Button>
);

export default MyStyledButton;
