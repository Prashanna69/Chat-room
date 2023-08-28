// Importing necessary dependencies from Chakra UI and React Icons
import { Divider, MenuGroup, MenuItem, MenuList } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import {
  IoSearchOutline,
  IoTrashOutline,
  IoVolumeMuteOutline,
  IoWarningOutline,
} from "react-icons/io5";

// Defining the Menu_item component
export default function Menu_item() {
  return (
    <>
      {/* Menu list */}
      <MenuList bg="#272829" border="1px dashed black">
        {/* Menu group */}
        <MenuGroup title="Option" color="white">
          {/* Menu items */}
          <MenuItem
            icon={<EditIcon color="white" />}
            bg="#272829"
            color="white"
            _hover={{ background: "#1f1f1f" }}
          >
            Marked as Read
          </MenuItem>
          <Divider color="gray" />
          <MenuItem
            icon={<IoSearchOutline color="white" />}
            bg="#272829"
            color="white"
            _hover={{ background: "#1f1f1f" }}
          >
            Search Chat
          </MenuItem>
          <Divider color="gray" />
          <MenuItem
            icon={<IoTrashOutline color="white" />}
            bg="#272829"
            color="white"
            _hover={{ background: "#1f1f1f" }}
          >
            Delete
          </MenuItem>
          <Divider color="gray" />
          <MenuItem
            icon={<IoVolumeMuteOutline />}
            bg="#272829"
            color="white"
            _hover={{ background: "#1f1f1f" }}
          >
            Mute
          </MenuItem>
          <Divider color="gray" />
          <MenuItem
            icon={<IoWarningOutline color="red" />}
            bg="#272829"
            color="red"
            _hover={{ background: "#1f1f1f" }}
          >
            Block
          </MenuItem>
        </MenuGroup>
      </MenuList>
    </>
  );
}
