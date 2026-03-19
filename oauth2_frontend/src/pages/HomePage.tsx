import { Container, Box, Typography, Button, Paper, Chip, Avatar } from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';
import { useAuth } from "../store/authStore";
import { useNavigate } from "react-router-dom";

export default function HomPage() {
  // 정의한 useAuth()를 사용해볼겁니다.
  const { use, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () : void => {
    logout();
    navigate('/login');
  }

  return(

    <>
    
    </>
  );
}