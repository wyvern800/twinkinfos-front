import React, { useState, useEffect } from 'react';
import Input from '../../components/Input';
import back from '../../services/back';
import BuildsList from '../../components/BuildsList';
import * as Styled from './styles';

const Dashboard: React.FC = () => {
  const [builds, setBuilds] = useState([]);
  const [classes, setClasses] = useState([]);

  const [loaded, setLoaded] = useState(false);
  const [searching, setSearching] = useState(false);

  // get all classes
  useEffect(() => {
    const getClasses = async () => {
      await back.getAllClasses().then((res: any) => {
        setClasses(res.data);
      });
    };
    getClasses();
  }, []);

  return (
    <Styled.Wrapper>
      <Input
        classes={classes}
        setBuilds={setBuilds}
        setLoaded={setLoaded}
        setSearching={setSearching}
        loaded={loaded}
      />
      <BuildsList buildsList={builds} searching={searching} loaded={loaded} />
    </Styled.Wrapper>
  );
};

export default Dashboard;
