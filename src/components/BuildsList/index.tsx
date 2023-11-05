import * as Styled from './styles';

type BuildsListProps = {
  buildsList: any[];
  selectedClass: any;
};

export const BuildsList = ({
  buildsList,
  selectedClass,
}: BuildsListProps): any => {
  return (
    <Styled.Wrapper>
      <>{`${selectedClass}'s Twink Builds`}</>
    </Styled.Wrapper>
  );
};

export default BuildsList;
