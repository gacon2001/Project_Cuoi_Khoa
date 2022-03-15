import React, { useState } from "react";
import { Route } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import { styled } from '@material-ui/core/styles';
import DashboardNavbar from './components/DashboardNavbar';
import DashboardSidebar from './components/DashboardSidebar';

const DashboardLayoutRoot = styled('div')(
  ({ theme }) => ({
    backgroundColor: theme.palette.background.default,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const DashboardLayoutWrapper = styled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  })
);

const DashboardLayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = styled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

export default function Dashboard({ exact, path, component }) {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  
  // Vân phải có cái state ở trên + với
  return (
    <div>
      {/* <h1>Dashboard</h1>
       
        <Route exact={exact} path={path} component={component} /> */}
      <DashboardLayoutRoot>
        {/* cái này nè, Vân làm đi Vân*/}
        <DashboardNavbar onMobileNavOpen={() => setMobileNavOpen(true)} /> 

        <DashboardSidebar
          onMobileClose={() => setMobileNavOpen(false)}
          openMobile={isMobileNavOpen}
        />
        <DashboardLayoutWrapper>
          <DashboardLayoutContainer>
            <DashboardLayoutContent>
              <DashboardPage />
            </DashboardLayoutContent>
          </DashboardLayoutContainer>
        </DashboardLayoutWrapper>
      </DashboardLayoutRoot>
    </div>
  );
}
