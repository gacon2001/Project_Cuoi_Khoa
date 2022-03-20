import { useEffect, useRef, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
} from "@material-ui/core";
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  FilePlus,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon,
} from "react-feather";
import NavItem from "./NavItem";
import { useDispatch, useSelector } from "react-redux";
import { actUploadAvatarApi } from "./Avatar/modules/actions";
import { actFetchDetailUserApi } from "containers/AdminTemplate/EditUserAdmin/modules/actions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from "react-router-dom";

const items = [
  {
    href: "/dashboard-page",
    icon: BarChartIcon,
    title: "Dashboard",
  },
  {
    href: "/customers",
    icon: UsersIcon,
    title: "Customers",
  },
  {
    href: "/list-jobs",
    icon: ShoppingBagIcon,
    title: "List Jobs",
  },
  {
    href: "/list-user",
    icon: UsersIcon,
    title: "List Users",
  },
  {
    href: "/profile/:_id",
    icon: UserIcon,
    title: "Profile",
  },
  {
    href: "/signin",
    icon: LockIcon,
    title: "SignIn",
  },
  {
    href: "/signup",
    icon: UserPlusIcon,
    title: "SignUp",
  },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  //!này Hải thêm hả?
  const location = useLocation();
  const paths = location.pathname.split("/");
  const id = paths[paths.length - 1];
  //!useRef(): tương tự getELEById
  const imgref = useRef(null);
  const dispatch = useDispatch();
  const detailUser = useSelector((state) => {
    return state.editUserReducer.detailUser;
  });
  // const {_id} = useParams();

  const [img, setImg] = useState({});
  const [user, setUser] = useState({
    name: "",
    avatar: "",
  });

  const handleOnChange = (event) => {
    // 1. nhận vào file hình ảnh.
    // 2. dispatch action để gửi api cập nhật hình ảnh.
    // 3. thay đổi user.avatar thành ảnh mới chọn.
    const { files } = event.target;

    dispatch(actUploadAvatarApi(files[0]));
    // setImg({
    //   [files]: files[0]
    // })
  };
  console.log(user?.avatar);
  useEffect(() => {
    if (detailUser) setUser(detailUser);
  }, [detailUser]);
  useEffect(() => {
    if (id) dispatch(actFetchDetailUserApi(id));
  }, [id]);

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
      }}
    >
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          p: 2,
        }}
      >
        {user && user.avatar && (
          <Avatar
            // component="img"
            src={user.avatar}
            sx={{
              cursor: "pointer",
              width: 64,
              height: 64,
            }}
            //ban đầu current là null
            onClick={() => {
              imgref.current?.click();
            }}
          ></Avatar>
        )}
        {/* Bất kì thẻ html nào cũng có ref
          .value chỉ lấy đc đg dẫn -> .files(s: mảng nhiều) -> lấy vị trí thứ 0 */}
        {/* <input ref={imgref} type="file" hidden onChange={(e) => console.log(e.target.files[0])}/> */}
        <input ref={imgref} type="file" hidden onChange={handleOnChange} />

        {/* lấy name của admin đã login vào??? */}
        <Typography color="textPrimary" variant="h5">
          {/* <Link to={`/profile/${user._id}`}>{user.name}</Link> */}
          <Link to="/profile">{user.name}</Link>
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ p: 2 }}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box sx={{ flexGrow: 1 }} />
      <Box
        sx={{
          backgroundColor: "background.default",
          m: 2,
          p: 2,
        }}
      ></Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: 256,
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: 256,
              top: 64,
              height: "calc(100% - 64px)",
            },
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool,
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false,
};

export default DashboardSidebar;
