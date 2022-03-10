import React, {useState, useEffect} from 'react';
import { useHistory } from "react-router-dom";
import { Container, ModuleArea, ModuleList, LessonArea, LessonList} from './styled';

import api from '../../api';

import Header from '../../components/Header';
import ModuleItem from '../../components/ModuleItem';
import LessonItem from '../../components/LessonItem';

export default () => {
   // eslint-disable-next-line
    const history = useHistory();

    const [modules, setModules] = useState([]);
    const [activeModule, setActiveModule] = useState(4);
    const [lessons, setLessons] = useState([]);

    
    useEffect(()=>{
        const getModules =  async () => {
            const mod = await api.getModules();
            // eslint-disable-next-line
            setModules(mod)     
        };
        getModules();
    }, [])

    useEffect(() => {
        const getLessons = async () => {
            const less = await api.getLessons(activeModule);
            if(less){
                setLessons(less.lessons)
                
            }  
        };
        getLessons();
    }, [activeModule])
    
    return (
        <Container>
            <Header />
            {modules.length > 0 && 
                <ModuleArea>
                    Selecione um Módulo 
                    
                    <ModuleList>
                          
                        {modules.map((item, index)=>(
                            <ModuleItem 
                                key={index} 
                                data={item}
                                activeModule={activeModule}
                                setActiveModule={setActiveModule}
                                
                            />
                        ))}
                    </ModuleList>
                </ModuleArea> 
            }
                
            <LessonArea>
             Quantidade de aulas do Módulo Selecionado: {lessons.length} 
                 
                    <LessonList>
                      {
                        lessons.map((item, index) => (
                            <LessonItem 
                                key={index}
                                data ={item}
                            />
                        ))   
                      }   
                    </LessonList>
                
            </LessonArea>
        </Container>
    );
}