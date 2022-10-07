import {Outlet} from 'react-router-dom';
import { Header } from '../components/Header/Index';

export const DefaultHeaderLayout = () => {
  return (
    <div>
      <Header />
      <Outlet/>
    </div>
  )
}
