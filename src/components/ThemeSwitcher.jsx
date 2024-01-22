import { useColorScheme } from '@mui/joy/styles';
import Button from '@mui/joy/Button';

export default function ThemeSwitcher() {
  return (
    <Button
      variant="outlined"
      color="neutral"
    >
      {mode === 'dark' ? 'Turn light' : 'Turn dark'}
    </Button>
  );
}

