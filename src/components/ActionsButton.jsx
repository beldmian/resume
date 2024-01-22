import { Button, ButtonGroup, Dropdown, List, ListItem, ListItemButton, Menu, MenuButton, MenuItem, useColorScheme } from "@mui/joy";
import Brightness6Icon from '@mui/icons-material/Brightness6';
import LanguageIcon from '@mui/icons-material/Language';


export default function ActionsButton({ children, ...props }) {
    const { mode, setMode } = useColorScheme();
    return (
        <List
            sx={{ 
                position: 'fixed',
                bottom: 16,
                right: 16,
                borderRadius: 'sm',
            }}
            color="primary"
            variant="soft"
            orientation="vertical"
        >
            <ListItem>
                <Dropdown>
                    <MenuButton variant="soft" color="primary" slots={{ root: ListItemButton }} slotProps={{ root: { variant: 'soft', color: 'primary' }}}>
                        <LanguageIcon/>
                    </MenuButton>
                    <Menu>
                        <MenuItem selected>Русский</MenuItem>
                        <MenuItem disabled>English</MenuItem>
                    </Menu>
                </Dropdown>
            </ListItem>
            <ListItem>
                <ListItemButton
                    onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
                    variant="soft"
                    color="primary"
                >
                    <Brightness6Icon/>
                </ListItemButton>
            </ListItem>
        </List>
    )
}