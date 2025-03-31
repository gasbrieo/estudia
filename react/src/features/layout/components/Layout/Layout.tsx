import type { FC, ReactNode } from "react";
import Box from "@mui/material/Box";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 1.5 }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Layout;
