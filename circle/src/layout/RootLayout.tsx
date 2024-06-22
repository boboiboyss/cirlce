import { Grid, GridItem } from "@chakra-ui/react";
import { SideBarLeft } from "@/components/SideBarLeft";
import { Outlet } from "react-router-dom";
import { SideBarRight } from "@/components/SideBarRight";

function RootLayout() {
  return (
    <Grid templateColumns="22% 50% 28%" bg="black">
      <GridItem w="100%">
        <SideBarLeft />
      </GridItem>
      <GridItem w="100%">
        <Outlet />
      </GridItem>
      <GridItem w="100%">
        <SideBarRight />
      </GridItem>
    </Grid>
  );
}

export default RootLayout;
