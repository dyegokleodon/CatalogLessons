import React from 'react';
import { BrowserRouter, Switch } from "react-router-dom";
import { useSelector } from 'react-redux';
import PrivateRoute from './components/PrivateRoute';
import {Container, Menu, PageBody} from './AppStyled';

import HomeScreen from './pages/HomeScreen';
import Login from './pages/Login'
import Tela2Screen from './pages/Tela2Screen';
import LessonPage from './pages/LessonPage';
import MenuItem from './components/MenuItem';


export default () => {
    // eslint-disable-next-line
    const name = useSelector(state => state.user.name);

    return (
        <BrowserRouter>
            <Container>
               <Menu>
                <MenuItem icon="/assets/home.png" link="/"/>
                <MenuItem icon="/assets/profile.png" link="/login"/>
                <MenuItem icon="/assets/books.png" link="/modulos"/>
                <MenuItem icon="/assets/lesson.png" link="/lessons"/>
               </Menu>
               <PageBody>
                    <Switch>
                        <PrivateRoute exact path="/">
                            <HomeScreen />
                        </PrivateRoute>

                        <PrivateRoute exta path="/login">
                           <Login />
                        
                        </PrivateRoute>

                        <PrivateRoute private exact path="/modulos">
                            <Tela2Screen />
                        </PrivateRoute>

                        <PrivateRoute private exact path="/lessons">
                            <LessonPage />
                        </PrivateRoute>
                        
                        
                    </Switch>    
               </PageBody> 
            </Container>
            
        </BrowserRouter>
    );
}