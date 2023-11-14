import React, { useState, useEffect } from 'react';
import Input from '../../components/Input';
import back from '../../services/back';
import BuildsList from '../../components/BuildsList';
import * as Styled from './styles';
import Header from '../../components/Header';
import Fade from '@mui/material/Fade';
import Advertisement from '../../components/Advertisement';

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
    <>
      <Header />

      <Styled.OuterWrapper>
        <Advertisement loading={searching} horizontal />
        <Advertisement left="15px" loading={searching} />

        <Fade in={true}>
          <Styled.Wrapper>
            <Input
              classes={classes}
              setBuilds={setBuilds}
              setLoaded={setLoaded}
              setSearching={setSearching}
              buildsList={builds}
            />

            <BuildsList
              buildsList={builds}
              searching={searching}
              loaded={loaded}
            />
          </Styled.Wrapper>
        </Fade>

        <Advertisement right="15px" loading={searching} />
        <Advertisement loading={searching} horizontal />
      </Styled.OuterWrapper>
    </>
  );
};

export default Dashboard;
