import React, { useState, useEffect } from 'react';
import Input from '../../components/Input';
import back from '../../services/back';
import BuildsList from '../../components/BuildsList';
import * as Styled from './styles';

const Dashboard: React.FC = () => {
  const [builds, setBuilds] = useState([]);
  const [classes, setClasses] = useState([]);
  const [selectedClass, setSelectedClass] = useState('');
  const [loading, setLoading] = useState(false);

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
      {loading ? (
        <h1 style={{fontSize: '5rem', color: 'white'}}>Loading</h1>
      ) : (
        <Styled.Wrapper>
          <h1>
            {builds?.length >= 1 && selectedClass !== '' ? (
              <BuildsList buildsList={builds} selectedClass={selectedClass} />
            ) : (
              <>
                <Input
                  classes={classes}
                  setBuilds={setBuilds}
                  setSelectedClass={setSelectedClass}
                  setLoading={setLoading}
                />
              </>
            )}
          </h1>
        </Styled.Wrapper>
      )}
    </>
  );
};

export default Dashboard;
